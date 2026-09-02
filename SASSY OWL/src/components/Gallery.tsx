import { galleryImages } from '../data/gallery'
import { useBoutique } from '../context/BoutiqueContext'
import { ExpandIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'
import { SectionHeading } from './SectionHeading'

export function Gallery() {
  const { openLightbox } = useBoutique()

  return (
    <section className="gallery" id="gallery">
      <div className="wrap">
        <SectionHeading
          eyebrow="Inside the boutique"
          title="The Sassy Owl atelier"
          subtitle="A quieter look at the pieces, textures and rooms that shape the store."
        />
        <div className="masonry">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className={`gallery-item gallery-item--${image.span}`}
              onClick={() => openLightbox(galleryImages, index)}
            >
              <ImageWithFallback src={image.src} alt={image.alt} width={800} height={1000} />
              <span className="gallery-item__overlay">
                <ExpandIcon />
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
