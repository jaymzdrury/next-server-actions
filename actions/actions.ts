'use server'
import { revalidateTag } from "next/cache"

export async function post(e: FormData | string) {
  const text = typeof e === 'string' ? e :  e.get('text')
  if (!text) return

  const res = await fetch(`${process.env.URL}/api`, {
    method: 'POST',
    body: JSON.stringify(text)
  })

  if(!res.ok) throw new Error()

  revalidateTag('data')
}