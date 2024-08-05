export async function deletePost(apiBaseUrl: string, id: number) {
  const url = `${apiBaseUrl}/v1/posts/${id}`
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
