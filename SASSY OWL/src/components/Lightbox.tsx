import { useEffect, useRef, useState } from 'react'
import type { GalleryImage } from '../data/gallery'
import { useBoutique } from '../context/BoutiqueContext'
import { useScrollLock } from '../hooks/useScrollLock'
import { ChevronIcon, CloseIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

type LightboxFrame = {
  images: GalleryImage[]
  index: number
}

export function Lightbox() {
  const { lightbox, closeLightbox, setLightboxIndex } = useBoutique()
  const startX = useRef<number | null>(null)
  const [previous, setPrevious] = useState<LightboxFrame | null>(lightbox)
  const [displayed, setDisplayed] = useState<LightboxFrame | null>(lightbox)
  const [closing, setClosing] = useState(false)

  if (lightbox !== previous) {
    setPrevious(lightbox)
    if (lightbox) {
      setDisplayed(lightbox)
      setClosing(false)
    } else if (displayed) {
      setClosing(true)
    }
  }

  const frame = lightbox ?? displayed
  useScrollLock(Boolean(frame))

  useEffect(() => {
    if (!frame) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox()
      if (!lightbox) return
      if (event.key === 'ArrowRight') {
        setLightboxIndex((lightbox.index + 1) % lightbox.images.length)
      }
      if (event.key === 'ArrowLeft') {
        setLightboxIndex((lightbox.index - 1 + lightbox.images.length) % lightbox.images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [frame, lightbox, closeLightbox, setLightboxIndex])

  if (!frame) return null

  const current = frame.images[frame.index]
  if (!current) return null
  const total = frame.images.length

  const go = (direction: -1 | 1) => {
    if (!lightbox) return
    setLightboxIndex((frame.index + direction + total) % total)
  }

  return (
    <div
      className={`lightbox ${closing ? 'is-closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      onAnimationEnd={(event) => {
        if (event.target !== event.currentTarget || !closing) return
        setDisplayed(null)
        setClosing(false)
      }}
      onTouchStart={(event) => {
        startX.current = event.changedTouches[0]?.clientX ?? null
      }}
      onTouchEnd={(event) => {
        if (startX.current == null || !lightbox) return
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
      <div className="lightbox__frame">
        <ImageWithFallback src={current.src} alt={current.alt} loading="eager" />
      </div>
      <button
        type="button"
        className="lightbox__nav lightbox__nav--next"
        aria-label="Next image"
        onClick={() => go(1)}
      >
        <ChevronIcon direction="right" />
      </button>
      <p className="lightbox__count">
        {frame.index + 1} / {total}
      </p>
    </div>
  )
}
