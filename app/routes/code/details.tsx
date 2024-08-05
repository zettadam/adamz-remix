import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import { getCodeSnippet } from '~/features/code/api/getCodeSnippet'
import CodeSnippetDetail from '~/features/code/components/detail/CodeSnippetDetail'

import type { CodeSnippet } from '~/features/code/types'

export const meta: MetaFunction = () => [
  { title: 'Code | Code Snippet Detail' },
  { description: "Adam's code snippet in detail" },
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

export default function CodeSnippetsDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()
  return (
    <div className={`page ${className}`} style={style}>
      <CodeSnippetDetail data={data} />
    </div>
  )
}
