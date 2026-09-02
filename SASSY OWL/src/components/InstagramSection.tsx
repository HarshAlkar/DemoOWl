import { galleryImages } from '../data/gallery'
import { store } from '../data/store'
import { ImageWithFallback } from './ImageWithFallback'
import { SectionHeading } from './SectionHeading'

export function InstagramSection() {
  return (
    <section className="instagram" id="instagram">
      <div className="wrap">
        <SectionHeading
          align="center"
          eyebrow="Social"
          title="Follow the Sassy Owl edit"
          subtitle="Style inspiration, new arrivals and everyday elegance."
        />
        <div className="insta-row">
          {galleryImages.slice(0, 6).map((image) => (
            <a
              key={image.id}
              className="insta-card"
              href={store.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${image.alt} on Instagram`}
            >
              <ImageWithFallback src={image.src} alt={image.alt} />
            </a>
          ))}
        </div>
        <div className="insta-bar">
          <p className="insta-handle">{store.instagramHandle}</p>
          <a className="btn btn-line" href={store.instagramUrl} target="_blank" rel="noreferrer">
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
