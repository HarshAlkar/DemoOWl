import { useEffect } from 'react'
import { navLinks, store } from '../data/store'
import { useBoutique } from '../context/BoutiqueContext'
import { useScrollLock } from '../hooks/useScrollLock'
import { CloseIcon, InstagramIcon, OwlMark, WhatsAppIcon } from './Icons'

export function MobileMenu() {
  const { menuOpen, setMenuOpen, setWishlistOpen, setSearchOpen } = useBoutique()
  useScrollLock(menuOpen)

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen, setMenuOpen])

  if (!menuOpen) return null

  return (
    <div className="drawer" role="dialog" aria-modal="true" aria-label="Site menu">
      <button
        type="button"
        className="overlay"
        aria-label="Close menu"
        onClick={() => setMenuOpen(false)}
        style={{ position: 'absolute', inset: 0, padding: 0, background: 'transparent' }}
      />
      <div className="mobile-menu">
        <div className="mobile-menu__head">
          <span className="brand" style={{ color: 'var(--burgundy)' }}>
            <OwlMark />
            <span className="brand__name">Sassy Owl</span>
          </span>
          <button
            type="button"
            className="icon-btn"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>
        <nav>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              setWishlistOpen(true)
            }}
          >
            Wishlist
          </button>
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false)
              setSearchOpen(true)
            }}
          >
            Search
          </button>
        </nav>
        <div className="mobile-menu__social socials">
          <a href={store.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a
            href={`https://wa.me/${store.whatsappNumber}`}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
