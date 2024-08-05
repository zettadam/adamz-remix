import * as React from 'react'
import { Outlet } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Notes | Archive | Year | Month' },
  { description: "Adam's archived notes for year & month" },
]

export default function NotesArchiveMonthPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h5>Notes archive for year & month</h5>
      <Outlet />
    </div>
  )
}
