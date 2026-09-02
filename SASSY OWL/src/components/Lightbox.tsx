import { useEffect, useRef } from 'react'
import { useBoutique } from '../context/BoutiqueContext'
import { useScrollLock } from '../hooks/useScrollLock'
import { ChevronIcon, CloseIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

export function Lightbox() {
  const { lightbox, closeLightbox, setLightboxIndex } = useBoutique()
  const startX = useRef<number | null>(null)
  useScrollLock(Boolean(lightbox))

  useEffect(() => {
    if (!lightbox) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (event.key === 'ArrowRight') {
        setLightboxIndex((lightbox.index + 1) % lightbox.images.length)
      }
      if (event.key === 'ArrowLeft') {
        setLightboxIndex((lightbox.index - 1 + lightbox.images.length) % lightbox.images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, closeLightbox, setLightboxIndex])

  if (!lightbox) return null

  const current = lightbox.images[lightbox.index]
  if (!current) return null
  const total = lightbox.images.length

  const go = (direction: -1 | 1) => {
    setLightboxIndex((lightbox.index + direction + total) % total)
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onTouchStart={(event) => {
        startX.current = event.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        if (startX.current == null) return
        const delta = event.changedTouches[0].clientX - startX.current
        if (delta > 50) go(-1)
        if (delta < -50) go(1)
        startX.current = null
      }}
    >
      <button type="button" className="lightbox__close" aria-label="Close viewer" onClick={closeLightbox}>
        <CloseIcon />
      </button>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--prev"
        aria-label="Previous image"
        onClick={() => go(-1)}
      >
        <ChevronIcon direction="left" />
      </button>
      <ImageWithFallback src={current.src} alt={current.alt} loading="eager" />
      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        aria-label="Next image"
        onClick={() => go(1)}
      >
        <ChevronIcon direction="right" />
      </button>
      <p className="lightbox__count">
        {lightbox.index + 1} / {total}
      </p>
    </div>
  )
}
