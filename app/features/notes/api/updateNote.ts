import type { NoteFormValues } from '../types'

export async function updateNote(
  apiBaseUrl: string,
  id: number,
  values: NoteFormValues,
) {
  const url = `${apiBaseUrl}/v1/notes/${id}`
  const opts = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  }

  const result = await fetch(url, opts)
  const data = await result.json()

  return data
}
