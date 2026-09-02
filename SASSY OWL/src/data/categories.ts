export type Category = {
  id: string
  name: string
  href: string
  image: string
  alt: string
}

export const categories: Category[] = [
  {
    id: 'dresses',
    name: 'Dresses',
    href: '#new-arrivals',
    image: '/images/embroidered-blue-dress.png',
    alt: 'Embroidered blue dress on a mannequin at Sassy Owl boutique',
  },
  {
    id: 'ethnic',
    name: 'Ethnic Wear',
    href: '#new-arrivals',
    image: '/images/magenta-kurta-set.png',
    alt: 'Magenta silk kurta and champagne dhoti set at Sassy Owl',
  },
  {
    id: 'western',
    name: 'Western Wear',
    href: '#new-arrivals',
    image: '/images/floral-printed-dress.png',
    alt: 'Magenta one-shoulder ensemble with draped mint skirt',
  },
  {
    id: 'jewellery',
    name: 'Jewellery',
    href: '#jewellery',
    image: '/images/statement-necklace.png',
    alt: 'Rose pearl statement necklace displayed at Sassy Owl',
  },
  {
    id: 'occasion',
    name: 'Occasion Wear',
    href: '#new-arrivals',
    image: '/images/floral-printed-dress.png',
    alt: 'Occasion wear displayed in the Sassy Owl boutique',
  },
  {
    id: 'accessories',
    name: 'Accessories',
    href: '#jewellery',
    image: '/images/heritage-jhumka.png',
    alt: 'Heritage jhumka earrings on a jewellery stand',
  },
]
