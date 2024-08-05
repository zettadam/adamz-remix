export async function deleteCodeSnippet(apiBaseUrl: string, id: number) {
  const url = `${apiBaseUrl}/v1/code/${id}`
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
