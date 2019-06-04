// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import {useEffect, useRef} from 'react'

type TCreateIntervalReturn = void | TVoidFunction

type TVoidFunction = () => void

function useInterval(callback: Function, delay?: number): void {
  const savedCallback = useRef<Function>()

  // Remember the latest callback.
  useEffect((): void => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(
    function createInterval(): TCreateIntervalReturn {
      function tick(): void {
        if (savedCallback && savedCallback.current) savedCallback.current()
      }
      tick()
      if (delay) {
        let id = setInterval(tick, delay)
        return (): void => clearInterval(id)
      }
    },
    [delay],
  )
}

export default useInterval
