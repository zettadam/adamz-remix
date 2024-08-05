import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Notes | Archive | Year | Month | Day' },
  { description: "Adam's archived notes for year & month & day" },
]

export default function NotesArchiveDayPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h6>Notes Archive for year & month & day</h6>
    </div>
  )
}
