import { useRef } from 'react'
import { store } from '../data/store'
import { use3DTilt } from '../hooks/use3DTilt'
import { useScrollDepth } from '../hooks/useScrollDepth'
import { ImageWithFallback } from './ImageWithFallback'

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const sceneRef = use3DTilt<HTMLDivElement>({ maxX: 2, maxY: 3 })
  useScrollDepth(sectionRef, 16)

  return (
    <section ref={sectionRef} className="hero" id="home" aria-label="Sassy Owl introduction">
      <div ref={sceneRef} className="hero__scene tilt-card">
        <div className="hero__media">
          <ImageWithFallback
            src="/images/embroidered-blue-dress.png"
            alt="Embroidered occasion dress styled in the Sassy Owl boutique, Thane"
            loading="eager"
            width={1200}
            height={1600}
          />
          <div className="hero__shade" />
        </div>
        <div className="hero__ornament" aria-hidden="true">
          <span className="hero__line" />
          <span className="hero__line hero__line--short" />
        </div>
        <div className="hero__content">
          <p className="eyebrow">The Sassy Owl Edit</p>
          <h1>Style that defines you</h1>
          <p className="hero__lead">Contemporary fashion, timeless elegance.</p>
          <p className="hero__copy">
            Discover thoughtfully curated women&apos;s fashion, occasion wear, statement jewellery
            and styles made to express who you are.
          </p>
          <div className="hero__actions">
            <a className="btn btn-champagne" href="#collections">
              Shop collection
            </a>
            <a className="btn btn-ghost" href="#visit">
              Visit our store
            </a>
          </div>
          <p className="hero__place">{store.location}</p>
        </div>
      </div>
    </section>
  )
}
