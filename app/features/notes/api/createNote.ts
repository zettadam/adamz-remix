import type { NoteFormValues } from '../types'

export async function createNote(apiBaseUrl: string, values: NoteFormValues) {
  const url = `${apiBaseUrl}/v1/notes/new`
  const opts = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }

  const result = await fetch(url, opts)
  const data = await result.json()

  return data
}
