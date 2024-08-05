import * as React from 'react'
import { Form } from '@remix-run/react'
import { useCodeMirror } from '@uiw/react-codemirror'
import { langs } from '@uiw/codemirror-extensions-langs'

import { TextEditor } from '~/components/text-editor/TextEditor'
import { CodeSnippet } from '~/features/code/types'
import './code-snippet-form.css'

const extensions = [
  langs.html(),
  langs.css(),
  langs.javascript(),
  langs.typescript(),
  langs.python(),
]

export default function CodeSnippetForm({
  data,
  mode = 'edit',
  pending = false,
}: {
  data?: CodeSnippet
  mode: 'edit' | 'create'
  pending?: boolean
}) {
  const editor = React.useRef<React.ElementRef<'div'>>(null)
  const [body, setBody] = React.useState<string>(data?.body ?? '')

  const { setContainer } = useCodeMirror({
    container: editor.current,
    extensions,
    height: '50dvh',
    value: data?.body ?? '',
    onChange: (v) => {
      setBody(v)
    },
  })

  React.useEffect(() => {
    if (editor.current) {
      setContainer(editor.current)
    }
  }, [setContainer])

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    window.history.back()
  }

  return (
    <Form method="post" className="code-snippet">
      <fieldset>
        <legend>
          {mode === 'edit' ? 'Edit' : 'Create a new'} code-snippet
        </legend>

        <input type="hidden" name="intent" value="editCodeSnippet" />

        <div className="form-grid">
          <label className="title">
            <b className="label">Title</b>
            <input
              type="text"
              name="title"
              maxLength={200}
              defaultValue={data?.title ?? ''}
            />
          </label>

          <TextEditor
            className="description"
            defaultValue={data?.description ?? ''}
            label="Description"
            name="description"
          />

          <label className="language">
            <b className="label">Language</b>
            <select name="language" defaultValue={data?.language ?? ''}>
              <option value="javascript">Javascript</option>
              <option value="typescript">Typescript</option>
              <option value="jsx">JSX</option>
              <option value="tsx">TSX</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="python">Python</option>
              <option value="sql">SQL</option>
              <option value="json">JSON</option>
              <option value="yaml">YAML</option>
            </select>
          </label>

          <div className="body">
            <b className="label">Body</b>
            <div className="code-editor" ref={editor} />
            <input type="hidden" name="body" value={body} />
          </div>
        </div>

        <footer>
          <button type="button" onClick={handleCancel}>
            Cancel
          </button>
          <button type="reset" className="secondary">
            Reset
          </button>
          <button type="submit" className="primary" disabled={pending}>
            {mode === 'edit'
              ? pending
                ? 'Saving…'
                : 'Save'
              : pending
                ? 'Creating…'
                : 'Create'}
          </button>
        </footer>
      </fieldset>
    </Form>
  )
}
