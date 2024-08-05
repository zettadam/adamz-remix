import React from 'react'
import { useLatest } from './useLatest'

const MOUSEDOWN = 'mousedown'
const TOUCHSTART = 'touchstart'

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART]
type HandledEventsType = HandledEvents[number]
type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type]
}[HandledEventsType]
type Handler = (event: PossibleEvent) => void

const events: HandledEvents = [MOUSEDOWN, TOUCHSTART]

const getAddOptions = (
  event: HandledEventsType,
): AddEventListenerOptions | undefined => {
  if (event === TOUCHSTART) {
    return { passive: true }
  }
}

const currentDocument = typeof document !== 'undefined' ? document : undefined

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: Handler | null,
  { document = currentDocument } = {},
  keepOpen?: boolean,
) {
  const handlerRef = useLatest(handler)
  React.useLayoutEffect(() => {
    if (!handler) {
      return
    }

    const listener = (event: PossibleEvent) => {
      if (
        keepOpen ||
        !ref.current ||
        !handlerRef.current ||
        ref.current.contains(event.target as Node)
      ) {
        return
      }

      handlerRef.current(event)
    }

    events.forEach((event) => {
      document?.addEventListener(event, listener, getAddOptions(event))
    })

    return () => {
      events.forEach((event) => {
        document?.removeEventListener(event, listener)
      })
    }
  }, [document, handler, handlerRef, keepOpen, ref])
}
