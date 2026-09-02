import {
  defaultWhatsappMessage,
  mapsEmbedUrl,
  mapsSearchUrl,
  store,
  whatsappUrl,
} from '../data/store'
import { ClockIcon, PhoneIcon, PinIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

export function StoreSection() {
  return (
    <section className="store" id="visit">
      <div className="wrap">
        <SectionHeading
          eyebrow="Thane West"
          title="Visit the Sassy Owl store"
          subtitle="A quiet, considered boutique near Hiranandani Meadows — come try pieces, get styled, and leave with something that feels like you."
        />
        <div className="store__panel">
          <div className="store__info">
            <h3>Find us</h3>
            <address>
              {store.addressLines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </address>
            <div className="store__meta">
              <p>
                <PhoneIcon size={18} />
                <a href={`tel:${store.phoneTel}`}>{store.phoneDisplay}</a>
              </p>
              <p>
                <ClockIcon size={18} />
                {store.hoursDetail}
              </p>
              <p>
                <PinIcon size={18} />
                {store.location}
              </p>
            </div>
            <div className="store__actions">
              <a className="btn btn-primary" href={mapsSearchUrl} target="_blank" rel="noreferrer">
                Get directions
              </a>
              <a className="btn btn-line" href={`tel:${store.phoneTel}`}>
                Call store
              </a>
              <a
                className="btn btn-line"
                href={whatsappUrl(defaultWhatsappMessage)}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="store__map">
            <iframe
              title="Sassy Owl boutique location on Google Maps"
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
