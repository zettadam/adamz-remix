import * as React from 'react'
import { type MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import { getLatestCodeSnippets } from '~/features/code/api/getLatestCodeSnippets'
import { CodeSnippetListBasic } from '~/features/code/components/list/CodeSnippetListBasic'

export const meta: MetaFunction = () => [
  { title: 'Code Snippets | Latest' },
  { description: "Adam's latest code snippets" },
]

export const loader = async () => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const data = await getLatestCodeSnippets(apiBaseUrl)

  return { data }
}

export default function CodeSnippetsIndexPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()

  return (
    <div className={`page ${className}`} style={style}>
      <h3>Latest code snippets</h3>
      <CodeSnippetListBasic data={data} />
    </div>
  )
}
