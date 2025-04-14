import React from "react";
import "./HeroSection.scss";
import heroImage from "../icon/SliderImage.png"; 

import { Container } from '@mui/material'

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
       <Container className='container flex flex-between'>
      <div className="hero__content">
        <h1>
          Explore <br />
          our Product <br />
          Range
        </h1>
        <p>
          Comprehensive selection meeting diverse industry needs.
        </p>
        <a href="#" className="hero__btn">
          Our Products
        </a>
      </div>

      <div className="hero__image">
        <img src={heroImage} alt="Product Range" />
      </div>

      {/* <div className="hero__dots">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div> */}
      </Container>
    </section>
  );
};

export default HeroSection;
