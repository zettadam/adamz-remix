import * as React from 'react'
import { Link } from '@remix-run/react'

import type { Note } from '~/features/notes/types'

export function NoteListBasic({
  className = '',
  data,
  style = {},
}: {
  className?: string
  data: Note[]
  style?: React.CSSProperties
}) {
  return (
    <div className={className} style={style}>
      {Array.isArray(data) ? (
        data.map((n) => (
          <article key={n.id}>
            <h4>
              <Link to={`/notes/${n.id}`}>{n.title}</Link>
            </h4>
            <p>
              Written on {n.created_at} |{' '}
              <Link to={`/notes/${n.id}/edit`}>Edit</Link>
            </p>
          </article>
        ))
      ) : (
        <p>No notes have been written yet.</p>
      )}
    </div>
  )
}
