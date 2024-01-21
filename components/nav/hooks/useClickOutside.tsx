import { useEffect, RefObject, useCallback, useState } from 'react'

interface Props {
  ref: RefObject<HTMLElement>,
  callback: () => void
}

const useClickOutsideListener = ({ ref, callback }: Props): void => {
  useEffect(() => {

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref, callback])
}

export default useClickOutsideListener
