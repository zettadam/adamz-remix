import { Link, useParams } from '@remix-run/react'

import HtmlContent from '~/components/html-content/HtmlContent'
import type { Note } from '../../types'

export default function NoteDetail({ data }: { data: Note }) {
  const params = useParams()

  if (Object.keys(data).length < 1) {
    return <p>No data</p>
  }

  return (
    <article>
      <header>
        <h1>{data.title}</h1>
        <p>
          <Link to={`/notes/${params.id}/edit`}>Edit</Link>
        </p>
      </header>
      <main>
        <HtmlContent content={data.body} />
      </main>
    </article>
  )
}
