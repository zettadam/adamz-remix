import * as React from 'react'
import { Link, useParams } from '@remix-run/react'
import { type Extension, useCodeMirror } from '@uiw/react-codemirror'
import { langs } from '@uiw/codemirror-extensions-langs'

import type { CodeSnippet } from '../../types'
import HtmlContent from '~/components/html-content/HtmlContent'

const extensions: Record<string, () => Extension> = {
  html: langs.html,
  css: langs.css,
  javascript: langs.javascript,
  typescript: langs.typescript,
  python: langs.python,
}

export default function CodeSnippetDetail({ data }: { data: CodeSnippet }) {
  const params = useParams()
  const editor = React.useRef<React.ElementRef<'div'>>(null)

  const { setContainer } = useCodeMirror({
    container: editor.current,
    editable: false,
    extensions: [extensions[data?.language ?? 'javascript']()],
    height: 'auto',
    value: data?.body ?? '',
  })

  React.useEffect(() => {
    if (editor.current) {
      setContainer(editor.current)
    }
  }, [setContainer])

  if (Object.keys(data).length < 1) {
    return <p>No data</p>
  }

  return (
    <main>
      <header>
        <h1>{data.title}</h1>
        <p>
          <Link to={`/code/${params.id}/edit`}>Edit</Link>
        </p>
        {data.description ? <HtmlContent content={data.description} /> : null}
      </header>

      <div ref={editor} className="code-editor" />
    </main>
  )
}
