import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Links' },
  { description: 'Saved over time' },
]

export default function LinksPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Latest links</h3>
      <p>Links will be shown here.</p>
    </div>
  )
}
