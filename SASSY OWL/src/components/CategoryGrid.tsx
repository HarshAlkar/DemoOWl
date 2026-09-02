import { categories } from '../data/categories'
import { CategoryCard } from './CategoryCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function CategoryGrid() {
  return (
    <section className="categories" id="collections">
      <div className="wrap">
        <Reveal>
        <SectionHeading
          eyebrow="Collections"
          title="Explore our collections"
          subtitle="Dresses, ethnic wear, jewellery and occasion pieces — chosen for how they feel as much as how they look."
        />
        </Reveal>
        <div className="category-row">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}
