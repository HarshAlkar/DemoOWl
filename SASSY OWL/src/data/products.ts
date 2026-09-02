export type Product = {
  id: string
  slug: string
  name: string
  category: string
  price: string
  priceValue: number
  image: string
  gallery: string[]
  badge: string
  description: string
  sizes: string[]
}

export const products: Product[] = [
  {
    id: 'necklace-rose-pearl',
    slug: 'rose-pearl-statement-necklace',
    name: 'Rose Pearl Statement Necklace',
    category: 'Jewellery',
    price: '₹4,899',
    priceValue: 4899,
    image: '/images/statement-necklace.png',
    gallery: ['/images/statement-necklace.png', '/images/heritage-jhumka.png'],
    badge: 'Signature',
    description:
      'A multi-strand statement necklace in blush pearls, mint beadwork and kundan-set gold, finished with a temple-inspired pendant. Made to complete festive and occasion looks.',
    sizes: ['Adjustable'],
  },
  {
    id: 'jhumka-heritage',
    slug: 'heritage-jhumka-earrings',
    name: 'Heritage Jhumka Earrings',
    category: 'Jewellery',
    price: '₹2,499',
    priceValue: 2499,
    image: '/images/heritage-jhumka.png',
    gallery: [
      '/images/heritage-jhumka.png',
      '/images/heritage-jhumka-detail.png',
      '/images/mint-chandbali.png',
    ],
    badge: 'Bestseller',
    description:
      'Chandbali-inspired drops with mint micro-bead centres, blush teardrop stones and a gold kundan frame. Lightweight enough for long celebrations.',
    sizes: ['One size'],
  },
  {
    id: 'dress-floral-print',
    slug: 'floral-printed-dress',
    name: 'Floral Printed Dress',
    category: 'Occasion Wear',
    price: '₹5,299',
    priceValue: 5299,
    image: '/images/floral-printed-dress.png',
    gallery: ['/images/floral-printed-dress.png'],
    badge: 'New',
    description:
      'A one-shoulder magenta bodice paired with a draped mint skirt in a soft floral wash. Contemporary occasion wear with movement and presence.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'dress-blue-embroidered',
    slug: 'embroidered-occasion-dress',
    name: 'Embroidered Occasion Dress',
    category: 'Dresses',
    price: '₹6,499',
    priceValue: 6499,
    image: '/images/embroidered-blue-dress.png',
    gallery: ['/images/embroidered-blue-dress.png', '/images/boutique-interior.png'],
    badge: 'Editor’s pick',
    description:
      'A slate-blue tiered maxi with white floral embroidery, flutter sleeves and a tassel-tied waist. Easy to wear from daytime gatherings to evening dinners.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'kurta-magenta-dhoti',
    slug: 'contemporary-boutique-dress',
    name: 'Contemporary Boutique Set',
    category: 'Ethnic Wear',
    price: '₹7,299',
    priceValue: 7299,
    image: '/images/magenta-kurta-set.png',
    gallery: ['/images/magenta-kurta-set.png'],
    badge: 'Limited',
    description:
      'A magenta silk kurta with silver floral embroidery, worn with champagne dhoti trousers. Indo-western tailoring for evenings that ask for something memorable.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 'jhumka-mint-chandbali',
    slug: 'mint-chandbali-drops',
    name: 'Mint Chandbali Drops',
    category: 'Jewellery',
    price: '₹2,799',
    priceValue: 2799,
    image: '/images/mint-chandbali.png',
    gallery: ['/images/mint-chandbali.png', '/images/heritage-jhumka-detail.png'],
    badge: 'New',
    description:
      'Gold-framed chandbalis filled with mint beadwork and finished with blush stone fringe. A quieter sister to the heritage jhumka — equally refined.',
    sizes: ['One size'],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return products.filter((product) => {
    return (
      product.name.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q) ||
      product.badge.toLowerCase().includes(q) ||
      product.description.toLowerCase().includes(q)
    )
  })
}
