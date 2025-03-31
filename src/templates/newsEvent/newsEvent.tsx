import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import AtomLink from '../../atoms/link/link'
import AtomButton from '../../atoms/button'
import { CirclePatternTop, Event1, Event2, Event3, Event4, Event5, Event6, DialogArrow, ChevronRight } from '../../helpers/constant/imageUrl'
import './newsEvent.scss'

const NewsEventTemplate = () => { 
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0)
    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setCurrentTab(newValue)
    }
    return (
        <div className="news-events">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>News & Events</h1>
                    <p>Stay updated with the latest news and media coverage on Kumar Organic Products Limited. Explore our recent events, innovations, and industry insights here.</p>
                </Container>
            </div>
            <div className='all-updates'>
                <Container className='container'>
                    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 6 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
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
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
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
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
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
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Event4} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        NEWS & EVENTS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Strengthening Global Partnerships: Taiwan Seminar 2024</h5>
                                        <p>Kumar Organic Products Ltd. is proud to announce the resounding success of our recent seminar in Taiwan, a landmark event that brought together key stakeholders, including our dedicated Singapore team, valued distributor, and sub-distributors. This event underscored our commitment to fostering innovation, knowledge-sharing, and collaborative growth across global markets.</p>
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
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Event5} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        NEWS & EVENTS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Fostering Strategic Partnerships in Egypt 16th – 18th December 2024</h5>
                                        <p>We are delighted to share the success of our recent business meetings in Egypt, held from 16th to 18th December 2024. This visit was a vital opportunity to deepen relationships with our valued partners and explore innovative ways to drive growth and efficiency in their industries.</p>
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
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Event6} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        NEWS & EVENTS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Carrot Dew Face Mist: The New Standard for Skin Hydration and Care</h5>
                                        <p>Carrot dew is a Face Mist. This formulation is developed with Bacillus ginsengisoli/Carrot root ferment filtrate, also called as Kopcarotol, having following attributes,</p>
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
                        </Grid>
                    </Grid>
                    <div className='text-center mt-16'>
                        <AtomButton 
                            variant = {'outlined'}
                            size = {'large'}
                            endIcon={
                                <img src={ChevronRight} alt='' />
                            }
                        >
                            VIEW MORE
                        </AtomButton>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default NewsEventTemplate