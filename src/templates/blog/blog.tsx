import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import AtomLink from '../../atoms/link/link'
import AtomButton from '../../atoms/button'
import { CirclePatternTop, Event6, Event7, Event8, Event9, Event10, Event11, DialogArrow, ChevronRight } from '../../helpers/constant/imageUrl'
import './blog.scss'

const BlogTemplate = () => { 
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0)
    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setCurrentTab(newValue)
    }
    return (
        <div className="media">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>Blogs</h1>
                    <p>Explore insightful articles, industry trends, and expert insights on specialty and fine chemicals. Our blog covers topics ranging from sustainable practices and innovative formulations to market updates and product applications. Join us as we share knowledge that empowers your business decisions and keeps you informed about the latest advancements in the chemical industry.</p>
                </Container>
            </div>
            <div className='all-updates'>
                <Container className='container'>
                    <Grid container rowSpacing={{ xs: 1, sm: 2, md: 6 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Event6} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        BLOGS
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
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Event7} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        BLOGS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Piroctone Olamine: Effective active for Dandruff - Cosmetics & Herbal News</h5>
                                        <p>Kumar Organic Products Ltd. is proud to announce the resounding success of our recent seminar in Taiwan, a landmark event that brought together key stakeholders, including our dedicated Singapore team, valued distributor, and sub-distributors. This event underscored our commitment to fostering innovation, knowledge-sharing, and collaborative growth across global markets.</p>
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
                                <img src={Event8} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        BLOGS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Personal care ingredients market in India - Ingredients South Asia</h5>
                                        <p>We are delighted to share the success of our recent business meetings in Egypt, held from 16th to 18th December 2024. This visit was a vital opportunity to deepen relationships with our valued partners and explore innovative ways to drive growth and efficiency in their industries.</p>
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
                                <img src={Event9} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        BLOGS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Hair growth stimulants and cosmetics - Cosmetics & Herbal News - Hindi</h5>
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
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Event10} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        BLOGS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Hair growth stimulants and cosmetics - Special article - HPIC India</h5>
                                        <p>Kumar Organic Products Ltd. is proud to announce the resounding success of our recent seminar in Taiwan, a landmark event that brought together key stakeholders, including our dedicated Singapore team, valued distributor, and sub-distributors. This event underscored our commitment to fostering innovation, knowledge-sharing, and collaborative growth across global markets.</p>
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
                                <img src={Event11} alt='' className='thumb' />
                                <div className='pl-4 pr-4'>
                                    <div className='title'>
                                        BLOGS
                                    </div>
                                    <div className='white-section'>
                                        <h5>Bioferments in Beauty - Infusing Antioxidant and Microbiome Benefits into skin - Cosmetics and Toiletries</h5>
                                        <p>We are delighted to share the success of our recent business meetings in Egypt, held from 16th to 18th December 2024. This visit was a vital opportunity to deepen relationships with our valued partners and explore innovative ways to drive growth and efficiency in their industries.</p>
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

export default BlogTemplate