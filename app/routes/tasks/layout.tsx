import * as React from 'react'
import { LinksFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'

import tasksLayoutHref from './tasks-layout.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tasksLayoutHref },
]

export default function TasksLayout({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`tasks-layout ${className}`} style={style}>
      <nav className="page">
        <NavLink to="/tasks">Index</NavLink>
        <span className="divider" />
        <NavLink to="/tasks/archive">Archive</NavLink>
        <span className="divider" />
        <NavLink to="/tasks/new" className="create">
          + New task
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search tasks" />
      </nav>

      <Outlet />
    </div>
  )
}
