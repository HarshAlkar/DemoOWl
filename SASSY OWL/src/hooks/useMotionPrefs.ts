export function canUsePointerDepth(): boolean {
  if (typeof window === 'undefined') return false
  return (
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    window.matchMedia('(pointer: fine)').matches &&
    window.matchMedia('(hover: hover)').matches
  )
}

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}
