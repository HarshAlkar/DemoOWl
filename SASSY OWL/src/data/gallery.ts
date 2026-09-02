export type GalleryImage = {
  id: string
  src: string
  alt: string
  span: 'tall' | 'wide' | 'square'
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: '/images/embroidered-blue-dress.png',
    alt: 'Embroidered slate-blue dress in the Sassy Owl boutique interior',
    span: 'tall',
  },
  {
    id: 'g2',
    src: '/images/heritage-jhumka.png',
    alt: 'Heritage jhumka earrings with mint beadwork and blush stones',
    span: 'square',
  },
  {
    id: 'g3',
    src: '/images/statement-necklace.png',
    alt: 'Statement pearl and gold necklace at Sassy Owl boutique',
    span: 'tall',
  },
  {
    id: 'g4',
    src: '/images/floral-printed-dress.png',
    alt: 'Magenta one-shoulder dress with mint floral draped skirt',
    span: 'wide',
  },
  {
    id: 'g5',
    src: '/images/magenta-kurta-set.png',
    alt: 'Magenta embroidered kurta with champagne dhoti trousers',
    span: 'tall',
  },
  {
    id: 'g6',
    src: '/images/boutique-interior.png',
    alt: 'Sassy Owl boutique counter with branded bags and white brick interior',
    span: 'wide',
  },
  {
    id: 'g7',
    src: '/images/mint-chandbali.png',
    alt: 'Mint and blush chandbali earrings on a white jewellery stand',
    span: 'square',
  },
  {
    id: 'g8',
    src: '/images/heritage-jhumka-detail.png',
    alt: 'Close-up of kundan-set jhumka earrings at Sassy Owl',
    span: 'square',
  },
]
