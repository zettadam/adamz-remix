import type { CodeSnippetFormValues } from '../types'

export async function createCodeSnippet(
  apiBaseUrl: string,
  values: CodeSnippetFormValues,
) {
  const url = `${apiBaseUrl}/v1/code/new`
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
