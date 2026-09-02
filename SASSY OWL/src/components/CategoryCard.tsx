import type { Category } from '../data/categories'
import { use3DTilt } from '../hooks/use3DTilt'
import { ArrowRightIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

export function CategoryCard({ category }: { category: Category }) {
  const tiltRef = use3DTilt<HTMLAnchorElement>({ maxX: 4, maxY: 5 })

  return (
    <a ref={tiltRef} className="category-card tilt-card" href={category.href}>
      <ImageWithFallback src={category.image} alt={category.alt} width={800} height={1000} />
      <div className="category-card__shade" />
      <div className="category-card__meta">
        <h3>{category.name}</h3>
        <span className="explore">
          Explore <ArrowRightIcon size={16} />
        </span>
      </div>
      <span className="tilt-glare" aria-hidden="true" />
    </a>
  )
}
