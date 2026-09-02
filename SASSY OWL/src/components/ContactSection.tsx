import { useState, type FormEvent } from 'react'
import { store } from '../data/store'
import { SectionHeading } from './SectionHeading'

type FormState = {
  name: string
  phone: string
  email: string
  message: string
}

const empty: FormState = { name: '', phone: '', email: '', message: '' }

function validate(values: FormState): Partial<FormState> {
  const errors: Partial<FormState> = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^[0-9+\-\s]{8,15}$/.test(values.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }
  if (values.message.trim().length < 8) {
    errors.message = 'Tell us a little more about what you are looking for.'
  }
  return errors
}

export function ContactSection() {
  const [values, setValues] = useState<FormState>(empty)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <SectionHeading
          eyebrow="Enquiry"
          title="Let's find your perfect look"
          subtitle="Share a little about the occasion or the piece you have in mind. We will reply with availability and styling notes."
        />
        <div className="contact__grid">
          {sent ? (
            <div className="form-success" role="status">
              <h3>Thank you. We&apos;ll get back to you soon.</h3>
              <p>Your enquiry is with the boutique. You can also WhatsApp us if you need a quicker reply.</p>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <label className="field">
                <span>Name</span>
                <input
                  value={values.name}
                  onChange={(event) => setValues({ ...values, name: event.target.value })}
                  autoComplete="name"
                />
                {errors.name ? <small className="field-error">{errors.name}</small> : null}
              </label>
              <label className="field">
                <span>Phone</span>
                <input
                  value={values.phone}
                  onChange={(event) => setValues({ ...values, phone: event.target.value })}
                  autoComplete="tel"
                  inputMode="tel"
                />
                {errors.phone ? <small className="field-error">{errors.phone}</small> : null}
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  type="email"
                  value={values.email}
                  onChange={(event) => setValues({ ...values, email: event.target.value })}
                  autoComplete="email"
                />
                {errors.email ? <small className="field-error">{errors.email}</small> : null}
              </label>
              <label className="field">
                <span>Message</span>
                <textarea
                  value={values.message}
                  onChange={(event) => setValues({ ...values, message: event.target.value })}
                />
                {errors.message ? <small className="field-error">{errors.message}</small> : null}
              </label>
              <button type="submit" className="btn btn-primary">
                Send enquiry
              </button>
            </form>
          )}

          <aside className="contact__aside">
            <h3>The boutique</h3>
            <div className="aside-block">
              <span className="label">Phone</span>
              <a href={`tel:${store.phoneTel}`}>{store.phoneDisplay}</a>
            </div>
            <div className="aside-block">
              <span className="label">Store location</span>
              <p>{store.addressFull}</p>
            </div>
            <div className="aside-block">
              <span className="label">Business hours</span>
              <p>{store.hoursDetail}</p>
            </div>
            <div className="aside-block">
              <span className="label">Instagram</span>
              <a href={store.instagramUrl} target="_blank" rel="noreferrer">
                {store.instagramHandle}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
