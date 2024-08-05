import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { redirect, useNavigation } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import NoteForm from '~/features/notes/components/form/NoteForm'
import { createNote } from '~/features/notes/api/createNote'

import type { NoteFormValues } from '~/features/notes/types'

export const meta: MetaFunction = () => [
  { title: 'Notes | New note' },
  { description: 'Create a new note' },
]

export default function NotesEditDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const navigation = useNavigation()
  const pending = navigation.formData?.get('intent') === 'editNote'
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Create a new note</h3>

      <NoteForm mode="create" pending={pending} />
    </div>
  )
}

export const action = async ({
  request,
}: {
  params: Record<string, string>
  request: Request
}) => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const values = await request.formData()
  const body = Object.fromEntries(values)

  const data = await createNote(apiBaseUrl, body as unknown as NoteFormValues)

  return data[0].id ? redirect(`/notes/${data[0].id}`) : null
}
