'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const heroPlants = [
  { tag: 'Trendy House Plant', name: 'Calathea plant', img: '/images/calathea.png' },
  { tag: 'Desk Collection', name: 'Desk plant', img: '/images/desk-plant.png' },
  { tag: 'Air Purifier', name: 'Snake plant', img: '/images/snake-plant.png' },
];

export default function Hero() {
  const [activePlant, setActivePlant] = useState(0);
  const plant = heroPlants[activePlant];

  const next = () => setActivePlant((prev) => (prev + 1) % heroPlants.length);

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg} />
      <div className={styles.heroBgOverlay} />

      <div className={styles.heroContent}>
        {/* Left */}
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>Breath Natural</h1>
          <p className={styles.heroSubtitle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnExplore}>Explore</button>
            <button className={styles.btnLiveDemo}>
              <span className={styles.playIcon}>▶</span>
              Live Demo...
            </button>
          </div>

          {/* Review Card */}
          <div className={styles.reviewCard}>
            <div className={styles.reviewHeader}>
              <div className={styles.reviewAvatar}>👩</div>
              <div>
                <div className={styles.reviewName}>Alina Patel</div>
                <div className={styles.reviewStars}>
                  {[1,2,3,4].map(i => <span key={i} className={styles.star}>★</span>)}
                  <span className={styles.starHalf}>★</span>
                </div>
              </div>
            </div>
            <p className={styles.reviewText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt...
            </p>
          </div>
        </div>

        {/* Right — Plant Card */}
        <div className={styles.heroRight}>
          <div className={styles.plantCard}>
            <Image
              src={plant.img}
              alt={plant.name}
              width={260}
              height={220}
              className={styles.plantCardImage}
              priority
            />
            <p className={styles.plantCardTag}>{plant.tag}</p>
            <div className={styles.plantCardRow}>
              <h3 className={styles.plantCardName}>{plant.name}</h3>
              <button className={styles.arrowBtn} onClick={next}>›</button>
            </div>
            <button className={styles.btnBuyNow}>Buy Now</button>
            <div className={styles.cardDots}>
              {heroPlants.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === activePlant ? styles.active : ''}`}
                  onClick={() => setActivePlant(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        SCROLL
      </div>
    </section>
  );
}
