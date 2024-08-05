import * as React from 'react'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => [
  { title: 'Posts | Archive | Year | Month | Day' },
  { description: "Adam's archived posts for year & month & day" },
]

export default function PostsArchiveDayPage({
  className = '',
  style = {},
}: {
  className?: string
  style?: React.CSSProperties
}): JSX.Element {
  return (
    <div className={`page ${className}`} style={style}>
      <h6>Archive posts for year & month & day</h6>
    </div>
  )
}
