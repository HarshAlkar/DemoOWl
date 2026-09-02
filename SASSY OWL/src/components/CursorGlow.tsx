import { useEffect, useRef } from 'react'
import { canUsePointerDepth } from '../hooks/useMotionPrefs'

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node || !canUsePointerDepth()) return

    let frame = 0
    let x = 0
    let y = 0

    const paint = () => {
      frame = 0
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    const onMove = (event: PointerEvent) => {
      x = event.clientX
      y = event.clientY
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
