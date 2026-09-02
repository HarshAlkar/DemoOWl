/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { GalleryImage } from '../data/gallery'
import type { Product } from '../data/products'
import { useWishlist } from '../hooks/useWishlist'

type LightboxState = {
  images: GalleryImage[]
  index: number
}

type BoutiqueContextValue = {
  product: Product | null
  openProduct: (product: Product) => void
  closeProduct: () => void
  searchOpen: boolean
  setSearchOpen: (open: boolean) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  wishlistOpen: boolean
  setWishlistOpen: (open: boolean) => void
  wishlistIds: string[]
  toggleWishlist: (id: string) => void
  isWishlisted: (id: string) => boolean
  lightbox: LightboxState | null
  openLightbox: (images: GalleryImage[], index: number) => void
  closeLightbox: () => void
  setLightboxIndex: (index: number) => void
}

const BoutiqueContext = createContext<BoutiqueContextValue | null>(null)

export function BoutiqueProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [wishlistOpen, setWishlistOpen] = useState(false)
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const { ids, toggle, isWishlisted } = useWishlist()

  const value = useMemo<BoutiqueContextValue>(
    () => ({
      product,
      openProduct: setProduct,
      closeProduct: () => setProduct(null),
      searchOpen,
      setSearchOpen,
      menuOpen,
      setMenuOpen,
      wishlistOpen,
      setWishlistOpen,
      wishlistIds: ids,
      toggleWishlist: toggle,
      isWishlisted,
      lightbox,
      openLightbox: (images, index) => setLightbox({ images, index }),
      closeLightbox: () => setLightbox(null),
      setLightboxIndex: (index) =>
        setLightbox((current) => (current ? { ...current, index } : current)),
    }),
    [product, searchOpen, menuOpen, wishlistOpen, ids, toggle, isWishlisted, lightbox],
  )

  return <BoutiqueContext.Provider value={value}>{children}</BoutiqueContext.Provider>
}

export function useBoutique() {
  const context = useContext(BoutiqueContext)
  if (!context) {
    throw new Error('useBoutique must be used within BoutiqueProvider')
  }
  return context
}
