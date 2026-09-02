import type { Product } from '../data/products'
import { productWhatsappMessage, whatsappUrl } from '../data/store'
import { useBoutique } from '../context/BoutiqueContext'
import { HeartIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

export function ProductCard({ product }: { product: Product }) {
  const { openProduct, toggleWishlist, isWishlisted } = useBoutique()
  const saved = isWishlisted(product.id)

  return (
    <article className="product-card">
      <div className="product-card__media">
        <ImageWithFallback
          src={product.image}
          alt={`${product.name} at Sassy Owl boutique`}
          width={720}
          height={960}
        />
        <span className="product-card__badge">{product.badge}</span>
        <button
          type="button"
          className={`wish-btn ${saved ? 'is-on' : ''}`}
          aria-label={saved ? `Remove ${product.name} from saved pieces` : `Save ${product.name}`}
          aria-pressed={saved}
          onClick={() => toggleWishlist(product.id)}
        >
          <HeartIcon filled={saved} />
        </button>
      </div>
      <div className="product-card__body">
        <p className="product-card__cat">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-card__price">{product.price}</p>
        <div className="product-card__actions">
          <button type="button" className="btn btn-line" onClick={() => openProduct(product)}>
            View details
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
  )
}
