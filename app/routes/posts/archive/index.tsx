import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { Link, Outlet } from '@remix-run/react'

export const meta: MetaFunction = () => [
  { title: 'Posts | Archive' },
  { description: "Adam's archived posts" },
]

export default function PostsArchivePage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Archived Posts</h3>

      <menu>
        <li>
          <Link to="2024">2024</Link>
        </li>
        <li>
          <Link to="2023">2023</Link>
        </li>
        <li>
          <Link to="2022">2022</Link>
        </li>
      </menu>

      <Outlet />
    </div>
  )
}
