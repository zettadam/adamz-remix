import * as React from 'react'
import { LinksFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'

import linksLayoutHref from './links-layout.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: linksLayoutHref },
]

export default function LinksLayout({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`links-layout ${className}`} style={style}>
      <nav className="page">
        <NavLink to="/links">Index</NavLink>
        <span className="divider" />
        <NavLink to="/links/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/links/new" className="create">
          + New link
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search links" />
      </nav>

      <Outlet />
    </div>
  )
}
