import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { WavePattern, Optimization, Manufacturing, Facility, TechnicalTeam, ChevronRight, BiotechCentre, Lady, Scientist, Idea, ResetArrow, Bookmark } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import './researchCentre.scss'

const ResearchCentreTemplate = () => { 
    return (
        <div className="research-centre">
            <div className='gradient-section'>
                <Container className='container'>
                    <div className='pattern'>
                        <img src={WavePattern} alt='' />
                    </div>
                    <h1>KOP Research Centre</h1>
                    <p>Established in 2001, the KOP Research Centre is an outcome of the visionary goals of Kumar OrganicProducts Limited. Spread over 20,000 sq. ft. and staffed by approximately 40 scientists, our center is ISO9001:2015 (QMS) and ISO 14001:2015 (EMS) certified.</p>
                </Container>
            </div>
            <div className='RD-solutions'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Optimization} alt='' />
                                </div>
                                <h4>Process Development & Optimization</h4>
                                <p>We develop processes by screening various routes and selecting the most promising, economically viable options. Continuous improvements are made to ensure easy handling and cost effectively.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Manufacturing} alt='' />
                                </div>
                                <h4>Custom Manufacturing</h4>
                                <p>Our technical capabilities in scaling up complex chemical processes allow us to supply customized molecules to reputed multinationals.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='blue-section'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 5 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='facility'>
                                <img src={Facility} alt='' className='thumb' />
                                <div className='white-card'>
                                    <h4>Facility</h4>
                                    <ul>
                                        <li>Cell Biology Lab</li>
                                        <li>Synthetic Process Development Lab</li>
                                        <li>Biotech Centre</li>
                                        <li>Analytical R&D Lab</li>
                                        <li>Microbiology Lab</li>
                                        <li>Application Lab</li>
                                        <li>Scale-up Lab / Pilot Plant</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='facility'>
                                <img src={TechnicalTeam} alt='' className='thumb' />
                                <div className='white-card'>
                                    <h4>Technical Team</h4>
                                    <ul>
                                        <li>Scientists</li>
                                        <li>Organic Chemists</li>
                                        <li>Formulation technologists</li>
                                        <li>Biotechnologists</li>
                                        <li>Analytical Chemists</li>
                                        <li>Microbiologists</li>
                                        <li>Cosmetologists</li>
                                        <li>Process Engineer</li>
                                    </ul>
                                </div>
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
                                    <h5>Biotech Centre</h5>
                                    <p>Pioneering advancements in biotechnology to create innovative, sustainable solutions for a better future.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        READ NOW
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={BiotechCentre} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 7.5 }}>
                                    <h5>Formulations</h5>
                                    <p>Crafting cutting-edge formulations to maximize the efficacy and versatility of our specialty ingredients.</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'large'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        READ NOW
                                    </AtomButton>
                                    <figure className='bg'>
                                        <img src={TechnicalTeam} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='capabilities-section'>
                <Container className='container'>
                    <Grid container justifyContent="space-between">
                        <Grid size={{ xs: 12, sm: 7 }}>
                            <div className='column column-1'>
                                <div>
                                    <h3>Capabilities</h3>
                                    <p>KOP Research Centre boasts extensive R&D capabilities designed to ensure the success of our projects from inception to completion. We excel in identifying and selecting the most economically viable routes for development, conducting thorough safety evaluations of all processes, and leveraging advanced techniques such as fermentation and bio-transformation. Our comprehensive approach includes efficacy studies, impurity profiling, and stability studies to guarantee the highest quality outcomes.</p>
                                </div>
                                <img src={Lady} alt='' className='thumb' />  
                            </div>                        
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="end">
                        <Grid size={{ xs: 12, sm: 7 }}>
                            <div className='column mt-minus-5 text-right'>
                                <img src={Scientist} alt='' className='thumb' />  
                                <div className='mt-20'>
                                    <h3>Analytical Capability</h3>
                                    <ul>
                                        <li>Liquid Chromatography (HPLCs)</li>
                                        <li>Gas Chromatography (GCs)</li>
                                        <li>Fourier Transform Infra Red Spectrophotometer (FT-IR)</li>
                                        <li>UV Spectrophotometer</li>
                                        <li>Auto-titrator</li>
                                        <li>Particle Size Analyzer, and other routine instruments</li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='what-we-offer'>
                <img src={WavePattern} alt='' className='wave-pattern' />
                <Container className='container'>
                    <Grid container justifyContent="space-between" alignItems={'center'}>
                        <Grid size={{ xs: 12, sm: 4.75 }}>
                            <h4>WHAT WE OFFER</h4>
                            <h3>Our Comprehensive Expertise</h3>
                            <p>At Kumar Organic Products Limited, we master advanced chemical reactions and biological processes, delivering high-quality, innovative solutions.</p>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5.5 }}>
                            <ul>
                                <li>
                                    <div className='icon-holder'>
                                        <img src={Idea} alt='' />
                                    </div>
                                    <div>
                                        <h5>Advanced Chemical Processes</h5>
                                        <p>Our team excels in Halogenations, Diazotizations, and Friedel-Crafts Reactions, ensuring precise and efficient chemical transformations.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon-holder'>
                                        <img src={ResetArrow} alt='' />
                                    </div>
                                    <div>
                                        <h5>Specialized Biological Techniques</h5>
                                        <p>We specialize in Microbial Fermentation, Biocatalysts, and Enzymatic Reactions, driving innovation in biochemical processes and applications.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className='icon-holder'>
                                        <img src={Bookmark} alt='' />
                                    </div>
                                    <div>
                                        <h5>Development of Bioproducts</h5>
                                        <p>We develop Biopolymers, Biopeptides, and Ferment Extracts, creating sustainable and high-value products for various industries.</p>
                                    </div>
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='measurement'>
                <Container className='container'>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 6, md: 4 }}>
                            <h4>55+</h4>
                            <p>Ingredients</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 4 }}>
                            <h4>4.8/5</h4>
                            <p>Customer Satisfaction Rate</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 4 }}>
                            <h4>600+</h4>
                            <p>Professional Team Members</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default ResearchCentreTemplate