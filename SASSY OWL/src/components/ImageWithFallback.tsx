import { useState } from 'react'

type ImageWithFallbackProps = {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'auto' | 'sync'
  sizes?: string
}

export function ImageWithFallback({
  src,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  sizes,
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div className={`image-fallback ${className ?? ''}`} role="img" aria-label={alt}>
        <span>Sassy Owl</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      onError={() => setFailed(true)}
    />
  )
}
