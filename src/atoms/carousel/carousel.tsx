import React, { JSX } from 'react'
import { AtomCarouselProps } from '../../interfaces/carousel/carousel'
import './carousel.scss'
import Slider from 'react-slick'

const AtomCarousel: React.FC<AtomCarouselProps> = ({
  dots = true,
  infinite = true,
  speed,
  autoplaySpeed,
  slidesToShow = 1,
  slidesToScroll = 1,
  children,
  arrows = false,
  autoplay = false,
  swipe = true,
  sliderRef,
  afterChange,
  onSwipe,
  className,
  loop = true,
  pauseOnHover = false,
  centerMode = false,
}): JSX.Element => {
  const defaultSettings = {
    dots,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll,
    arrows,
    autoplay,
    autoplaySpeed,
    swipe,
    afterChange,
    onSwipe,
    loop,
    pauseOnHover,
    centerMode,
  }

  return (
    <Slider {...defaultSettings} ref={sliderRef} className={className}>
      {children}
    </Slider>
  )
}
export default AtomCarousel