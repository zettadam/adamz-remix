// import type { CodeSnippet } from '../types'

export async function getLatestCodeSnippets(apiBaseUrl: string) {
  const url = `${apiBaseUrl}/v1/code`
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
