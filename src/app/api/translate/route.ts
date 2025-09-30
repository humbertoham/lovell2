import { NextResponse } from 'next/server'
import crypto from 'crypto'

type ReqBody = { texts: string[]; target: string }
const serverCache = new Map<string, string>() // cache en memoria (se “resetea” al desplegar)

const h = (s: string) => crypto.createHash('sha1').update(s).digest('hex')

export async function POST(req: Request) {
  const { texts, target } = (await req.json()) as ReqBody
  const out: string[] = new Array(texts.length).fill('')

  // 1) separar cacheadas vs faltantes
  const missing: { idx: number; text: string }[] = []
  texts.forEach((t, i) => {
    const key = `${target}|${t}`
    if (serverCache.has(key)) out[i] = serverCache.get(key)!
    else missing.push({ idx: i, text: t })
  })

  // 2) traducir faltantes (en lote)
  if (missing.length) {
    const body =
      `target_lang=${encodeURIComponent(target.toUpperCase())}&` +
      missing.map(m => `text=${encodeURIComponent(m.text)}`).join('&')

    const res = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        Authorization: `DeepL-Auth-Key ${process.env.DEEPL_API_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
    })

    if (!res.ok) {
      return NextResponse.json({ error: 'Translation API error' }, { status: 500 })
    }

    const data = await res.json() as { translations: { text: string }[] }
    data.translations.forEach((t, j) => {
      const { idx, text: original } = missing[j]
      out[idx] = t.text
      serverCache.set(`${target}|${original}`, t.text)
    })
  }

  return NextResponse.json({ translations: out })
}
