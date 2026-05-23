import Image from 'next/image';
import styles from './TrendyPlants.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const trendyPlants = [
  {
    id: 1,
    title: 'For Small Desk Ai Plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 'Rs. 599/-',
    img: '/images/desk-plant.png',
    reverse: false,
  },
  {
    id: 2,
    title: 'Aloe Vera Air Purifier',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    price: 'Rs. 799/-',
    img: '/images/aloe.png',
    reverse: true,
  },
];

export default function TrendyPlants() {
  return (
    <section className={styles.section} id="trendy">
      <div className={styles.bgAccent} />
      <SectionTitle>Our Trendy plants</SectionTitle>

      <div className={styles.cardsList}>
        {trendyPlants.map((plant) => (
          <div
            key={plant.id}
            className={`${styles.trendyCard} ${plant.reverse ? styles.reverse : ''}`}
          >
            <div className={styles.cardImageWrap}>
              <Image
                src={plant.img}
                alt={plant.title}
                width={260}
                height={300}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{plant.title}</h3>
              <p className={styles.cardDesc}>{plant.desc}</p>
              <p className={styles.cardPrice}>{plant.price}</p>
              <div className={styles.cardActions}>
                <button className={styles.btnBuy}>Buy Now</button>
                <button className={styles.btnCart}>🛒</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
