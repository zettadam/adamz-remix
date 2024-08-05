import * as React from 'react'
import { type Editor } from '@tiptap/react'

import { Icon } from '~/components/icon/Icon'
import { BlockFormatMenu } from './BlockFormatMenu'

import './toolbar.css'

export function Toolbar({ editor }: { editor: Editor }) {
  const setLink = React.useCallback(() => {
    const previousUrl = editor.getAttributes('link').href
    const url = window.prompt('URL', previousUrl)

    // cancelled
    if (url === null) return

    // empty
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return
    }

    // update link
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
  }, [editor])

  return (
    <div className="tiptap-toolbar">
      <menu>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              console.log('clicked', e.currentTarget)
              editor.chain().focus().undo().run()
            }}
            disabled={!editor.can().undo()}>
            <Icon id="undo-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().redo().run()
            }}
            disabled={!editor.can().redo()}>
            <Icon id="redo-solid" />
          </button>
        </li>
      </menu>
      <BlockFormatMenu editor={editor} />
      <menu>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleBulletList().run()
            }}
            className={editor.isActive('bulletList') ? 'is-active' : ''}>
            <Icon id="bulleted-list-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleOrderedList().run()
            }}
            className={editor.isActive('orderedList') ? 'is-active' : ''}>
            <Icon id="numbered-list-solid" />
          </button>
        </li>
      </menu>
      <menu>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setLink()
            }}
            className={editor.isActive('link') ? 'is-active' : ''}>
            <Icon id="link-solid" />
          </button>
        </li>
      </menu>
      <menu>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleBold().run()
            }}
            className={editor.isActive('bold') ? 'is-active' : ''}>
            <Icon id="bold-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleItalic().run()
            }}
            className={editor.isActive('italic') ? 'is-active' : ''}>
            <Icon id="italic-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleUnderline().run()
            }}
            className={editor.isActive('underline') ? 'is-active' : ''}>
            <Icon id="underline-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().toggleStrike().run()
            }}
            className={editor.isActive('strike') ? 'is-active' : ''}>
            <Icon id="strikethrough-solid" />
          </button>
        </li>
      </menu>
      <menu>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().setTextAlign('left').run()
            }}
            className={
              editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''
            }>
            <Icon id="text-align-left-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().setTextAlign('center').run()
            }}
            className={
              editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''
            }>
            <Icon id="text-align-center-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().setTextAlign('right').run()
            }}
            className={
              editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''
            }>
            <Icon id="text-align-right-solid" />
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              editor.chain().focus().setTextAlign('justify').run()
            }}
            className={
              editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''
            }>
            <Icon id="text-align-justify-solid" />
          </button>
        </li>
      </menu>
      <menu>
        <li>
          <Icon id="text-color-solid" />
          <input
            type="color"
            onChange={(e) => {
              e.preventDefault()
              editor.chain().focus().setColor(e.target.value).run()
            }}
          />
        </li>
        <li>
          <Icon id="text-highlight-color-solid" />
          <input
            type="color"
            onChange={(e) => {
              e.preventDefault()
              editor
                .chain()
                .focus()
                .toggleHighlight({ color: e.target.value })
                .run()
            }}
          />
        </li>
      </menu>
    </div>
  )
}
