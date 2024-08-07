import * as React from 'react'
import { Link, useFetcher } from '@remix-run/react'

import HtmlContent from '~/components/html-content/HtmlContent'
import { DefaultDateTimeFormat as dtf } from '~/helpers/datetime'

import type { Post } from '~/features/posts/types'

import './post-list-basic.css'
import { Icon } from '~/components/icon/Icon'

export function PostListBasic({
  className = '',
  data,
  style = {},
}: {
  className?: string
  data: Post[]
  style?: React.CSSProperties
}) {
  const fetcher = useFetcher({ key: 'remove-post' })
  return (
    <div className={`post-list basic ${className}`} style={style}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((post) => (
          <article key={post.id}>
            <header>
              <hgroup>
                <h4>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </h4>
              </hgroup>
              <fetcher.Form method="post">
                <p>
                  <span>
                    {post.published_at
                      ? `Published on ${dtf.format(new Date(post.published_at))}`
                      : `Created on ${dtf.format(new Date(post.created_at))}`}
                  </span>
                  <Link to={`/posts/${post.id}/edit`} title="Edit">
                    <Icon id="edit-outline" />
                  </Link>

                  <input type="hidden" name="intent" value="delete" />
                  <input type="hidden" name="id" value={post.id} />
                  <button type="submit" className="delete" title="Delete">
                    <Icon id="trash-outline" />
                  </button>
                </p>
              </fetcher.Form>
            </header>
            {post.abstract ? <HtmlContent content={post.abstract} /> : null}
          </article>
        ))
      ) : (
        <p>No posts have been written yet.</p>
      )}
    </div>
  )
}
