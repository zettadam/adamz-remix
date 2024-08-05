import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Tasks' },
  { description: 'There is always something to do' },
]

export default function TasksPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <p>Tasks will be shown here.</p>
    </div>
  )
}
