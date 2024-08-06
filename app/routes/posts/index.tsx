import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import { getLatestPosts } from '~/features/posts/api/getLatestPosts'
import { PostListBasic } from '~/features/posts/components/list/PostListBasic'

export const meta: MetaFunction = () => [
  { title: 'Posts' },
  { description: 'A little writing on the side' },
]

export const loader = async () => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const data = await getLatestPosts(apiBaseUrl)

  return { data }
}

export default function PostsPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()

  return (
    <div className={`page ${className}`} style={style}>
      <h3>Latest posts</h3>
      <PostListBasic data={data} />
    </div>
  )
}
