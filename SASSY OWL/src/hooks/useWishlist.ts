import { useCallback, useState } from 'react'

const STORAGE_KEY = 'sassy-owl-wishlist'

function readWishlist(): string[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((item): item is string => typeof item === 'string')
  } catch {
    return []
  }
}

export function useWishlist() {
  const [ids, setIds] = useState<string[]>(readWishlist)

  const persist = useCallback((next: string[]) => {
    setIds(next)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
  }, [])

  const toggle = useCallback(
    (id: string) => {
      persist(ids.includes(id) ? ids.filter((item) => item !== id) : [...ids, id])
    },
    [ids, persist],
  )

  const isWishlisted = useCallback((id: string) => ids.includes(id), [ids])

  return { ids, toggle, isWishlisted }
}
