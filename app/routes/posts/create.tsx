import * as React from 'react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { redirect, useNavigation } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import PostForm from '~/features/posts/components/form/PostForm'
import { createPost } from '~/features/posts/api/createPost'

import type { PostFormValues } from '~/features/posts/types'

import postFormHref from '~/features/posts/components/form/post-form.css?url'

export const meta: MetaFunction = () => [
  { title: 'Posts | New post' },
  { description: 'Create a new post' },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: postFormHref },
]

export default function PostsEditDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const navigation = useNavigation()
  const pending = navigation.formData?.get('intent') === 'editPost'
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Create a new post</h3>

      <PostForm mode="create" pending={pending} />
    </div>
  )
}

export const action = async ({
  request,
}: {
  params: Record<string, string>
  request: Request
}) => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL
  const values = await request.formData()
  const body = Object.fromEntries(values)

  const data = await createPost(apiBaseUrl, body as unknown as PostFormValues)

  return data[0].id ? redirect(`/posts/${data[0].id}`) : null
}
