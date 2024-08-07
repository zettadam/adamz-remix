import * as React from 'react'
import { LinksFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'

import codeLayoutHref from './code-layout.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: codeLayoutHref },
]

export default function CodeLayout({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`code-layout ${className}`} style={style}>
      <nav className="page">
        <NavLink to="/code" end>
          Index
        </NavLink>
        <span className="divider" />
        <NavLink to="/code/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/code/new" className="create">
          + New code snippet
        </NavLink>
        <span className="divider" />
        <input
          type="search"
          name="keyword"
          placeholder="Search code snippets"
        />
      </nav>

      <Outlet />
    </div>
  )
}
