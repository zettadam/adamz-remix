import * as React from 'react'
import { Outlet } from '@remix-run/react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Posts | Archive | Year | Month' },
  { description: "Adam's archived posts for year & month" },
]

export default function PostsArchiveMonthPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h5>Archive posts for year & month</h5>
      <Outlet />
    </div>
  )
}
