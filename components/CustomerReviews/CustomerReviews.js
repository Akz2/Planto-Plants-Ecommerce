import styles from './CustomerReviews.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const reviews = [
  {
    id: 1,
    name: 'Maln Josi',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    avatarClass: 'avatarMaln',
    emoji: '👨',
  },
  {
    id: 2,
    name: 'Alina Thakur',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    avatarClass: 'avatarAlina',
    emoji: '👩',
  },
  {
    id: 3,
    name: 'Max Makvana',
    rating: 4.5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    avatarClass: 'avatarMax',
    emoji: '👨‍💼',
  },
];

function StarRating({ rating }) {
  const full = Math.floor(rating);
  const half = rating % 1 !== 0;
  return (
    <div className={styles.stars}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={i} className={styles.star}>★</span>
      ))}
      {half && <span className={styles.starHalf}>★</span>}
    </div>
  );
}

export default function CustomerReviews() {
  return (
    <section className={styles.section} id="reviews">
      <SectionTitle>Customer Review</SectionTitle>
      <div className={styles.grid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={`${styles.avatar} ${styles[review.avatarClass]}`}>
                {review.emoji}
              </div>
              <div>
                <p className={styles.reviewerName}>{review.name}</p>
                <StarRating rating={review.rating} />
              </div>
            </div>
            <p className={styles.reviewText}>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
