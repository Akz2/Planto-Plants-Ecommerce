import Image from 'next/image';
import styles from './TopSelling.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const products = [
  {
    id: 1,
    name: 'Calathea plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'Rs. 309/-',
    img: '/images/calathea.png',
  },
  {
    id: 2,
    name: 'Desk plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'Rs. 359/-',
    img: '/images/desk-plant.png',
  },
  {
    id: 3,
    name: 'Calathea ai plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'Rs. 399/-',
    img: '/images/snake-plant.png',
  },
  {
    id: 4,
    name: 'Aloe vera plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'Rs. 249/-',
    img: '/images/aloe.png',
  },
  {
    id: 5,
    name: 'Monstera plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'Rs. 599/-',
    img: '/images/monstera.png',
  },
  {
    id: 6,
    name: 'Snake plant',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    price: 'Rs. 449/-',
    img: '/images/snake-plant.png',
  },
];

export default function TopSelling() {
  return (
    <section className={styles.section} id="bestsellers">
      <SectionTitle>Our Top Selling</SectionTitle>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <div className={styles.imageWrap}>
              <Image
                src={product.img}
                alt={product.name}
                width={180}
                height={200}
                className={styles.plantImg}
              />
            </div>
            <h3 className={styles.cardName}>{product.name}</h3>
            <p className={styles.cardDesc}>{product.desc}</p>
            <div className={styles.cardFooter}>
              <span className={styles.cardPrice}>{product.price}</span>
              <button className={styles.cartBtn} aria-label="Add to cart">🛒</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
