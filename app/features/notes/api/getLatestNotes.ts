// import type { Note } from '../types'

export async function getLatestNotes(apiBaseUrl: string) {
  const url = `${apiBaseUrl}/v1/notes`
  const opts = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const result = await fetch(url, opts)
  const data = await result.json()

  return data
}
