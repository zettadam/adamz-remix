import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { Outlet } from '@remix-run/react'

export const meta: MetaFunction = () => [
  { title: 'Posts | Archive | Year' },
  { description: "Adam's archived posts for year" },
]

export default function PostsArchiveYearPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h4>Archived posts for year</h4>
      <Outlet />
    </div>
  )
}
