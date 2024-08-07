import { Link, useParams } from '@remix-run/react'

import { DefaultDateTimeFormat as dtf } from '~/helpers/datetime'
import HtmlContent from '~/components/html-content/HtmlContent'
import type { Post } from '../../types'

export default function PostDetail({ data }: { data: Post }) {
  const params = useParams()

  if (Object.keys(data).length < 1) {
    return <p>No data</p>
  }

  return (
    <article>
      <header>
        <h1>{data.title}</h1>
        <p>
          {data.published_at ? (
            <>Published on {dtf.format(new Date(data.published_at))}</>
          ) : (
            <>Created on {dtf.format(new Date(data.created_at))}</>
          )}{' '}
          | <Link to={`/posts/${params.id}/edit`}>Edit</Link>
        </p>
      </header>
      <HtmlContent content={data.body} />
    </article>
  )
}
