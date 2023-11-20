import { useEffect } from "react"

export const useIntervalEffect = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(callback, delay)

    return () => clearInterval(interval)
  }, [])

  return null
}