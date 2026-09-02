export type DemoReview = {
  id: string
  quote: string
  name: string
  note: string
  isDemo: true
}

export const reviews: DemoReview[] = [
  {
    id: 'r1',
    quote: 'Beautiful collection and lovely boutique experience.',
    name: 'Ananya M.',
    note: 'Demo testimonial — replace with a verified review',
    isDemo: true,
  },
  {
    id: 'r2',
    quote: 'Great variety of ethnic and contemporary styles.',
    name: 'Rhea S.',
    note: 'Demo testimonial — replace with a verified review',
    isDemo: true,
  },
  {
    id: 'r3',
    quote: 'Really enjoyed the collection and service.',
    name: 'Meera K.',
    note: 'Demo testimonial — replace with a verified review',
    isDemo: true,
  },
]
