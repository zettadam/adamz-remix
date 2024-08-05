import { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react'

import cssPropsHref from './props.css?url'
import appStylesHref from './app.css?url'

export const links: LinksFunction = () => [
  { rel: 'preload', as: 'image', href: '/symbols.svg', type: 'image/svg+xml' },
  { rel: 'stylesheet', href: cssPropsHref },
  { rel: 'stylesheet', href: appStylesHref },
]

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()

  const section = location.pathname.split('/')[1]

  console.log('section', section, location.pathname)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <Links />
      </head>
      <body>
        <div className="main-layout">
          <header className={section}>
            <hgroup>
              <h1>Adam Ziolkowski</h1>
              <h2 className={section}>{section}</h2>
            </hgroup>
          </header>
          {children}
          <footer>
            <nav>
              <span>
                <NavLink to="/posts" className="posts">
                  Posts
                </NavLink>
                <NavLink to="/notes" className="notes">
                  Notes
                </NavLink>
                <NavLink to="/code" className="code">
                  Code
                </NavLink>
              </span>
              <NavLink to="/" className="home">
                Home
              </NavLink>
              <span>
                <NavLink to="/links" className="links">
                  Links
                </NavLink>
                <NavLink to="/tasks" className="tasks">
                  Tasks
                </NavLink>
                <NavLink to="/calendar" className="calendar">
                  Calendar
                </NavLink>
              </span>
            </nav>
          </footer>
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
