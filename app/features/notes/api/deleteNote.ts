export async function deleteNote(apiBaseUrl: string, id: number) {
  const url = `${apiBaseUrl}/v1/notes/${id}`
  const opts = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const result = await fetch(url, opts)
  const data = await result.json()

  return data
}
