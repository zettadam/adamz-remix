import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Code | Archive | Year | Month | Day' },
  { description: "Adam's archived code snippets for year & month & day" },
]

export default function CodeSnippetsArchiveDayPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h6>Archived code snippets for year & month & day</h6>
    </div>
  )
}
