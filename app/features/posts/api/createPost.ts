import type { PostFormValues } from '../types'

export async function createPost(apiBaseUrl: string, values: PostFormValues) {
  const url = `${apiBaseUrl}/v1/posts/new`
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
