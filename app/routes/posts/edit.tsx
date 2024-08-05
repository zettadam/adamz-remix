import * as React from 'react'
import type { LinksFunction, MetaFunction } from '@remix-run/node'
import { redirect, useLoaderData, useNavigation } from '@remix-run/react'

import { DEFAULT_API_BASE_URL } from '~/constants'
import PostForm from '~/features/posts/components/form/PostForm'
import { getPost } from '~/features/posts/api/getPost'
import { updatePost } from '~/features/posts/api/updatePost'
import { deletePost } from '~/features/posts/api/deletePost'

import type { Post, PostFormValues } from '~/features/posts/types'

import postFormStylesheetHref from '~/features/posts/components/form/post-form.css?url'

export const meta: MetaFunction = () => [
  { title: 'Posts | Edit Detail' },
  { description: "Edit Adam's post details" },
]

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: postFormStylesheetHref },
]

export const loader = async ({
  params,
}: {
  params: Record<string, string>
}): Promise<{ data: Post }> => {
  const apiBaseUrl = process.env.API_BASE_URL ?? DEFAULT_API_BASE_URL

  console.log('apiBaseUrl', apiBaseUrl)

  const data = await getPost(apiBaseUrl, parseInt(params.id, 10))

  return { data: data[0] ?? {} }
}

export default function PostsEditDetailPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  const { data } = useLoaderData<typeof loader>()
  const navigation = useNavigation()
  const pending = navigation.formData?.get('intent') === 'editPost'
  return (
    <div className={`page ${className}`} style={style}>
      <h3>Edit Post Details</h3>

      <PostForm data={data} mode="edit" pending={pending} />
    </div>
  )
}

export const action = async ({
  params,
  request,
}: {
  params: Record<string, string>
  request: Request
}) => {
  const apiBaseUrl = process.env.API_PASE_URL ?? DEFAULT_API_BASE_URL
  const values = await request.formData()
  const { _action, ...body } = Object.fromEntries(values)
  body.updated_at = new Date().toISOString()

  if ('delete' === _action) {
    await deletePost(apiBaseUrl, parseInt(params.id, 10))
    return redirect(`/posts`)
  }

  await updatePost(
    apiBaseUrl,
    parseInt(params.id, 10),
    body as unknown as PostFormValues,
  )
  return redirect(`/posts/${params.id}`)
}
