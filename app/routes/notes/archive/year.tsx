import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

export const meta: MetaFunction = () => [
  { title: 'Notes | Archive | Year' },
  { description: "Adam's archived notes for year" },
]

export default function NotesArchiveYearPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h4>Notes archive for year</h4>
      <Outlet />
    </div>
  )
}
