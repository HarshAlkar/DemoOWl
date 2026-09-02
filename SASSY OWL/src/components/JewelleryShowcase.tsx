import { useRef } from 'react'
import { use3DTilt } from '../hooks/use3DTilt'
import { useScrollDepth } from '../hooks/useScrollDepth'
import { ImageWithFallback } from './ImageWithFallback'
import { SectionHeading } from './SectionHeading'

export function JewelleryShowcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = use3DTilt<HTMLDivElement>({ maxX: 3, maxY: 4 })
  useScrollDepth(sectionRef, 14)

  return (
    <section ref={sectionRef} className="jewellery" id="jewellery">
      <div className="wrap jewellery__grid">
        <div ref={stageRef} className="jewel__stage tilt-card">
          <div className="jewel__photo">
            <ImageWithFallback
              src="/images/statement-necklace.png"
              alt="Statement pearl and gold necklace at Sassy Owl boutique"
              width={900}
              height={1100}
            />
          </div>
          <div className="jewel__float">
            <ImageWithFallback
              src="/images/heritage-jhumka.png"
              alt="Heritage jhumka earrings with mint beadwork"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="jewellery__copy-wrap">
          <SectionHeading
            tone="dark"
            eyebrow="The jewellery edit"
            title="Jewellery that tells a story"
          />
          <p className="jewellery__copy">
            From timeless traditional pieces to statement designs, discover finishing touches that
            transform every look.
          </p>
          <a className="btn btn-ghost" href="#new-arrivals">
            Explore jewellery
          </a>
        </div>
      </div>
    </section>
  )
}
