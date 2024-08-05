import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

export const meta: MetaFunction = () => [
  { title: 'Code | Archive | Year' },
  { description: "Adam's archived code snippets for year" },
]

export default function CodeSnippetsArchiveYearPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h4>Archived code snippets for year</h4>
      <Outlet />
    </div>
  )
}
