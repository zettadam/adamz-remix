export async function getLatestPosts(apiBaseUrl: string) {
  const url = `${apiBaseUrl}/v1/posts`
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
