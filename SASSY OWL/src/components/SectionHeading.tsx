type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  as?: 'h2' | 'h3'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'light',
  as = 'h2',
}: SectionHeadingProps) {
  const Heading = as
  return (
    <div className={`section-heading section-heading--${align} section-heading--${tone}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading>{title}</Heading>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  )
}
