import * as React from 'react'
import { type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import { getLatestNotes } from '~/features/notes/api/getLatestNotes'
import { NoteListBasic } from '~/features/notes/components/list/NoteListBasic'

export const meta: MetaFunction = () => [
  { title: 'Notes | Latest' },
  { description: "Adam's latest notes" },
]

export const loader = async () => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const data = await getLatestNotes(apiBaseUrl)

  return { data }
}

export default function NotesIndexPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()

  return (
    <div className={`page ${className}`} style={style}>
      <h3>Latest notes</h3>
      <NoteListBasic data={data} />
    </div>
  )
}
