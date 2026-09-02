import { ImageWithFallback } from './ImageWithFallback'

export function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="cta__media">
        <ImageWithFallback
          src="/images/floral-printed-dress.png"
          alt="Magenta occasion ensemble from the Sassy Owl collection"
          width={1400}
          height={900}
        />
        <div className="cta__shade" />
      </div>
      <div className="cta__content">
        <p className="eyebrow">The invitation</p>
        <h2 id="cta-title">Find your signature style.</h2>
        <p>
          From everyday elegance to unforgettable occasions, discover pieces made to become part of
          your story.
        </p>
        <div className="cta__actions">
          <a className="btn btn-champagne" href="#collections">
            Shop collection
          </a>
          <a className="btn btn-ghost" href="#visit">
            Visit our store
          </a>
        </div>
      </div>
    </section>
  )
}
