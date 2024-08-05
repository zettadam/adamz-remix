import type { PostFormValues } from '../types'

export async function updatePost(
  apiBaseUrl: string,
  id: number,
  values: PostFormValues,
) {
  const url = `${apiBaseUrl}/v1/posts/${id}`
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
