import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { redirect, useLoaderData, useNavigation } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import NoteForm from '~/features/notes/components/form/NoteForm'
import { getNote } from '~/features/notes/api/getNote'
import { updateNote } from '~/features/notes/api/updateNote'
import { deleteNote } from '~/features/notes/api/deleteNote'

import type { Note, NoteFormValues } from '~/features/notes/types'

export const meta: MetaFunction = () => [
  { title: 'Notes | Edit Detail' },
  { description: "Edit Adam's note details" },
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

export default function NotesEditDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const pending = navigation.formData?.get('intent') === 'editNote'
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Edit Note Details</h3>

      <NoteForm data={data} mode="edit" pending={pending} />
    </div>
  )
}

export const action = async ({
  params,
  request,
}: {
  params: Record<string, string>
  request: Request
}) => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const values = await request.formData()
  const { _action, ...body } = Object.fromEntries(values)
  body.updated_at = new Date().toISOString()

  if ('delete' === _action) {
    const result = await deleteNote(apiBaseUrl, parseInt(params.id))
    if (result[0].id) {
      return redirect('/notes')
    }
  }

  const result = await updateNote(
    apiBaseUrl,
    parseInt(params.id, 10),
    body as unknown as NoteFormValues,
  )
  if (result[0].id) {
    if ('save-redirect' === _action) {
      return redirect(`/notes/${result[0].id}`)
    }
    return result[0]
  }

  return null
}
