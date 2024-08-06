import * as React from 'react'
import { Link } from '@remix-run/react'

import HtmlContent from '~/components/html-content/HtmlContent'
import type { Post } from '~/features/posts/types'

export function PostListBasic({
  className = '',
  data,
  style = {},
}: {
  className?: string
  data: Post[]
  style?: React.CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((p) => (
          <article key={p.id}>
            <h4>
              <Link to={`/posts/${p.id}`}>{p.title}</Link>
            </h4>
            {p.abstract ? <HtmlContent content={p.abstract} /> : null}
            <p>
              Written on {p.created_at} |{' '}
              <Link to={`/posts/${p.id}/edit`}>Edit</Link>
            </p>
          </article>
        ))
      ) : (
        <p>No posts have been written yet.</p>
      )}
    </div>
  )
}
