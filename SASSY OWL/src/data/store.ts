export const store = {
  name: 'Sassy Owl',
  tagline: "Women's Fashion & Lifestyle Boutique",
  category: "Women's clothing boutique",
  location: 'Thane, Maharashtra',
  city: 'Thane West',
  state: 'Maharashtra',
  pincode: '400601',
  country: 'India',
  addressLines: [
    'Shop No. 3, F1 Hyde Park Residency',
    'Opposite Noble Medical',
    'Near Hiranandani Meadows-2',
    'Thane West, Thane, Maharashtra 400601',
  ],
  addressFull:
    'Shop No. 3, F1 Hyde Park Residency, Opposite Noble Medical, Near Hiranandani Meadows-2, Thane West, Thane, Maharashtra 400601',
  phoneDisplay: '098992 04255',
  phoneTel: '+919899204255',
  whatsappNumber: '919899204255',
  hours: 'Open · Closes 9 PM',
  hoursDetail: 'Open daily · Closes 9:00 PM',
  rating: 4.9,
  reviewCount: 18,
  instagramHandle: '@sassyowl.in',
  instagramUrl: 'https://www.instagram.com/sassyowl.in/',
  facebookUrl: 'https://www.facebook.com/sassyowl.in',
} as const

export const agency = {
  name: 'TIVRA',
  credit: 'Designed & Developed by TIVRA',
  tagline: 'BUILD · INNOVATE · GROW',
  logo: '/images/tivra-logo.jpg',
} as const

export const mapsQuery = encodeURIComponent(store.addressFull)

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

export const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&z=16&output=embed`

export const googleReviewsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Sassy Owl boutique Hyde Park Residency Thane West')}`

export function whatsappUrl(message: string): string {
  return `https://wa.me/${store.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const defaultWhatsappMessage =
  "Hi Sassy Owl, I'd like to know more about your collection."

export function productWhatsappMessage(productName: string): string {
  return `Hi Sassy Owl, I'm interested in ${productName}. Can you share more details?`
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Collections', href: '#collections' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Jewellery', href: '#jewellery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const
