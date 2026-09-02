import type { Category } from '../data/categories'
import { ArrowRightIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'

export function CategoryCard({ category }: { category: Category }) {
  return (
    <a className="category-card" href={category.href}>
      <ImageWithFallback src={category.image} alt={category.alt} width={800} height={1000} />
      <div className="category-card__shade" />
      <div className="category-card__meta">
        <h3>{category.name}</h3>
        <span className="explore">
          Explore <ArrowRightIcon size={16} />
        </span>
      </div>
    </a>
  )
}
