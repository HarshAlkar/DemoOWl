import { useEffect, useMemo, useRef, useState } from 'react'
import { products, searchProducts } from '../data/products'
import { useBoutique } from '../context/BoutiqueContext'
import { useScrollLock } from '../hooks/useScrollLock'
import { CloseIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

export function SearchOverlay() {
  const { searchOpen, setSearchOpen, openProduct } = useBoutique()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  useScrollLock(searchOpen)

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus()
  }, [searchOpen])

  useEffect(() => {
    if (!searchOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSearchOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [searchOpen, setSearchOpen])

  const results = useMemo(() => {
    const trimmed = query.trim()
    if (!trimmed) return products.slice(0, 4)
    return searchProducts(trimmed)
  }, [query])

  if (!searchOpen) return null

  return (
    <div
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Search collection"
      onClick={() => setSearchOpen(false)}
    >
      <div className="search-panel" onClick={(event) => event.stopPropagation()}>
        <div className="search-head">
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search dresses, jewellery, ethnic wear…"
            aria-label="Search products"
          />
          {query ? (
            <button type="button" className="btn btn-line" onClick={() => setQuery('')}>
              Clear
            </button>
          ) : null}
          <button
            type="button"
            className="icon-btn"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        {results.length === 0 ? (
          <p className="empty-state">
            No pieces match “{query}”. Try jewellery, dresses or ethnic wear.
          </p>
        ) : (
          <div className="search-results">
            {results.map((product) => (
              <button
                key={product.id}
                type="button"
                className="search-row"
                onClick={() => {
                  setSearchOpen(false)
                  openProduct(product)
                }}
              >
                <ImageWithFallback src={product.image} alt="" />
                <span>
                  <strong>{product.name}</strong>
                  <br />
                  <small>{product.category}</small>
                </span>
                <span>{product.price}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
