'use client'
import { useEffect } from 'react'

/**
 * AutoTranslate
 * - Traduce el DOM a 'en' o 'es' según preferencia del usuario (localStorage 'lovell:lang')
 * - Sin diccionarios ni cambios en tus componentes con texto en español.
 * - Observa cambios del DOM (SPA) y re-traduce lo nuevo.
 */

type Lang = 'es' | 'en'
const LANG_KEY = 'lovell:lang'
const BATCH_SIZE = 100

// Hash simple para cache local
const hash = (s: string): string => {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (h << 5) - h + s.charCodeAt(i) | 0
  return h.toString()
}

// Recolecta nodos de texto traducibles
function textNodesUnder(root: Node): Text[] {
  const out: Text[] = []
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node: Node): number {
      const txt = node.textContent?.trim()
      if (!txt) return NodeFilter.FILTER_REJECT
      const textNode = node as Text
      const parent = textNode.parentElement
      if (!parent) return NodeFilter.FILTER_ACCEPT
      const tag = parent.tagName?.toLowerCase()
      if (tag && ['script','style','code','pre','noscript'].includes(tag)) return NodeFilter.FILTER_REJECT
      if (parent.dataset?.noTranslate === 'true') return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    }
  })
  let n: Node | null
  while ((n = walker.nextNode())) out.push(n as Text)
  return out
}

async function translateBatch(texts: string[], target: Lang): Promise<string[]> {
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
    __lovellTrBusy?: boolean
  }
}

function applyTranslationRun(target: Lang) {
  const nodes = textNodesUnder(document.body)
  if (!nodes.length) return

  const originals = nodes.map(n => n.textContent ?? '')
  const toTranslate: string[] = []
  const mapIdx: number[] = []

  // 1) Cache local inmediata
  originals.forEach((t, i) => {
    const key = `tr:${target}:${hash(t)}`
    const cached = localStorage.getItem(key)
    if (cached) {
      nodes[i].textContent = cached
    } else {
      toTranslate.push(t)
      mapIdx.push(i)
    }
  })

  // 2) Lotes pendientes
  ;(async () => {
    for (let i = 0; i < toTranslate.length; i += BATCH_SIZE) {
      const slice = toTranslate.slice(i, i + BATCH_SIZE)
      try {
        const trs = await translateBatch(slice, target)
        trs.forEach((translated, j) => {
          const idx = mapIdx[i + j]
          const original = originals[idx]
          nodes[idx].textContent = translated
          localStorage.setItem(`tr:${target}:${hash(original)}`, translated)
        })
      } catch (e) {
        console.error('[AutoTranslate] batch error', e)
      }
    }
  })()
}

export default function AutoTranslate() {
  useEffect(() => {
    // idioma inicial: lo que haya elegido el usuario; por defecto ES
    const initial = (localStorage.getItem(LANG_KEY) as Lang) || 'es'

    // primera pasada
    if (initial !== 'es') applyTranslationRun(initial)

    // re-traducir en cambios del DOM (SPA)
    const mo = new MutationObserver(() => {
      if (window.__lovellTrBusy) return
      window.__lovellTrBusy = true
      setTimeout(() => {
        try {
          const lang = (localStorage.getItem(LANG_KEY) as Lang) || 'es'
          if (lang !== 'es') applyTranslationRun(lang)
          else applyTranslationRun('es') // forzamos volver a ES vía API/cache
        } finally {
          window.__lovellTrBusy = false
        }
      }, 150)
    })
    mo.observe(document.body, { childList: true, subtree: true, characterData: true })

    // escucha cambios manuales desde la Navbar (evento custom)
    const onLangEvent = (e: Event) => {
      const detail = (e as CustomEvent<{ lang: Lang }>).detail
      const lang = detail?.lang ?? ((localStorage.getItem(LANG_KEY) as Lang) || 'es')
      applyTranslationRun(lang)
    }
    window.addEventListener('lovell:lang', onLangEvent)

    // sync entre pestañas
    const onStorage = (ev: StorageEvent) => {
      if (ev.key === LANG_KEY && ev.newValue) {
        const lang = ev.newValue as Lang
        applyTranslationRun(lang)
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      mo.disconnect()
      window.removeEventListener('lovell:lang', onLangEvent)
      window.removeEventListener('storage', onStorage)
    }
  }, [])

  return null
}
