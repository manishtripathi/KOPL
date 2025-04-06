interface AtomCarouselProps {
    dots: boolean
    infinite: boolean
    speed?: number
    slidesToShow: number
    slidesToScroll: number
    children: any
    arrows?: boolean
    autoplaySpeed?: number
    autoplay?: boolean
    swipe?: boolean,
    sliderRef?: React.MutableRefObject
    afterChange?: (currentSlide: number) => void
    className?: string
    loop?: boolean
    pauseOnHover?: boolean
    onSwipe?(swipeDirection: swipeDirection): void
    centerMode?: boolean
}

export { AtomCarouselProps }