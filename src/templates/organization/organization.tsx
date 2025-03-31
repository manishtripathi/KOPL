import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import { useNavigate } from "react-router-dom";
import AtomCarousel from '../../atoms/carousel/carousel'
import { Map, arrowRight, Antibacterial, ChevronRight, Emollients, FoodHealth, OralCare, PaintsCoatings, Preservatives, SunCare, SkinCare, certification1, certification2, certification3, certification4, certification5, certification6, certification7, certification8, certification9, certification10, Fortcaps } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import './organization.scss'

const OrganizationTemplate = () => { 
    const navigate = useNavigate();
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`)
    return (
        <div className="organization">
            <div className='gradient-section'>
                <Container className='container'>
                    <h1>Global Reach & Unmatched Support</h1>
                    <p>Our strategically positioned offices in Singapore, Basel, Bahnhofstraße, Luton, and New Jersey underscore our commitment to seamless service. Covering 80+ countries via robust distribution networks, we ensure unparalleled accessibility worldwide.</p>
                    <AtomButton 
                        variant = {'outlined'}
                        size = {'small'}
                        className='btn mb-5 mb-md-0'
                    >
                        <span className='icon'>
                            <img src={arrowRight} alt='' />
                        </span>
                        <div>
                            Strategic Office Locations
                            <strong>Seamless Client Support Worlwide</strong>
                        </div>
                    </AtomButton>
                    <AtomButton 
                        variant = {'outlined'}
                        size = {'small'}
                        className='btn'
                    >
                        <span className='icon'>
                            <img src={arrowRight} alt='' />
                        </span>
                        <div>
                            Extensive Export Network
                            <strong>Robust Distribution in 80+ Countries</strong>
                        </div>
                    </AtomButton>
                    <img src={Map} alt='' className='map' />
                </Container>
            </div>
            <div className='business-segment'>
                <Container className='container'>
                    <h2>Business Segments</h2>
                    <p>In a dynamic market environment characterized by rapid shifts in consumer behavior and evolving demands, KOPL serves customers across diverse industries and regions, confronting a spectrum of challenges.</p>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Antibacterial
                                    <AtomButton
                                        onClick={() => navigate("/antibacterial-products")}
                                    >
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Hair Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={SunCare} alt='' />
                                <div className="overlay">
                                    Sun Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Hair Growth
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Bio Ferments
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={SkinCare} alt='' />
                                <div className="overlay">
                                    Skin Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Preservatives} alt='' />
                                <div className="overlay">
                                    Preservatives
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={FoodHealth} alt='' />
                                <div className="overlay">
                                    Food & Health
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={PaintsCoatings} alt='' />
                                <div className="overlay">
                                    Paints & Coatings
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Emollients} alt='' />
                                <div className="overlay">
                                    Emollients
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={OralCare} alt='' />
                                <div className="overlay">
                                    Oral Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='measurement'>
                <Container className='container'>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>5</h4>
                            <p>Manufacturing Units</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>2,000+</h4>
                            <p>Customers Served</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>2</h4>
                            <p>Research Centre</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>60+</h4>
                            <p>Active Ingredients</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>80+</h4>
                            <p>Countries Served</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='standard-certifications'>
                <Container className='container'>
                    <h3>Standards & Certifications</h3>
                    <AtomCarousel
                        dots={false}
                        arrows={true}
                        speed={1500}
                        infinite={false}
                        autoplay={false}
                        loop={false}
                        autoplaySpeed={4000}
                        pauseOnHover={false}
                        slidesToShow={breakPoint ? 2 : 1}
                        slidesToScroll={breakPoint ? 2 : 1}
                    >
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>KOPSOVA 105 IP</h4>
                                        <p>Our scientists secured a Patent from the Government of India's Intellectual Property India for Kopsova 105 (Isosorbide Dithioglycolate), a novel depilatory active, and its unique preparation process</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification1} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>GMP OF VU</h4>
                                        <p>GMP for Cosmetic Ingredients All units</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification2} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>ISO 9001: 2015</h4>
                                        <p>Management System Standards, ensuring quality and environmental compliance.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification3} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>AQUA PRODUCTS IP</h4>
                                        <p>Patent Awarded for Revolutionary Aqua Products! Kumar Organic Products celebrates another patented innovation from its Research & Innovation Team.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification4} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>ISO 14001: 2015</h4>
                                        <p>Management System Standards, ensuring quality and environmental compliance</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification5} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>FICCI</h4>
                                        <p>FICCI awards honor excellence in business, innovation, entrepreneurship, and social responsibility across various sectors in India.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification6} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>COLGATE-PALMOLIVE INDIA</h4>
                                        <p>Kumar Organic: Recognized by Colgate-Palmolive India as a trusted triclosan supplier</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification7} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>USFDA</h4>
                                        <p>USFDA inspected facilities across all units</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification8} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>REACH</h4>
                                        <p>EU Region REACH-Registered Products</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification9} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                        <div>
                            <div className='card'>
                                <Grid container alignItems={'center'}>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }}>
                                        <h4>SME GAURAV AWARD</h4>
                                        <p>The "SME Gaurav Award" is a prestigious honor recognizing excellence and innovation among Small and Medium Enterprises (SMEs) in various sectors.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6, sm: 6, md: 6 }} className="text-right">
                                        <img src={certification10} alt='' />
                                    </Grid>
                                </Grid>                           
                            </div>
                        </div>
                    </AtomCarousel>
                </Container>
            </div>
            <div className='group-company'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'} alignItems={'center'}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} className="mb-6 mb-md-0">
                            <h4>Group Companies</h4>
                            <h5>Fortcaps Healthcare Ltd</h5>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 7.5 }} alignItems={{ xs: 'flex-start', md: 'center' }} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }}>
                            <img src={Fortcaps} alt='' className='mr-10' />
                            <p><strong>Fortcaps Healthcare Ltd.</strong> (a wholly owned subsidiary of Kumar Organic Products Limited) was incorporated in 1992 to cater to the ever-increasing demand of the pharmaceutical industry for capsules. Fortcaps is currently amongst the Top 5 manufacturers of high quality Empty Hard Gelatin (EHG) and Pullulan (Satvik certified veg) capsules in India.</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='discover-offices'>
                <Container className='container'>
                    <Grid
                        container
                        direction="row"
                        spacing={{ xs: 5, md: 0 }}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid size={{ xs: 12, md: 9 }}>
                            <h6>
                                Discover Our Global Reach: Find Country - Specific Contact Information
                            </h6>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'auto' }}>
                            <AtomButton 
                                variant = {'outlined'}
                                size = {'large'}
                                endIcon={
                                    <img src={ChevronRight} alt='' />
                                }
                            >
                                global offices
                            </AtomButton>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default OrganizationTemplate