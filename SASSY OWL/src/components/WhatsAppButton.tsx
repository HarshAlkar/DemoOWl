import { defaultWhatsappMessage, whatsappUrl } from '../data/store'
import { WhatsAppIcon } from './Icons'

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl(defaultWhatsappMessage)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Sassy Owl on WhatsApp"
      data-tip="Chat with Sassy Owl"
    >
      <WhatsAppIcon size={28} />
    </a>
  )
}
