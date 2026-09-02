import { useEffect, useState } from 'react'
import type { Product } from '../data/products'
import { productWhatsappMessage, whatsappUrl } from '../data/store'
import { useBoutique } from '../context/BoutiqueContext'
import { useScrollLock } from '../hooks/useScrollLock'
import { CloseIcon, HeartIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

export function ProductModal() {
  const { product, closeProduct } = useBoutique()
  useScrollLock(Boolean(product))

  useEffect(() => {
    if (!product) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeProduct()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [product, closeProduct])

  if (!product) return null
  return <ProductModalContent key={product.id} product={product} />
}

function ProductModalContent({ product }: { product: Product }) {
  const { closeProduct, toggleWishlist, isWishlisted } = useBoutique()
  const [size, setSize] = useState(product.sizes[0] ?? '')
  const saved = isWishlisted(product.id)

  return (
    <div
      className="modal-layer"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-title"
      onClick={closeProduct}
    >
      <div className="product-modal" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="product-modal__close"
          aria-label="Close"
          onClick={closeProduct}
        >
          <CloseIcon />
        </button>
        <div className="product-modal__media">
          <ImageWithFallback
            src={product.image}
            alt={`${product.name} at Sassy Owl boutique`}
            loading="eager"
          />
        </div>
        <div className="product-modal__body">
          <p className="eyebrow">{product.category}</p>
          <h2 id="product-title">{product.name}</h2>
          <p className="product-card__price" style={{ margin: '12px 0 16px', fontSize: 20 }}>
            {product.price}
          </p>
          <p>{product.description}</p>
          <p className="eyebrow" style={{ marginTop: 24 }}>
            Available sizes
          </p>
          <div className="sizes" role="group" aria-label="Available sizes">
            {product.sizes.map((option) => (
              <button
                key={option}
                type="button"
                className={`size ${size === option ? 'is-on' : ''}`}
                onClick={() => setSize(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="product-card__actions">
            <a
              className="btn btn-primary"
              href={whatsappUrl(productWhatsappMessage(product.name))}
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp
            </a>
            <button
              type="button"
              className="btn btn-line"
              onClick={() => toggleWishlist(product.id)}
            >
              <HeartIcon filled={saved} size={16} />
              {saved ? 'Saved' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
