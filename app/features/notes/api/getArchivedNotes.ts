// import type { Note } from '../types'

export async function getArchivedNotes(
  apiBaseUrl: string,
  {
    year,
    month,
    day,
  }: {
    year: number
    month: number
    day: number
  },
) {
  let url = `${apiBaseUrl}/v1/notes/archive`

  if (year & month & day) {
    url += `/${year}/${month}/${day}`
  } else if (year & month) {
    url += `/${year}/${month}`
  } else if (year) {
    url += `/${year}`
  }

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
