import React, { useEffect, useState } from 'react';
import styles from './hero.module.css';
import Slider1 from '../../icon/SliderImage.png'
import Slider2 from '../../icon/sliderLargeimage.png'
import Slider3 from '../../icon/KopresearchImage.png'

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

// const images = [
//   'https://placehold.co/120x120?text=Img+1',
//   'https://placehold.co/120x120?text=Img+2',
//   'https://placehold.co/120x120?text=Img+3',
// ];


const images = [Slider1, Slider2, Slider3];

const Hero: React.FC = () => {
  const [index, setIndex] = useState(0);
  const totalSlides = slides.length;

  useEffect(() => {
    debugger;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const rotationAngle = (360 / images.length) * index;

  return (
    <div className={styles.heroContainer}>
      {/* Text Slider */}
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

      {/* Text slider ends here */}


          {/* Wheel Starts here */}

      <div className={styles.wheelWrapper}>
  <div className={styles.wheelMask}>
    <div
      className={styles.wheel}
      style={{ transform: `translate(-50%, -50%) rotate(${rotationAngle}deg)` }}
    >
      {images.map((img, i) => {
        const rotation = (360 / images.length) * i;
        const isActive = i === index;
        return (
          <img
            key={i}
            src={img}
            alt={`img-${i}`}
            className={`${styles.wheelImage} ${isActive ? styles.activeImage : ''}`}
            style={{
              transform: `rotate(${rotation}deg) translateY(-130px) rotate(-${rotation}deg)`,
            }}
          />
        );
      })}
    </div>
  </div>
</div>

{/* Wheel ends here */}
    </div>
  );
};

export default Hero;
