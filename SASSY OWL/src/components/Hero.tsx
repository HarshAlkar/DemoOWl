import { store } from '../data/store'
import { ImageWithFallback } from './ImageWithFallback'

export function Hero() {
  return (
    <section className="hero" id="home" aria-label="Sassy Owl introduction">
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
    </section>
  )
}
