import * as React from 'react'
import type { Editor } from '@tiptap/react'

import { Icon } from '~/components/icon/Icon'
import { useOnClickOutside } from '~/hooks/useOnClickOutside'

function ItemHeading({
  editor,
  level = 3,
}: {
  editor: Editor
  level: 1 | 2 | 3 | 4 | 5 | 6
}) {
  return (
    <li>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          editor.chain().focus().toggleHeading({ level }).run()
        }}
        className={editor.isActive('heading', { level }) ? 'is-active' : ''}>
        {`Heading ${level}`}
      </button>
    </li>
  )
}

export function BlockFormatMenu({ editor }: { editor: Editor }) {
  const [open, setOpen] = React.useState<boolean>(false)
  const rootRef = React.useRef<React.ElementRef<'div'>>(null)

  useOnClickOutside(rootRef, () => {
    setOpen(false)
  })

  return (
    <div className="text-menu" data-expanded={open} ref={rootRef}>
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          setOpen(!open)
        }}>
        <Icon id="add-text-solid" />
      </button>
      <menu>
        <ItemHeading editor={editor} level={1} />
        <ItemHeading editor={editor} level={2} />
        <ItemHeading editor={editor} level={3} />
        <ItemHeading editor={editor} level={4} />
        <ItemHeading editor={editor} level={5} />
        <ItemHeading editor={editor} level={6} />
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().setParagraph().run()
            }}>
            Paragraph
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleBlockquote().run()
            }}>
            Blockquote
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleCode().run()
            }}>
            Code
          </button>
        </li>
      </menu>
    </div>
  )
}
