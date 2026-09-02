import type { GalleryImage } from '../data/gallery'
import { galleryImages } from '../data/gallery'
import { useBoutique } from '../context/BoutiqueContext'
import { use3DTilt } from '../hooks/use3DTilt'
import { ExpandIcon } from './Icons'
import { ImageWithFallback } from './ImageWithFallback'
import { SectionHeading } from './SectionHeading'

function GalleryItem({ image, index }: { image: GalleryImage; index: number }) {
  const { openLightbox } = useBoutique()
  const tiltRef = use3DTilt<HTMLButtonElement>({ maxX: 3, maxY: 3 })

  return (
    <button
      ref={tiltRef}
      type="button"
      className={`gallery-item gallery-item--${image.span} tilt-card`}
      onClick={() => openLightbox(galleryImages, index)}
    >
      <ImageWithFallback src={image.src} alt={image.alt} width={800} height={1000} />
      <span className="gallery-item__overlay">
        <ExpandIcon />
      </span>
      <span className="tilt-glare" aria-hidden="true" />
    </button>
  )
}

export function Gallery() {
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
            <GalleryItem key={image.id} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
