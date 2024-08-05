import * as React from 'react'

import { clsx } from '~/helpers/clsx'

import { Input } from './tiptap/Input'
import './text-editor.css'

interface TextEditorProps {
  className?: string
  defaultValue: string
  helperText?: React.ReactNode
  label: string
  maxLength?: number
  meta?: {
    active?: boolean
    error?: string
    invalid?: boolean
    touched?: boolean
    valid?: boolean
  }
  name: string
  orientation?: 'vertical' | 'horizontal'
  style?: React.CSSProperties
}

export function TextEditor({
  className = '',
  defaultValue = '',
  helperText = '',
  label,
  maxLength,
  meta = {},
  name,
  orientation = 'vertical',
  style = {},
}: TextEditorProps): JSX.Element {
  const rootProps = {
    className: clsx({
      'text-editor': true,
      [orientation]: orientation,
      [className]: className,
    }),
    style,
  }

  return (
    <div {...rootProps}>
      {label && <label>{label}</label>}
      <Input name={name} defaultValue={defaultValue} maxLength={maxLength ?? 0} />
      {meta.error ? (
        <span className="error">{meta.error}</span>
      ) : helperText ? (
        <span className="helper-text">{helperText}</span>
      ) : null}
    </div>
  )
}
