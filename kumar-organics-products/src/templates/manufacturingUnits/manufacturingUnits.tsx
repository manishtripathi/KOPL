import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { ChevronRight, ManufacturingUnits, Kosher, Halal, Cofepris, CEP, GMP, Anvisa, EFSCI, FDA, GHS, Ecovadis, bureuVeritas, manufacturingUnit1, FDA2, USP, ISO, ecologicalStewardship, EHSSystem, Reward, Building, Shield, leaf, User1, User2, User3 } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import AtomCarousel from '../../atoms/carousel/carousel'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
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
                                fullWidth={breakPointIpad ? false : true}
                                endIcon={
                                    <img src={ChevronRight} alt='' />
                                }                                
                            >
                                PRODUCT LIST
                            </AtomButton>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 7 }} className="text-right">
                            <img src={ManufacturingUnits} alt='' className='map' />
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
                        slidesToShow={breakPoint ? 6 : 3}
                        slidesToScroll={breakPoint ? 3 : 1}
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
            <div className='manufacturing-unit-section'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'}>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' className='w-100' />
                            <div className='blue-section'>
                                <img src={FDA2} alt='' />
                                <p>Planned Preventive Maintenance Document & Data Control Product Complaint Handling Product Recalls Procedure</p>
                                <span>Adheres to FDA</span>
                            </div>                           
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>Our System Ensures</h3>
                                <p>We maintain stringent quality standards through comprehensive processes. This includes equipment and facility qualification, manufacturing process validation, employee training, and meticulous change control.</p>
                                <ul>
                                    <li>All our processes is developed by our In-house R&D</li>
                                    <li>Capability to conduct comprehensive testing and validation of products</li>
                                    <li>Designed to meet the highest industry standards and regulations.</li>
                                    <li>Custom-developed formulations tailored to client needs and market trends.</li>
                                    <li>Encouragement of trial and error to foster innovative solutions.</li>
                                    <li>Compliance with local and international regulations and standards.</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            {/* <div className='manufacturing-unit-section blue'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'}>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>Supportive Instruments In Manufacturing Processes</h3>
                                <p>Explore our world of manufacturing precision. Our instruments, from reactors to chromatographs, guarantee quality and reliability. With advanced technology and expert engineering, we ensure safety, sustainability, and scalability.</p>
                                <Grid container justifyContent={'space-between'}>
                                    <Grid size={{ xs: 'auto' }}>
                                        <ul>
                                            <li>100% Power Backup</li>
                                            <li>Boiler</li>
                                            <li>Chilling Systems</li>
                                            <li>Cooling Tower</li>
                                            <li>Reactors</li>
                                            <li>Dryers</li>
                                            <li>Distillation Column</li>
                                        </ul>
                                    </Grid>
                                    <Grid size={{ xs: 'auto' }}>
                                        <ul>
                                            <li>Extraction Column</li>
                                            <li>Centrifuge</li>
                                            <li>Shifters</li>
                                            <li>Blenders</li>
                                            <li>Milling</li>
                                            <li>Pulverizer</li>
                                        </ul>
                                    </Grid>
                                </Grid>                                
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />
                            <div className='blue-section'>
                                <img src={ISO} alt='' />
                                <p><strong>Equipment for Manufacturing</strong> Malvern Particle Size Analyzer Chroma Meter Cr-400 Weighing Balance PH Meter Fuming Chamber</p>
                                <span>Adheres to ISO 9001:2015 & ISO 14001:2015</span>
                            </div>                           
                        </Grid>                        
                    </Grid>
                </Container>
            </div>
            <div className='manufacturing-unit-section'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'}>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />
                            <div className='blue-section'>
                                <img src={USP} alt='' />
                                <p><strong>Groundwater Purification Process</strong> Groundwater Undergoes Ion Exchange, Two-Stage R.O., and Mixed Bed Processes. Purified Water is Continuously Recirculated with an Auto-Dumping System.</p>
                                <span>Dedicated to Minimizing Environmental Impact Through Eco-Friendly Processes.</span>
                            </div>                           
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>Upgraded Purified Water System: Meeting USP Standards</h3>
                                <p>Our Purified Water System was upgraded in the year 2020 and is designed to meet the standards.</p>
                                <p>After we upgraded the Water System, validation of the system commenced. All phases of validation have been completed. Water is tested for chemical and microbiological attributes according to predefined specifications from various sampling points as per the validation protocol.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='manufacturing-unit-section blue'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'}>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>Empowering Safety: Our Key To Operational Excellence</h3>
                                <p>In our every plant, safety is our top priority:</p>
                                <ul>
                                    <li><strong>Comprehensive Safety Arsenal:</strong> Equipped with fire hydrant systems, extinguishers, AFDS, fire extinguishing balls, mist systems, and a zero liquid discharge plant.</li>
                                    <li><strong>Expert Firefighting Team:</strong> Our well-trained and well-equipped firefighters ensure swift emergency response and effective containment.</li>
                                    <li><strong>Award-Winning Safety Standards:</strong> Proud recipients of the fire safety award from the Government of Karnataka for the past five years, recognizing our unwavering commitment to safety.</li>
                                </ul>                                
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />
                            <div className='blue-section'>
                                <img src={ecologicalStewardship} alt='' />
                                <p><strong>Social and Ecological Stewardship:</strong> Striving for “Zero Accidents” while Nurturing Education, Family, and Culture, with Environmental Protection at Our Core.</p>
                                <span>Adheres to GMP</span>
                            </div>                           
                        </Grid>                        
                    </Grid>
                </Container>
            </div>
            <div className='manufacturing-unit-section'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'}>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />
                            <div className='blue-section'>
                                <img src={FDA2} alt='' />
                                <p>Planned Preventive Maintenance Document & Data Control Product Complaint Handling Product Recalls Procedure</p>
                                <span>Adheres to FDA</span>
                            </div>                           
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>Quality And Compliance</h3>
                                <p>We maintain stringent quality standards through comprehensive processes. This includes equipment and facility qualification, manufacturing process validation, employee training, and meticulous change control.</p>
                                <ul>
                                    <li>Qualification & Validation of equipment and facility.</li>
                                    <li>Process validation for the manufacturing process.</li>
                                    <li>Training to Employees.</li>
                                    <li>Change control and deviation management.</li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='measurement'>
                <Container className='container'>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 6, md: 3 }}>
                            <h4>8,000MT+</h4>
                            <p>Total Capacity</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 3 }}>
                            <h4>180+</h4>
                            <p>Production Team</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 3 }}>
                            <h4>604+</h4>
                            <p>Total Employees</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 3 }}>
                            <h4>55+</h4>
                            <p>Products</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='EHS-system'>
                <Container className='container'>
                    <h4>Our Comprehensive EHS System Includes</h4>
                    <Grid container justifyContent={'space-between'}>
                        <Grid size={{ xs: 6, md: 5 }}>
                            <img src={EHSSystem} alt='' className='w-100 thumb' />
                        </Grid>
                        <Grid size={{ xs: 6, md: 6.5 }}>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                >
                                    Seven Layer Safety System
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>
                                        Ensuring comprehensive safety measures at every level of our operations.
                                    </p>                        
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel2-content"
                                    id="panel2-header"
                                >
                                    Effluent Treatment Plant (ETP)
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>
                                        Maintaining compliance with Zero Liquid Discharge (ZLD) standards for responsible wastewater management.
                                    </p>                        
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    Enhancing Safety Awareness
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>
                                        All staff, including contractors, receive education at entry gates. EHS Policy translated into vernacular languages and displayed prominently. Daily safety oath reinforces site safety culture.
                                    </p>                        
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    Carbon Footprint Reduction
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>
                                        Implementing initiatives to reduce emissions and minimize environmental impact.
                                    </p>                        
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    Regular Training Sessions
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>
                                        Continuous improvement through ongoing education and skill development for our workforce.
                                    </p>                        
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    aria-controls="panel3-content"
                                    id="panel3-header"
                                >
                                    Annual Health Check-ups
                                </AccordionSummary>
                                <AccordionDetails>
                                    <p>
                                        Prioritizing employee well-being with regular health assessments to ensure a healthy and safe workplace.
                                    </p>                        
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='environment'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Reward} alt='' />
                                </div>
                                <h4>Award Recognitions</h4>
                                <p>Ensuring Received the State Level Best Company Award from Karnataka State Factories and Boiler in 2022. Also, honored with the State Level Best Safety Worker Award from Karnataka State Safety Institute, ranked #1 in 2019 and #2 in 2020 & 2022. Safety measures at every level of our operations.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Building} alt='' />
                                </div>
                                <h4>Sustainable Manufacturing Practices</h4>
                                <p>KOPL prioritizes process optimization, adopting energy-saving measures and eco-friendly alternatives. Its state-of-the-art ETP ensures zero discharge, while agro-based briquettes replace furnace oil, reducing emissions. Solar panels further enhance sustainability by generating electricity for manufacturing operations.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Shield} alt='' />
                                </div>
                                <h4>Ongoing Safety Culture</h4>
                                <p>Monthly 2-hour safety training covers GMP, QA, and environmental topics. External agencies provide fire safety training. Regular mock drills follow SOPs. Plant employees undergo routine health checkups. Achieved 5th place in Regional Safety Quiz 2018. No major fire incidents in the last 5 years due to the absence of inflammable solvents.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={leaf} alt='' />
                                </div>
                                <h4>Green Technology Innovations</h4>
                                <p>KOPL pioneers eco-friendly processes, notably improving Kopirox production to reduce solvents and water usage, and adopting biotransformation for emollient production. Advantages include dry reactions, single-step processes, and zero discharge. Initiatives encompass stack monitoring, VOC and soil/water analysis, licensed solvent storage, and conservation efforts like rainwater harvesting and solar power.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div> */}
            <div className='happy-team'>
                <Container className='container'>
                    <h5>Our Teams are Happy & Healthy</h5>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 8 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='user-pic'>
                                <img src={User1} alt='' />
                            </div>
                            <p>"Annual health check-ups and regular training sessions demonstrate Kumar Organic's commitment to employee safety and well-being. It's a reassuring aspect of working with them."</p>
                            <span>Rishika S</span>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='user-pic'>
                                <img src={User2} alt='' />
                            </div>
                            <p>At Kumar Organic Products Limited, the working culture thrives on collaboration and inclusivity, promoting creativity and innovation. Employees enjoy competitive salaries, comprehensive health benefits, and opportunities for career growth through ongoing training and development programs. The company's emphasis on sustainability and ethical practices fosters a sense of pride and purpose among its workforce.</p>
                            <span>Savina S</span>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='user-pic'>
                                <img src={User3} alt='' />
                            </div>
                            <p>"The safety culture at Kumar Organic is exceptional. From the moment I stepped onto the site, I felt reassured by the comprehensive safety measures and protocols in place."</p>
                            <span>Ramesh V</span>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default ManufacturingUnitsTemplate