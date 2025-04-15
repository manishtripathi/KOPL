import React, { useEffect, useState } from 'react';
import styles from './hero.module.css';

const slides = [
  {
    heading: 'Innovation Hub: KOP Research Centre',
    text: 'Your Extended R&D Partner',
    button: 'VISIT KRC',
  },
  {
    heading: 'State-of-the-art Labs',
    text: 'Get access to top-tier labs and researchers...',
    button: 'READ MORE',
  },
  {
    heading: 'Global Reach',
    text: 'Delivering biotech solutions across continents...',
    button: 'DISCOVER MORE',
  },
];

const images = [
  'https://placehold.co/120x120?text=Img+1',
  'https://placehold.co/120x120?text=Img+2',
  'https://placehold.co/120x120?text=Img+3',
];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [angle, setAngle] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
      setAngle((prev) => prev + 45); // Rotate wheel each slide
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.heroContainer}>
      <div className={styles.textSliderWrapper}>
        <div
          className={styles.textSlider}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div className={styles.slide} key={i}>
              <h1>{slide.heading}</h1>
              <p>{slide.text}</p>
              <button>{slide.button}</button>
            </div>
          ))}
        </div>
        <div className={styles.dots}>
          {slides.map((_, i) => (
            <span
              key={i}
              className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
            />
          ))}
        </div>
      </div>
          
      <div className={styles.wheelWrapper}>
        <div
          className={styles.wheel}
          style={{ transform: `rotate(${angle}deg)` }}
        >
          {images.map((img, i) => {
            const rotation = (360 / images.length) * i;
            return (
              <img
                key={i}
                src={img}
                alt={`img-${i}`}
                className={styles.wheelImage}
                style={{
                  transform: `rotate(${rotation}deg) translateY(-160px) rotate(-${rotation}deg)`,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
