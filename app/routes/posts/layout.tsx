import * as React from 'react'
import type { LinksFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'

import postsLayoutHref from './posts-layout.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: postsLayoutHref },
]

export default function PostsLayout({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`posts-layout ${className}`} style={style}>
      <nav className="page">
        <NavLink to="/posts">Index</NavLink>
        <span className="divider" />
        <NavLink to="/posts/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/posts/new" className="create">
          + New post
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search posts" />
      </nav>

      <Outlet />
    </div>
  )
}
