import { products } from '../data/products'
import { ProductCard } from './ProductCard'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function ProductGrid() {
  return (
    <section className="products" id="new-arrivals">
      <div className="wrap">
        <Reveal>
        <SectionHeading
          eyebrow="New arrivals"
          title="Curated for every occasion"
          subtitle="From everyday elegance to statement looks, discover styles that feel uniquely yours."
        />
        </Reveal>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
