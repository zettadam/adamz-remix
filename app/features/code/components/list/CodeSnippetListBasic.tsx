import * as React from 'react'
import { Link } from '@remix-run/react'

import HtmlContent from '~/components/html-content/HtmlContent'
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
        data.map((s) => (
          <article key={s.id}>
            <h4>
              <Link to={`/code/${s.id}`}>{s.title}</Link>
            </h4>
            {s.description ? <HtmlContent content={s.description} /> : null}
            <p>
              Written on {s.created_at} |{' '}
              <Link to={`/code/${s.id}/edit`}>Edit</Link>
            </p>
          </article>
        ))
      ) : (
        <p>No code snippets have been written yet.</p>
      )}
    </div>
  )
}
