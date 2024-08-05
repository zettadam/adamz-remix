import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { redirect, useLoaderData, useNavigation } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import CodeSnippetForm from '~/features/code/components/form/CodeSnippetForm'
import { getCodeSnippet } from '~/features/code/api/getCodeSnippet'
import { updateCodeSnippet } from '~/features/code/api/updateCodeSnippet'

import type { CodeSnippet, CodeSnippetFormValues } from '~/features/code/types'

export const meta: MetaFunction = () => [
  { title: 'Code | Edit Detail' },
  { description: "Edit Adam's code snippet details" },
]

export const loader = async ({
  params,
}: {
  params: Record<string, string>
}): Promise<{ data: CodeSnippet }> => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const data = await getCodeSnippet(apiBaseUrl, parseInt(params.id, 10))

  return { data: data[0] ?? {} }
}

export default function CodeSnippetsEditDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const pending = navigation.formData?.get('intent') === 'editCodeSnippet'
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Edit Code Snippet Details</h3>

      <CodeSnippetForm data={data} mode="edit" pending={pending} />
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
  const body = Object.fromEntries(values)
  body.updated_at = new Date().toISOString()

  await updateCodeSnippet(
    apiBaseUrl,
    parseInt(params.id, 10),
    body as unknown as CodeSnippetFormValues,
  )

  return redirect(`/code/${params.id}`)
}
