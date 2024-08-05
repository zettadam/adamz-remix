import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import { getPost } from '~/features/posts/api/getPost'
import PostDetail from '~/features/posts/components/detail/PostDetail'

import type { Post } from '~/features/posts/types'

export const meta: MetaFunction = () => [
  { title: 'Posts | Detail' },
  { description: "Adam's post in detail" },
]

export const loader = async ({
  params,
}: {
  params: Record<string, string>
}): Promise<{ data: Post }> => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const data = await getPost(apiBaseUrl, parseInt(params.id, 10))

  return { data: data[0] ?? {} }
}

export default function PostsDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()
  return (
    <div className={`page ${className}`} style={style}>
      <PostDetail data={data} />
    </div>
  )
}
