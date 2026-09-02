import { useEffect } from 'react'
import { products } from '../data/products'
import { productWhatsappMessage, whatsappUrl } from '../data/store'
import { useBoutique } from '../context/BoutiqueContext'
import { useScrollLock } from '../hooks/useScrollLock'
import { CloseIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

export function WishlistDrawer() {
  const { wishlistOpen, setWishlistOpen, wishlistIds, openProduct } = useBoutique()
  useScrollLock(wishlistOpen)

  useEffect(() => {
    if (!wishlistOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setWishlistOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [wishlistOpen, setWishlistOpen])

  if (!wishlistOpen) return null

  const saved = products.filter((product) => wishlistIds.includes(product.id))

  return (
    <div className="drawer" role="dialog" aria-modal="true" aria-label="Saved pieces">
      <button
        type="button"
        aria-label="Close saved pieces"
        onClick={() => setWishlistOpen(false)}
        style={{ flex: 1, background: 'transparent' }}
      />
      <aside className="drawer__panel">
        <div className="drawer__head">
          <div>
            <p className="eyebrow">Your edit</p>
            <h2>Saved pieces</h2>
          </div>
          <button
            type="button"
            className="icon-btn"
            aria-label="Close"
            onClick={() => setWishlistOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        {saved.length === 0 ? (
          <p className="empty-state">
            Save pieces you love. They stay on this device so you can enquire or visit the boutique.
          </p>
        ) : (
          <div className="wish-list">
            {saved.map((product) => (
              <article key={product.id} className="wish-item">
                <ImageWithFallback src={product.image} alt={product.name} />
                <div>
                  <h3 style={{ fontSize: 22 }}>{product.name}</h3>
                  <p>{product.price}</p>
                  <div className="product-card__actions" style={{ marginTop: 10 }}>
                    <button
                      type="button"
                      className="btn btn-line"
                      onClick={() => {
                        setWishlistOpen(false)
                        openProduct(product)
                      }}
                    >
                      View
                    </button>
                    <a
                      className="btn btn-primary"
                      href={whatsappUrl(productWhatsappMessage(product.name))}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </aside>
    </div>
  )
}
