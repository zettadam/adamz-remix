import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { useNavigation } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import CodeSnippetForm from '~/features/code/components/form/CodeSnippetForm'
import { createCodeSnippet } from '~/features/code/api/createCodeSnippet'

import type { CodeSnippetFormValues } from '~/features/code/types'

export const meta: MetaFunction = () => [
  { title: 'Code | New code snippet' },
  { description: 'Create a new code snippet' },
]

export default function CodeSnippetEditDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const navigation = useNavigation()
  const pending = navigation.formData?.get('intent') === 'editCodeSnippet'
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Create a new code snippet</h3>

      <CodeSnippetForm mode="create" pending={pending} />
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

  await createCodeSnippet(apiBaseUrl, body as unknown as CodeSnippetFormValues)

  return null
}
