import type { DemoReview } from '../data/reviews'
import { reviews } from '../data/reviews'
import { googleReviewsUrl, store } from '../data/store'
import { use3DTilt } from '../hooks/use3DTilt'
import { StarIcon } from './Icons'
import { SectionHeading } from './SectionHeading'

function ReviewCard({ review }: { review: DemoReview }) {
  const tiltRef = use3DTilt<HTMLElement>({ maxX: 2.4, maxY: 3 })

  return (
    <figure ref={tiltRef} className="review-card tilt-card" data-demo-review="true">
      <q>{review.quote}</q>
      <footer>
        {review.name}
        <span className="demo-note">{review.note}</span>
      </footer>
    </figure>
  )
}

export function ReviewSection() {
  return (
    <section className="reviews" id="reviews">
      <div className="wrap">
        <SectionHeading eyebrow="From the boutique" title="Loved by our customers" />
        <div className="reviews__score">
          <div>
            <p className="reviews__number">{store.rating.toFixed(1)}</p>
            <div className="reviews__stars" aria-hidden="true">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <p>{store.reviewCount} Google Reviews</p>
          </div>
          <a className="btn btn-line" href={googleReviewsUrl} target="_blank" rel="noreferrer">
            View Google Reviews
          </a>
        </div>
        <div className="review-grid">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
