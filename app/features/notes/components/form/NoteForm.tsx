import * as React from 'react'
import { Form } from '@remix-run/react'

import { TextEditor } from '~/components/text-editor/TextEditor'
import { Note } from '~/features/notes/types'
import './note-form.css'

export default function NoteForm({
  data,
  mode = 'edit',
  pending = false,
}: {
  data?: Note
  mode: 'edit' | 'create'
  pending?: boolean
}) {
  const id = React.useId()

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    window.history.back()
  }

  return (
    <Form method="post" className="note" autoComplete="off" name="note-form" key={id}>
      <fieldset>
        <legend>{mode === 'edit' ? 'Edit' : 'Create a new'} note</legend>

        <input type="hidden" name="intent" value="editNote" />

        <div className="form-grid">
          <label className="vertical title">
            <b className="label">Title</b>
            <input
              type="text"
              name="title"
              maxLength={200}
              defaultValue={data?.title ?? ''}
            />
          </label>

          <label className="vertical published-on">
            Published on
            <input
              type="datetime-local"
              name="published_at"
              defaultValue={data?.published_at ? data.published_at.substring(0,16) : ''}
            />
          </label>
          
          <label className="vertical significance">
            Significance
            <input
              type="range"
              name="significance"
              defaultValue={data?.significance ?? 0}
              list="markers"
              min={0}
              max={100}
            />
            <datalist id="markers">
              {[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map(v => (
                <option label={`${v}`} value={v} key={v} />
              ))}:warning
            </datalist>
          </label>

          <TextEditor className="vertical body"
            defaultValue={data?.body ?? ''}
            label="Body"
            name="body"
          />
        </div>

        <footer>
          <button type="submit" name="_action" value="delete" className="danger">
            Delete
          </button>
          <button type="button" className="tertiary" onClick={handleCancel}>
            Cancel
          </button>
          <button type="reset" className="secondary">Reset</button>
          <button type="submit" className="primary" name="_action" value="save-redirect" disabled={pending}>
            {mode === 'edit'
              ? pending
                ? 'Saving…'
                : 'Save'
              : pending
                ? 'Creating…'
                : 'Create'}
          </button>
          <button type="submit" className="primary" name="_action" value="save" disabled={pending}>
          {mode === 'edit'
              ? pending
                ? 'Saving…'
                : 'Save & continue edting'
              : pending
                ? 'Creating…'
                : 'Create & continue editing'}
          </button>
        </footer>
      </fieldset>
    </Form>
  )
}
