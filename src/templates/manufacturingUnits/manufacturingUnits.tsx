import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { ChevronRight, ManufacturingUnits, Kosher, Halal, Cofepris, CEP, GMP, Anvisa, EFSCI, FDA, GHS, Ecovadis, bureuVeritas } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import AtomCarousel from '../../atoms/carousel/carousel'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import './manufacturingUnits.scss'

const ManufacturingUnitsTemplate = () => { 
    const navigate = useNavigate();
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`)
    const breakPointIpad = useMediaQuery(`(${BREAK_POINT_CONSTANTS.IPAD})`)
    return (
        <div className="manufacturing-units">
            <div className='gradient-section'>
                <Container className='container'>
                    <Grid container>
                        <Grid size={{ xs: 12, sm: 5 }}>
                            <h1>Manufacturing Excellence</h1>
                            <p>We have the infrastructure and expertise to deliver excellence. Our facilities uphold stringent quality standards and are equipped with best in class equipments to precisely meet product specifications.</p>
                            <p>Our manufacturing facilities hold prestigious accreditations, including USFDA, COFEPRIS, CEP, ISO 9001:2015 for Quality Management and ISO 14001:2015 for Environmental Management System. Additionally, All our units manufacturing plants are GMP approved and sustainability certified and have a manufacturing license from the drug controller, ensuring conformity to rigorous international standards.</p>
                            <AtomButton 
                                variant='contained' 
                                color='primary' 
                                size={breakPointIpad ? 'large' : 'small'}
                                endIcon={
                                    <img src={ChevronRight} alt='' />
                                }                                
                            >
                                PRODUCT LIST
                            </AtomButton>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 7 }} className="text-right">
                            <img src={ManufacturingUnits} alt='' />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='regulatory-certifications'>
                <Container className='container'>
                    <h3>Accreditations & Regulatory Certifications</h3>
                    <AtomCarousel
                        dots={true}
                        speed={1500}
                        infinite={false}
                        autoplay={false}
                        loop={false}
                        autoplaySpeed={4000}
                        pauseOnHover={false}
                        slidesToShow={breakPoint ? 6 : 1}
                        slidesToScroll={breakPoint ? 1 : 1}
                    >
                        <div>
                            <div className='white-circle'>
                                <img src={Kosher} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={Halal} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={Cofepris} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={CEP} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={GMP} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={Anvisa} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={EFSCI} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={FDA} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={GHS} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={Ecovadis} alt='' />
                            </div>
                        </div>
                        <div>
                            <div className='white-circle'>
                                <img src={bureuVeritas} alt='' />
                            </div>
                        </div>
                    </AtomCarousel>
                </Container>
            </div>
        </div>
    )
}

export default ManufacturingUnitsTemplate