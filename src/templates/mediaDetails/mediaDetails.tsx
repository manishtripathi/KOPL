import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import { useNavigate } from "react-router-dom";
import AtomLink from '../../atoms/link/link'
import AtomButton from '../../atoms/button'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import AtomCarousel from '../../atoms/carousel/carousel'
import { Banner, thumb1, thumb2, Event1, Event2, Event3, DialogArrow, WavePattern } from '../../helpers/constant/imageUrl'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import './mediaDetails.scss'

const MediaDetailsTemplate = () => { 
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0)
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`)
    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setCurrentTab(newValue)
    }
    return (
        <div className="media-details">
            <Container className='container'>
                <Breadcrumbs aria-label="breadcrumb">
                    <AtomButton>
                        Media
                    </AtomButton>
                    <span>Fostering Strategic Partnerships in Egypt 16th - 18th December 2024</span>
                </Breadcrumbs>
                <h1>NEWS & EVENTS</h1>
                <h2>Fostering Strategic Partnerships in Egypt 16th – 18th December 2024</h2>
                <img src={Banner} alt='' className='banner' />
                <p>We are delighted to share the success of our recent business meetings in Egypt, held from 16th to 18th December 2024. This visit was a vital opportunity to deepen relationships with our valued partners and explore innovative ways to drive growth and efficiency in their industries.</p>
                <h3>Key Highlights of the Visit:</h3>
                <ul className='unordered-list'>
                    <li>
                        <strong>Tailored Product Solutions:</strong> We discussed our diverse range of offerings, focusing on custom solutions to address the specific needs of our partners' businesses.
                    </li>
                    <li>
                        <strong>Market Insights:</strong> The meetings provided a platform to exchange insights on emerging trends and evolving industry demands, ensuring our solutions remain ahead of the curve.
                    </li>
                    <li>
                        <strong>Collaborative Strategies:</strong> Together with our partners, we identified opportunities for operational enhancement and joint initiatives that can strengthen mutual success.
                    </li>
                </ul>
                <h3>Reinforcing Our Commitment:</h3>
                <p>At Kumar Organic Products Ltd., we are committed to fostering long-term, impactful relationships with our business customers. These meetings underscored our dedication to understanding their challenges, innovating to meet their needs, and delivering excellence at every step.</p>
                <h3>A Heartfelt Thank You:</h3>
                <p>We sincerely thank our partners for their trust, hospitality, and invaluable contributions during these discussions. It is through such collaborative engagements that we continue to shape meaningful solutions and set new standards in the industries we serve.</p>
                <p>Stay connected as we continue to innovate, grow, and build a brighter future together.</p>
                <p className='mt-10 mb-10'>
                    <strong>
                        For inquiries and partnership opportunities, contact us at&nbsp;
                        <AtomLink 
                            href="mailto:kop@kumarorganic.net"
                        >
                            kop@kumarorganic.net
                        </AtomLink>
                    </strong>
                </p>
                <Grid container spacing={{ xs: 5, md: 5 }}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <img src={thumb1} alt='' className='w-100' />
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <img src={thumb2} alt='' className='w-100' />
                    </Grid>
                </Grid>                
            </Container>
            <div className='more-insights'>
                <img src={WavePattern} alt='' className='wave-pattern' />
                <Container className='container'>
                    <h4>More Insights</h4>
                    <AtomCarousel
                        dots={true}
                        speed={3000}
                        infinite={false}
                        autoplay={true}
                        autoplaySpeed={4000}
                        pauseOnHover={true}
                        slidesToShow={breakPoint ? 3 : 1}
                        slidesToScroll={breakPoint ? 3 : 1}
                    >
                        <div>
                            <img src={Event1} alt='' className='thumb' />
                            <div className='pl-4 pr-4'>
                                <div className='title'>
                                    NEWS & EVENTS
                                </div>
                                <div className='white-section'>
                                    <h5>In-Cosmetics Asia 2024 Wrap-Up: Meaningful Connections and Positive Feedback</h5>
                                    <p>We are pleased to share the success of our participation at In-Cosmetics Asia 2024, held from November 5-7 at BITEC, Bangkok. Over these three days, we connected with many industry leaders, brand representatives, and formulators, receiving a warm and positive response to our latest ingredient innovations.</p>
                                    <AtomLink 
                                        href=""
                                        className='read-article'
                                        startIcon={<img src={DialogArrow} alt='' />}
                                    >
                                        Read Article
                                    </AtomLink>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <img src={Event2} alt='' className='thumb' />
                            <div className='pl-4 pr-4'>
                                <div className='title'>
                                    NEWS & EVENTS
                                </div>
                                <div className='white-section'>
                                    <h5>Kumar Organic Products Shines at In-Cosmetics Latin America 2024: A Milestone in Innovation and Partnerships</h5>
                                    <p>We are thrilled to announce the successful participation of Kumar Organic Products Ltd. at In-Cosmetics Latin America 2024, held in São Paulo from September 18-19. The event, a premier platform for personal care ingredients, offered us an opportunity to showcase our innovative solutions, strengthen partnerships, and engage with industry leaders.</p>
                                    <AtomLink 
                                        href=""
                                        className='read-article'
                                        startIcon={<img src={DialogArrow} alt='' />}
                                    >
                                        Read Article
                                    </AtomLink>
                                </div>
                            </div>                            
                        </div>
                        <div>
                            <img src={Event3} alt='' className='thumb' />
                            <div className='pl-4 pr-4'>
                                <div className='title'>
                                    NEWS & EVENTS
                                </div>
                                <div className='white-section'>
                                    <h5>Kopdil™ | Minoxidil for Cosmetic Applications</h5>
                                    <p>Thinning hair doesn't need to be your only option…Kumar Organic Product Limited's Kopdil™ (Minoxidil, USP) is a leading product in the fight against hair loss. Kopdil is very effective as an active ingredient in hair care regimens adopted at the earlier signs of hair loss. As a vasodilator, Minoxidil helps to expand the blood vessels in the scalp, when applied topically, bringing more nutrients to the hair follicle and preventing miniaturization of these same follicles. This process is dependent on the ability of Kopdil to facilitate ion transmission through potassium channels. The application of Minoxidil (2,4-Diamino-6-piperidinopyrimidine-3-oxide) is particularly effective at reversing hair loss, combatting Androgenic Alopecia, in the</p>
                                    <AtomLink 
                                        href=""
                                        className='read-article'
                                        startIcon={<img src={DialogArrow} alt='' />}
                                    >
                                        Read Article
                                    </AtomLink>
                                </div>
                            </div>                            
                        </div>                    
                    </AtomCarousel>
                </Container>
            </div>
        </div>
    )
}

export default MediaDetailsTemplate