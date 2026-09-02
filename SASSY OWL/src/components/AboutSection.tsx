import { useRef } from 'react'
import { useScrollDepth } from '../hooks/useScrollDepth'
import { ImageWithFallback } from './ImageWithFallback'
import { SectionHeading } from './SectionHeading'

const highlights = [
  'Curated Collections',
  'Boutique Experience',
  'Occasion Wear',
  'Jewellery',
  'Contemporary Styles',
]

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  useScrollDepth(sectionRef, 12)

  return (
    <section ref={sectionRef} className="about" id="about">
      <div className="wrap about__grid">
        <div className="about__stage">
          <div className="about__photo">
            <ImageWithFallback
              src="/images/boutique-interior.png"
              alt="Sassy Owl boutique interior with branded bags and white brick walls"
              width={900}
              height={1100}
            />
          </div>
          <div className="about__accent" aria-hidden="true" />
          <div className="about__photo about__photo--offset">
            <ImageWithFallback
              src="/images/magenta-kurta-set.png"
              alt="Magenta embroidered kurta set displayed at Sassy Owl"
              width={900}
              height={720}
            />
          </div>
        </div>
        <div className="about__copy">
          <SectionHeading
            eyebrow="The boutique"
            title="More than fashion. It's your expression."
          />
          <p className="section-subtitle" style={{ marginTop: 20 }}>
            Sassy Owl brings together contemporary fashion, Indian elegance and statement
            accessories for women who love to express their individuality.
          </p>
          <ul className="about__highlights">
            {highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <a className="btn btn-line" href="#visit">
            Visit the boutique
          </a>
        </div>
      </div>
    </section>
  )
}
