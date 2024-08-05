import * as React from 'react'
import DomPurify from 'dompurify'

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
  const sanitizedContent = DomPurify.sanitize(content, {})
  const safeContent = {
    __html: sanitizedContent,
  }
  return React.createElement(tag, {
    className,
    style,
    dangerouslySetInnerHTML: safeContent,
  })
}

