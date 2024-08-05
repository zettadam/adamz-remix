import * as React from 'react'
import { Link } from '@remix-run/react'

import type { CodeSnippet } from '~/features/code/types'

export function CodeSnippetListBasic({
  className = '',
  data,
  style = {},
}: {
  className?: string
  data: CodeSnippet[]
  style?: React.CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {Array.isArray(data) ? (
        data.map((n) => (
          <article key={n.id}>
            <h4>
              <Link to={`/code/${n.id}`}>{n.title}</Link>
            </h4>
            <p>
              Written on {n.created_at} |{' '}
              <Link to={`/code/${n.id}/edit`}>Edit</Link>
            </p>
          </article>
        ))
      ) : (
        <p>No code snippets have been written yet.</p>
      )}
    </div>
  )
}
