import * as React from 'react'
import { Outlet } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Code | Archive | Year | Month' },
  { description: "Adam's archived code snippets for year & month" },
]

export default function CodeSnippetsArchiveMonthPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h5>Archived code snippets for year & month</h5>
      <Outlet />
    </div>
  )
}
