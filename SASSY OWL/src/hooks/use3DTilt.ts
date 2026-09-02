import { useEffect, useRef } from 'react'
import { canUsePointerDepth } from './useMotionPrefs'

export type TiltOptions = {
  maxX?: number
  maxY?: number
  resetOnLeave?: boolean
}

function resetTilt(node: HTMLElement) {
  node.style.setProperty('--rotate-x', '0deg')
  node.style.setProperty('--rotate-y', '0deg')
  node.style.setProperty('--tilt-x', '0')
  node.style.setProperty('--tilt-y', '0')
  node.style.setProperty('--glare-x', '50%')
  node.style.setProperty('--glare-y', '50%')
  node.classList.remove('is-tilting')
}

export function use3DTilt<T extends HTMLElement>(options: TiltOptions = {}) {
  const { maxX = 4, maxY = 5, resetOnLeave = true } = options
  const ref = useRef<T | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    resetTilt(node)
    if (!canUsePointerDepth()) return

    let frame = 0
    let nextX = 0
    let nextY = 0
    let glareX = 50
    let glareY = 50

    const paint = () => {
      frame = 0
      node.style.setProperty('--rotate-x', `${nextX}deg`)
      node.style.setProperty('--rotate-y', `${nextY}deg`)
      node.style.setProperty('--tilt-x', `${nextY / maxY}`)
      node.style.setProperty('--tilt-y', `${-nextX / maxX}`)
      node.style.setProperty('--glare-x', `${glareX}%`)
      node.style.setProperty('--glare-y', `${glareY}%`)
    }

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return
      const px = (event.clientX - rect.left) / rect.width
      const py = (event.clientY - rect.top) / rect.height
      nextY = (px - 0.5) * 2 * maxY
      nextX = (0.5 - py) * 2 * maxX
      glareX = px * 100
      glareY = py * 100
      node.classList.add('is-tilting')
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    const onLeave = () => {
      if (!resetOnLeave) return
      nextX = 0
      nextY = 0
      glareX = 50
      glareY = 50
      node.classList.remove('is-tilting')
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    node.addEventListener('pointermove', onMove)
    node.addEventListener('pointerleave', onLeave)
    node.addEventListener('pointercancel', onLeave)

    return () => {
      node.removeEventListener('pointermove', onMove)
      node.removeEventListener('pointerleave', onLeave)
      node.removeEventListener('pointercancel', onLeave)
      if (frame) window.cancelAnimationFrame(frame)
      resetTilt(node)
    }
  }, [maxX, maxY, resetOnLeave])

  return ref
}
