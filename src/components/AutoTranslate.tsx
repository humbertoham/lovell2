'use client'
import { useEffect } from 'react'

/** Utils **/
const isSpanish = (lang: string) => lang.toLowerCase().startsWith('es')
const targetFromNavigator = (nav: string): 'en' | 'es' =>
  isSpanish(nav) ? 'es' : 'en'

const BATCH_SIZE = 100

// Hash rápido y estable para cache local
const hash = (s: string): string => {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i) | 0
  return h.toString()
}

// Recolecta nodos de texto visibles y traducibles
function textNodesUnder(root: Node): Text[] {
  const out: Text[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node: Node): number {
      const txt = node.textContent?.trim()
      if (!txt) return NodeFilter.FILTER_REJECT

      // Un Node puede no ser Text, pero SHOW_TEXT garantiza Text.
      const textNode = node as Text
      const parent = textNode.parentElement
      if (!parent) return NodeFilter.FILTER_ACCEPT

      const tag = parent.tagName?.toLowerCase()
      if (tag && ['script', 'style', 'code', 'pre', 'noscript'].includes(tag)) {
        return NodeFilter.FILTER_REJECT
      }
      if (parent.dataset?.noTranslate === 'true') {
        return NodeFilter.FILTER_REJECT
      }
      return NodeFilter.FILTER_ACCEPT
    }
  })

  let n: Node | null
  while ((n = walker.nextNode())) out.push(n as Text)
  return out
}

async function translateBatch(texts: string[], target: 'en' | 'es'): Promise<string[]> {
  const res = await fetch('/api/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ texts, target })
  })
  if (!res.ok) throw new Error('Translation failed')
  const data = (await res.json()) as { translations: string[] }
  return data.translations
}

declare global {
  interface Window {
    __trBusy?: boolean
  }
}

function applyTranslationRun(target: 'en' | 'es') {
  const nodes = textNodesUnder(document.body)
  if (nodes.length === 0) return

  const originals = nodes.map(n => n.textContent ?? '')

  // 1) Aplica caché local inmediatamente
  const toTranslate: string[] = []
  const toIndex: number[] = []
  originals.forEach((text, idx) => {
    const key = `tr:${target}:${hash(text)}`
    const cached = localStorage.getItem(key)
    if (cached) {
      nodes[idx].textContent = cached
    } else {
      toTranslate.push(text)
      toIndex.push(idx)
    }
  })

  // 2) Traduce en lotes lo que falte y cachea
  ;(async () => {
    for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
      const slice = toTranslate.slice(i, i + BATCH_SIZE)
      try {
        const trs = await translateBatch(slice, target)
        trs.forEach((translated, j) => {
          const globalIdx = toIndex[i + j]
          const original = originals[globalIdx]
          nodes[globalIdx].textContent = translated
          localStorage.setItem(`tr:${target}:${hash(original)}`, translated)
        })
      } catch (e) {
        // En caso de error, dejamos el texto original
        // y no bloqueamos la UX.
        // eslint-disable-next-line no-console
        console.error('[AutoTranslate] batch error', e)
      }
    }
  })()
}

export default function AutoTranslate() {
  useEffect(() => {
    const lang = (typeof navigator !== 'undefined' && navigator.language) ? navigator.language : 'en'
    if (isSpanish(lang)) return // Si el dispositivo está en español, no hacemos nada.

    const target = targetFromNavigator(lang)

    // Primera pasada (contenido ya renderizado)
    applyTranslationRun(target)

    // Observar cambios del DOM (navegación interna/SPA, contenido cargado luego)
    const observer = new MutationObserver(() => {
      if (window.__trBusy) return
      window.__trBusy = true
      // Pequeño throttle para evitar ráfagas
      setTimeout(() => {
        try {
          applyTranslationRun(target)
        } finally {
          window.__trBusy = false
        }
      }, 150)
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    })

    return () => observer.disconnect()
  }, [])

  return null
}
