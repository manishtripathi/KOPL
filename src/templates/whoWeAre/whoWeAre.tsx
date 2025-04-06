import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { CirclePatternTop, Vision, Mission, Value, Goal, Organization, Management, Research, Investors, Sustainability, CorporateSocialResponsibility, ChevronRight } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import './whoWeAre.scss'

const WhoWeAreTemplate = () => { 
    const navigate = useNavigate();
    return (
        <div className="who-we-are">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>About Kumar Organic</h1>
                    <p><b>Kumar Organic Products Limited</b>, established in 1991, is a renowned name in the specialty ingredient industry. With over three decades of experience, we have become a trusted provider of high-quality ingredients for various sectors, including hair care, skin care, sun care, paints and coatings, and food and healthcare. Our journey began with a vision to revolutionize the industry through innovation and excellence. Over the years, we have relentlessly pursued this vision, constantly evolving to meet the ever-changing needs of our customers worldwide. Today, Kumar Organic boasts a wide range of 50 products manufactured at our state-of-the-art facilities in India.</p>
                </Container>
            </div>
            <div className='process'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Vision} alt='' />
                                </div>
                                <h4>Our Vision</h4>
                                <p>To be an outstanding research based Global Specialty and Fine Chemicals Company Committed to building strong relationship with our customers, our employees and shareholders. The motto for our growth is innovative technology, uncompromising quality of products and excellence in service.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Mission} alt='' />
                                </div>
                                <h4>Our Mission</h4>
                                <p>To manufacture and provide superior quality Specialty and Fine Chemicals, active pharmaceutical and cosmceutical ingredients to all our valued customers from the personal care and pharmaceutical industries.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Value} alt='' />
                                </div>
                                <h4>Value</h4>
                                <p>Passion for excellence, customer focus, teamwork, embracing change, delivering on commitments, and sustainability form the core of our organizational values, guiding our actions and decisions every day</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Goal} alt='' />
                                </div>
                                <h4>Goals & Objective</h4>
                                <p>Our goal is to continuously innovate and excel in the development and supply of specialty ingredients, while fostering sustainable growth, enhancing customer value, and maintaining leadership in the industry.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='work-process'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 7.5 }}>
                                    <h5>Organization</h5>
                                    <p>Kumar Organic operates with cutting-edge facilities, adhering to international standards, with diverse business units and factors ensuring quality and sustainability.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        view more
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={Organization} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 7.5 }}>
                                    <h5>Management</h5>
                                    <p>Our dedicated team, comprising experienced professionals, drives innovation and excellence across all facets of our operations and strategic initiatives.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                        onClick={() => navigate("/management")}
                                    >
                                        view more
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={Management} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='work-process blue'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 7.5 }}>
                                    <h5>Research & Development</h5>
                                    <p>KOP Research Centre, a hub of innovation, pioneers breakthrough solutions in specialty ingredients, leveraging state-of-the-art facilities and top-tier scientific expertise.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        view more
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={Research} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 7.5 }}>
                                    <h5>Investors</h5>
                                    <p>We prioritize transparency and accountability, offering investors insights into our performance, growth strategies, and commitment to long-term value creation.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        view more
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={Investors} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='work-process'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 7.5 }}>
                                    <h5>Sustainability</h5>
                                    <p>Commitment to eco-friendly practices for a greener, sustainable future.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        view more
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={Sustainability} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 7.5 }}>
                                    <h5>Corporate Social Responsibility</h5>
                                    <p>Engage in community initiatives to uplift lives, empower education, and foster sustainable development for a brighter tomorrow.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        view more
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={CorporateSocialResponsibility} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default WhoWeAreTemplate