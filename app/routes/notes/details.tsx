import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import { getNote } from '~/features/notes/api/getNote'
import NoteDetail from '~/features/notes/components/detail/NoteDetail'

import type { Note } from '~/features/notes/types'

export const meta: MetaFunction = () => [
  { title: 'Notes | Detail' },
  { description: "Adam's note in detail" },
]

export const loader = async ({
  params,
}: {
  params: Record<string, string>
}): Promise<{ data: Note }> => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const data = await getNote(apiBaseUrl, parseInt(params.id, 10))

  return { data: data[0] ?? {} }
}

export default function NotesDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()
  return (
    <div className={`page ${className}`} style={style}>
      <NoteDetail data={data} />
    </div>
  )
}
