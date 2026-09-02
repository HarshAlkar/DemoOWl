import { useEffect, type RefObject } from 'react'
import { prefersReducedMotion } from './useMotionPrefs'

export function useScrollDepth(ref: RefObject<HTMLElement | null>, strength = 18) {
  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    let frame = 0
    let listening = false

    const paint = () => {
      frame = 0
      const rect = node.getBoundingClientRect()
      const view = window.innerHeight || 1
      const progress = (rect.top + rect.height * 0.35 - view * 0.5) / view
      node.style.setProperty('--scroll-shift', `${(progress * strength).toFixed(2)}`)
    }

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          if (!listening) {
            window.addEventListener('scroll', onScroll, { passive: true })
            listening = true
          }
          paint()
        } else if (listening) {
          window.removeEventListener('scroll', onScroll)
          listening = false
        }
      },
      { threshold: 0.05 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (listening) window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [ref, strength])
}
