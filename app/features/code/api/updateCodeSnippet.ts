import type { CodeSnippetFormValues } from '../types'

export async function updateCodeSnippet(
  apiBaseUrl: string,
  id: number,
  values: CodeSnippetFormValues,
) {
  const url = `${apiBaseUrl}/v1/code/${id}`
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
