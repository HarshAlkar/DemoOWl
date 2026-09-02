import { useEffect, useState } from 'react'
import { navLinks } from '../data/store'
import { useBoutique } from '../context/BoutiqueContext'
import { BagIcon, HeartIcon, MenuIcon, OwlMark, SearchIcon } from './Icons'

export function Navbar() {
  const [solid, setSolid] = useState(false)
  const { setMenuOpen, setSearchOpen, setWishlistOpen, wishlistIds } = useBoutique()

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav nav--hero ${solid ? 'nav--solid' : ''}`}>
      <div className="nav__inner">
        <a href="#home" className="brand" aria-label="Sassy Owl home">
          <OwlMark />
          <span className="brand__name">Sassy Owl</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            aria-label="Search the collection"
            onClick={() => setSearchOpen(true)}
          >
            <SearchIcon />
          </button>
          <button
            type="button"
            className="icon-btn nav__desktop-action"
            aria-label={`Wishlist, ${wishlistIds.length} items`}
            onClick={() => setWishlistOpen(true)}
          >
            <HeartIcon filled={wishlistIds.length > 0} />
            {wishlistIds.length > 0 ? (
              <span className="badge-count">{wishlistIds.length}</span>
            ) : null}
          </button>
          <button
            type="button"
            className="icon-btn nav__desktop-action"
            aria-label="Open saved pieces"
            onClick={() => setWishlistOpen(true)}
          >
            <BagIcon />
          </button>
          <button
            type="button"
            className="icon-btn nav__menu-btn"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
