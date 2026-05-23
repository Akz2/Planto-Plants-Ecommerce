'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './BestO2.module.css';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

const slides = [
  {
    id: 1,
    title: "We Have Small And Best O2 Plants Collection's",
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: '/images/monstera.png',
  },
  {
    id: 2,
    title: 'Premium Air-Purifying Indoor Plants',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: '/images/calathea.png',
  },
  {
    id: 3,
    title: 'Beautiful Desk Plants For Your Workspace',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: '/images/desk-plant.png',
  },
  {
    id: 4,
    title: 'Exotic Calathea Collection For Your Home',
    desc1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    desc2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    img: '/images/snake-plant.png',
  },
];

export default function BestO2() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prev = () => setCurrent((p) => (p - 1 + total) % total);
  const next = () => setCurrent((p) => (p + 1) % total);

  const slide = slides[current];

  return (
    <section className={styles.section} id="besto2">
      <SectionTitle>Our Best o2</SectionTitle>

      <div className={styles.container}>
        <div className={styles.card}>
          {/* Image */}
          <div className={styles.imageWrap}>
            <Image
              key={current}
              src={slide.img}
              alt={slide.title}
              width={340}
              height={420}
              className={styles.plantImg}
              priority
            />
          </div>

          {/* Content */}
          <div className={styles.content}>
            <h3 className={styles.slideTitle}>{slide.title}</h3>
            <p className={styles.slideDesc}>{slide.desc1}</p>
            <p className={styles.slideDesc}>{slide.desc2}</p>

            <div className={styles.footer}>
              <button className={styles.btnExplore}>Explore</button>
              <div className={styles.navGroup}>
                <button className={styles.navBtn} onClick={prev} aria-label="Previous">‹</button>
                <span className={styles.counter}>
                  <strong>{String(current + 1).padStart(2, '0')}</strong>
                  <span className={styles.total}>/{String(total).padStart(2, '0')}</span>
                </span>
                <button className={styles.navBtn} onClick={next} aria-label="Next">›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
