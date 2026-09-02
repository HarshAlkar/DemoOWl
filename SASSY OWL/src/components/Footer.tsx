import { agency, navLinks, store } from '../data/store'
import { FacebookIcon, InstagramIcon, OwlMark, WhatsAppIcon } from './Icons'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            <a href="#home" className="brand">
              <OwlMark />
              <span className="brand__name">Sassy Owl</span>
            </a>
            <p className="footer__tag">{store.tagline}</p>
            <p>{store.location}</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Store</h4>
            <ul>
              <li>{store.location}</li>
              <li>
                <a href={`tel:${store.phoneTel}`}>{store.phoneDisplay}</a>
              </li>
              <li>{store.hours}</li>
            </ul>
          </div>
          <div>
            <h4>Social</h4>
            <div className="socials">
              <a href={store.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={store.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a
                href={`https://wa.me/${store.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__base">
          <p>© 2026 Sassy Owl. All rights reserved.</p>
          <p className="tivra">
            <img src={agency.logo} alt="" width={28} height={28} />
            {agency.credit}
          </p>
        </div>
      </div>
    </footer>
  )
}
