export async function getPost(apiBaseUrl: string, id: number) {
  const url = `${apiBaseUrl}/v1/posts/${id}`
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
