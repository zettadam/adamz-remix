/* ----------------------------- vendor imports ----------------------------- */
import * as React from 'react'

/* ------------------------------ local imports ----------------------------- */

import { clsx } from '~/helpers/clsx'

import './icon.css'

/* ----------------------------- end of imports ----------------------------- */

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

function getDimensions(size: Size = 'md'): number {
  const pixels = {
    xs: 12,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 64,
    xxl: 96,
  }

  return pixels[size]
}

export interface IconProps extends React.ComponentPropsWithoutRef<'svg'> {
  /** Custom CSS class attached to the root `<svg />` element */
  className?: string
  /** SVG symbol identifier */
  id: string
  /** Icon dimensions (height & width; its aspect ratio is 1:1) */
  size?: Size
  /** Custom CSS styles attached to the root `<svg />` element */
  style?: React.CSSProperties
  /** Accessible icon title */
  title?: string
  /** Pre-defined type of an icon */
  type?: 'info' | 'warning' | 'error' | 'success'
}

export function Icon({
  className = '',
  id,
  size = 'md',
  title,
  type,
  ...rest
}: IconProps): null | JSX.Element {
  if (!id) return null

  const measure = getDimensions(size)

  const rootProps: Partial<React.ComponentPropsWithoutRef<'svg'>> = {
    ...rest,
    className: clsx({
      icon: true,
      [`icon--${size}`]: size,
      [`icon--${type}`]: type,
      [className]: className,
    }),
    height: measure,
    width: measure,
    viewBox: `0 0 24 24`,
  }

  return (
    <svg {...rootProps}>
      {title ? <title>{title}</title> : null}
      <use href={`/symbols.svg#${id}`} />
    </svg>
  )
}
