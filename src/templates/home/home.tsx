// HomeTemplate.js
import React from 'react';
import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import { Search, Call, Event1, Event2, Event3, Event4, Event5, Event6, LocationIcon, Calendar, ColumnPattern, DialogArrow, NeetUs, ChevronRight } from '../../helpers/constant/imageUrl'
import AtomLink from '../../atoms/link/link'
import { useNavigate } from "react-router-dom";
import AtomButton from '../../atoms/button/button'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import AtomCarousel from '../../atoms/carousel/carousel'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import './home.scss'
import LatestNews from './LatestNews'; // Import the LatestNews component
import HeroSection from '../../Component/HeroSection';


const HomeTemplate = () => {
    const navigate = useNavigate();
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`)
    const handleRedirect = () => {
        navigate("/products");
    }
    return (
        <>
        <HeroSection/>
            <div className="what-we-do">
            
                <Container className='container'>
                   
                    <h3>What we do at KOPL?</h3>
                    <p>At KOPL, we're forging a path towards a sustainable future through innovative solutions With over three decades of experience, we've continually adapted to global demands in active ingredient manufacturing.Our commitment to innovation is evident in our embrace of biotechnology, resulting in a diverse product lineup derived from advanced bio-transformation and bio-fermentation processes.</p>
                    <div className='blue-section'>
                        <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 0 }}>
                            <Grid size={{ xs: 12, md: 5 }} display={'flex'} justifyContent={'space-between'} alignItems={'top'}>
                                <div className='icon'>
                                    <img src={Search} alt='' />
                                </div>
                                <div className='column'>
                                    <h4>Product Finder</h4>
                                    <p>Find detailed information about our products and solutions.</p>
                                    <AtomButton
                                        className='anchor'
                                        onClick={handleRedirect}
                                        endIcon={
                                            <KeyboardArrowRightIcon className='arrow' />
                                        }
                                    >
                                        FIND PRODUCTS
                                    </AtomButton>
                                </div>
                            </Grid>
                            <Grid size={{ xs: 12, md: 6 }} display={'flex'} justifyContent={'space-between'} alignItems={'top'}>
                                <div className='icon'>
                                    <img src={Call} alt='' />
                                </div>
                                <div className='column'>
                                    <h4>Contact Us</h4>
                                    <p>Need to speak to someone about a product or reach one of our representative? Have a question or a comment?</p>
                                    <AtomButton
                                        className='anchor'
                                        endIcon={
                                            <KeyboardArrowRightIcon className='arrow' />
                                        }
                                        onClick={() => navigate("/contact-us")}
                                    >
                                        ENQUIRE NOW
                                    </AtomButton>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
            <div className='shows-events'>
                <Container className='container'>
                    <h4>Meet us at Trade Shows & Events</h4>
                    <div className='position-relative'>
                        <img src={NeetUs} alt='' className='w-100 thumb' />
                        <img src={ColumnPattern} alt='' className='column-pattern' />
                    </div>
                </Container>
                <AtomCarousel
                    dots={true}
                    speed={400}
                    infinite={true}
                    slidesToShow={breakPoint ? 3 : 1}
                    slidesToScroll={breakPoint ? 2 : 1}
                    centerMode={true}
                >
                    <div className='blue-card'>
                        <h5>in-cosmetics Latin America 2025</h5>
                        <div className='location'>
                            <div className='icon'>
                                <img src={LocationIcon} alt='' />
                            </div>
                            <div>
                                <h6>Booth No: A55</h6>
                                São Paulo, Brazil
                            </div>
                        </div>
                        <div className='location'>
                            <div className='icon'>
                                <img src={Calendar} alt='' />
                            </div>
                            <div>
                                <h6>23 - 24 September</h6>
                                2025
                            </div>
                        </div>
                        <div className='tag'>
                            Personal Care Ingredients
                        </div>
                    </div>
                    <div className='blue-card'>
                        <h5>Cosmohome tech Expo 2025</h5>
                        <div className='location'>
                            <div className='icon'>
                                <img src={LocationIcon} alt='' />
                            </div>
                            <div>
                                <h6>Booth No : K 5</h6>
                                Pragati Maidan, New Delhi
                            </div>
                        </div>
                        <div className='location'>
                            <div className='icon'>
                                <img src={Calendar} alt='' />
                            </div>
                            <div>
                                <h6>16 - 17 July</h6>
                                2025
                            </div>
                        </div>
                        <div className='tag'>
                            Personal Care Ingredients
                        </div>
                    </div>
                    <div className='blue-card'>
                        <h5>HPCI 2025</h5>
                        <div className='location'>
                            <div className='icon'>
                                <img src={LocationIcon} alt='' />
                            </div>
                            <div>
                                <h6>Booth No: E 07</h6>
                                Jio World Convention Centre, Mumbai
                            </div>
                        </div>
                        <div className='location'>
                            <div className='icon'>
                                <img src={Calendar} alt='' />
                            </div>
                            <div>
                                <h6>18 - 19 February</h6>
                                2025
                            </div>
                        </div>
                        <div className='tag'>
                            Home & Personal Care Ingredients
                        </div>
                    </div>
                    <div className='blue-card'>
                        <h5>PCHI 2025</h5>
                        <div className='location'>
                            <div className='icon'>
                                <img src={LocationIcon} alt='' />
                            </div>
                            <div>
                                <h6>Booth No: 5J27</h6>
                                China Import and Export Fair Complex, Guangzhou, China Hall No: 5.1
                            </div>
                        </div>
                        <div className='location'>
                            <div className='icon'>
                                <img src={Calendar} alt='' />
                            </div>
                            <div>
                                <h6>19 - 21 February</h6>
                                2025
                            </div>
                        </div>
                        <div className='tag'>
                            Home & Personal Care Ingredients
                        </div>
                    </div>
                    <div className='blue-card'>
                        <h5>in-cosmetics Global 2025</h5>
                        <div className='location'>
                            <div className='icon'>
                                <img src={LocationIcon} alt='' />
                            </div>
                            <div>
                                <h6>Booth No: 1E51</h6>
                                Amsterdam, Netherlands Hall No: 1
                            </div>
                        </div>
                        <div className='location'>
                            <div className='icon'>
                                <img src={Calendar} alt='' />
                            </div>
                            <div>
                                <h6>8 – 10 April</h6>
                                2025
                            </div>
                        </div>
                        <div className='tag'>
                            Global event for personal care ingredients
                        </div>
                    </div>
                    <div className='blue-card'>
                        <h5>NYSCC Suppliers' Day 2025</h5>
                        <div className='location'>
                            <div className='icon'>
                                <img src={LocationIcon} alt='' />
                            </div>
                            <div>
                                <h6>Booth No: 229</h6>
                                Javits Convention Center, New York City
                            </div>
                        </div>
                        <div className='location'>
                            <div className='icon'>
                                <img src={Calendar} alt='' />
                            </div>
                            <div>
                                <h6>3 - 4 June</h6>
                                2025
                            </div>
                        </div>
                        <div className='tag'>
                            Cosmetics and Personal Care
                        </div>
                    </div>
                </AtomCarousel>
            </div>
            <LatestNews />
        </>
    )
}

export default HomeTemplate