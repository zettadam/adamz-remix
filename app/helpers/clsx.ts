/**
 * Transforms an object with truthy properties into a className string */
export function clsx(obj: Record<string, unknown>) {
  let k: string,
    cls = ''
  for (k in obj) {
    if (obj[k]) {
      cls && (cls += ' ')
      cls += k
    }
  }
  return cls
}
