import * as React from 'react'
import { LinksFunction } from '@remix-run/node'
import { NavLink, Outlet } from '@remix-run/react'

import calendarLayoutHref from './calendar-layout.css?url'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: calendarLayoutHref },
]

export default function CalendarLayout({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`calendar-layout ${className}`} style={style}>
      <nav className="page">
        <NavLink to="/calendar">Index</NavLink>
        <span className="divider" />
        <NavLink to="/calendar/new" className="create">
          + New event
        </NavLink>
        <span className="divider" />
        <input type="search" name="keyword" placeholder="Search calendar" />
      </nav>

      <Outlet />
    </div>
  )
}
