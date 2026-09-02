import type { ReactNode } from 'react'

type IconProps = {
  size?: number
  className?: string
}

function Svg({
  size = 20,
  className,
  children,
}: IconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

export function SearchIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </Svg>
  )
}

export function HeartIcon({ filled, ...props }: IconProps & { filled?: boolean }) {
  return (
    <Svg {...props}>
      <path
        d="M19.5 12.6 12 20l-7.5-7.4a4.5 4.5 0 1 1 7.5-5.1 4.5 4.5 0 1 1 7.5 5.1Z"
        fill={filled ? 'currentColor' : 'none'}
      />
    </Svg>
  )
}

export function BagIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 8h12l-.8 12H6.8L6 8Z" />
      <path d="M9 8V7a3 3 0 0 1 6 0v1" />
    </Svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </Svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </Svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Svg>
  )
}

export function ChevronIcon({
  direction,
  ...props
}: IconProps & { direction: 'left' | 'right' }) {
  return (
    <Svg {...props}>
      {direction === 'left' ? <path d="m15 5-7 7 7 7" /> : <path d="m9 5 7 7-7 7" />}
    </Svg>
  )
}

export function ExpandIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
    </Svg>
  )
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </Svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6.5 3.8c.4-.5 1.2-.6 1.7-.2l2.2 1.7c.5.4.6 1.1.3 1.6L9.6 9.2a12 12 0 0 0 5.2 5.2l2.3-1.1c.5-.3 1.2-.2 1.6.3l1.7 2.2c.4.5.3 1.3-.2 1.7l-1.4 1.1c-.5.4-1.2.6-1.9.4C11.4 17.7 6.3 12.6 5 7.1c-.2-.7 0-1.4.4-1.9L6.5 3.8Z" />
    </Svg>
  )
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      width={props.size ?? 20}
      height={props.size ?? 20}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden="true"
    >
      <path d="M12 2.1A9.9 9.9 0 0 0 2.8 16.9L2 22l5.2-.8A9.9 9.9 0 1 0 12 2.1Zm5.5 14.2c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5 0-.3 0-.7-.1-2.2-.7-1.8-.8-3-2.4-3.1-2.5s-1.2-1.6-1.2-3 .7-2.1 1-2.3c.2-.2.5-.3.8-.3h.6c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.1.1.3 0 .5-.1.2-.2.3-.3.5l-.4.4c-.1.1-.3.3-.1.6.1.3.6 1 1.3 1.6.9.8 1.6 1 1.9 1.1.3.1.5.1.6-.1l.7-.8c.2-.2.4-.2.6-.1.2.1 1.6.8 1.9.9.3.1.5.2.6.3.1.2.1.7-.1 1.3Z" />
    </svg>
  )
}

export function InstagramIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
    </Svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.4l.6-3H13v-2c0-.6.4-1 1-1Z" />
    </Svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4.4L15 15" />
    </Svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  )
}

export function StarIcon({ filled = true, ...props }: IconProps & { filled?: boolean }) {
  return (
    <svg
      width={props.size ?? 16}
      height={props.size ?? 16}
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.4"
      className={props.className}
      aria-hidden="true"
    >
      <path d="m12 3.2 2.6 5.4 6 .8-4.3 4.2 1 5.9L12 16.8 6.7 19.5l1-5.9L3.4 9.4l6-.8L12 3.2Z" />
    </svg>
  )
}

export function OwlMark({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <ellipse cx="24" cy="27" rx="13" ry="14" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="20" r="5.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="29.5" cy="20" r="5.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18.5" cy="20" r="1.8" fill="currentColor" />
      <circle cx="29.5" cy="20" r="1.8" fill="currentColor" />
      <path d="M22.6 25.2 24 27.4l1.4-2.2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M16 31c2.2 1.6 5 2.5 8 2.5s5.8-.9 8-2.5"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M15 14c2-4 5.4-6.4 9-6.4S31 10 33 14" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}
