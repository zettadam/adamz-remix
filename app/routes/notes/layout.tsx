import * as React from 'react'
import { LinksFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'

import notesLayoutHref from './notes-layout.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: notesLayoutHref },
]

export default function NotesLayout({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`notes-layout ${className}`} style={style}>
      <nav className="page">
        <NavLink to="/notes">Index</NavLink>
        <span className="divider" />
        <NavLink to="/notes/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/notes/new" className="create">
          + New note
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search notes" />
      </nav>

      <Outlet />
    </div>
  )
}
