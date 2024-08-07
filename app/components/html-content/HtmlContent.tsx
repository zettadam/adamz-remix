import * as React from 'react'

export default function HtmlContent({
  className = '',
  content = '',
  style = {},
  tag = 'div',
}: {
  className?: string
  content: string
  style?: React.CSSProperties
  tag?:
    | 'div'
    | 'main'
    | 'header'
    | 'footer'
    | 'article'
    | 'section'
    | 'li'
    | 'dd'
    | 'span'
}) {
  const sanitizedContent = content // FIX: DOMPurify is a commonjs package and fails with Remix ssr
  const safeContent = {
    __html: sanitizedContent,
  }
  return React.createElement(tag, {
    className,
    style,
    dangerouslySetInnerHTML: safeContent,
  })
}
