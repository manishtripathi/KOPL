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

const HomeTemplate = () => {
    const navigate = useNavigate();
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`)
    const handleRedirect = () => {
        navigate("/products");
    }
    return (
        <>      
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
            <div className='latest-news'>
                <Container className='container'>
                    <h4>Latest News</h4>
                    <AtomCarousel
                        dots={true}
                        speed={3000}
                        infinite={true}
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
                        <div>
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
                        <div>
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
                        <div>
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
                    </AtomCarousel>
                    <Grid container justifyContent={"center"} className="mt-12">
                        <AtomButton 
                            variant = {'outlined'}
                            size = {'large'}
                            endIcon={
                                <img src={ChevronRight} alt='' />
                            }
                        >
                            view more
                        </AtomButton>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default HomeTemplate