import * as React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Focus from '@tiptap/extension-focus'
import Placeholder from '@tiptap/extension-placeholder'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import ListItem from '@tiptap/extension-list-item'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Strike from '@tiptap/extension-strike'
import Link from '@tiptap/extension-link'
import Blockquote from '@tiptap/extension-blockquote'
import Code from '@tiptap/extension-code'
import TextStyle from '@tiptap/extension-text-style'
import Typography from '@tiptap/extension-typography'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import { Color } from '@tiptap/extension-color'
import History from '@tiptap/extension-history'
import CharacterCount from '@tiptap/extension-character-count'

import { Toolbar } from './toolbar/Toolbar'

import './input.css'

function getExtensions(maxLength = 0) {
  const extensions = ([
    Document,
    Focus.configure({
      className: 'has-focus',
      mode: 'all',
    }),
    Placeholder.configure({
      placeholder: 'Write something …',
    }),
    Paragraph,
    Text,
    Heading.configure({ levels: [1, 2, 3, 4, 5, 6] }),
    BulletList,
    OrderedList,
    ListItem,
    Link,
    Bold,
    Italic,
    Underline,
    Strike,
    Blockquote,
    Code,
    TextStyle,
    TextAlign.configure({
      types: ['paragraph'],
    }),
    Color,
    Highlight.configure({ multicolor: true }),
    Typography,
    History
  ])

  if (maxLength > 0) {
    extensions.push(CharacterCount.configure({
      limit: maxLength,
    }))
  }

  return extensions
}

interface InputProps {
  defaultValue: string
  maxLength?: number
  name: string
}

export function Input({ defaultValue, maxLength = 0, name }: InputProps) {
  const [value, setValue] = React.useState<string>(defaultValue)

  React.useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue])

  const editor = useEditor({
    autofocus: false,
    extensions: getExtensions(maxLength),
    content: defaultValue,
    editorProps: {
      attributes: {
        class: 'tiptap',
      },
    },
    immediatelyRender: false,
    injectCSS: false,
    onUpdate: ({ editor }) => {
      const v = editor.getHTML()
      setValue(v)
    },
  })

  if (!editor) return null

  const percentage = editor && maxLength
    ? Math.round((100 / maxLength) * editor.storage.characterCount.characters())
    : 0

  return (
    <>
      <input type="hidden" name={name} value={value} />
      <Toolbar editor={editor} />
      <div className="editor-scroll">
        <EditorContent editor={editor} className="rich-text" />
      </div>
      { maxLength > 0 &&
      <div
        className={`character-count ${editor.storage.characterCount.characters() > maxLength ? 'character-count--warning' : ''}`}>
        <span>
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle r="10" cx="10" cy="10" fill="gray" />
            <circle
              r="5"
              cx="10"
              cy="10"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={`calc(${percentage} * 31.4 / 100) 31.4`}
              transform="rotate(-90) translate(-20)"
            />
            <circle r="6" cx="10" cy="10" fill="white" />
          </svg>
        </span>
        <span>
          {editor.storage.characterCount.characters()} / {maxLength} characters
        </span>
        <span>{editor.storage.characterCount.words()} words</span>
      </div> }
    </>
  )
}
