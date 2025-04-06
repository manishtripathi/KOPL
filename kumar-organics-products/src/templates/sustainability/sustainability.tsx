import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { greenManufacturingPractices, resourceEfficiency, wasteManagement, wasteManagement2, biodiversityInitiatives, tigerAdoption, leaf, Briefcase, Development, PolioCamp, EducationInfrastructure, EnvironmentalAwareness, YogaDressSponsorship, WaterPumpSponsorship, Vision, Drop, BinRecycle } from '../../helpers/constant/imageUrl'
import './sustainability.scss'

const SustainabilityTemplate = () => { 
    return (
        <div className="sustainability">
            <div className="gradient-section">
                <Container className='container'>
                    <div className='pattern'></div>
                    <h1>Our Commitment to Sustainability</h1>
                    <p>At Kumar Organic Products Limited, sustainability is at the heart of everything we do. We are committed to ecological responsibility, economic growth, and social well-being. Our innovative approaches and dedicated efforts ensure that we create a positive impact on the environment and society while driving our business forward.</p>
                </Container>
            </div>
            <div className='category-section'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='category'>
                                <div className='thumb'>
                                    <img src={greenManufacturingPractices} alt='' />
                                    <div className='overlay'>Zero Discharge Facility and Fuel Replacement</div>
                                </div>
                                <div className='white-card'>
                                    <h3>Green Manufacturing Practices</h3>
                                    <p><b>Zero Discharge Facility and Fuel Replacement:</b> Green Manufacturing Practices</p>
                                    <p><b>Zero Discharge Facility and Fuel Replacement:</b> We have implemented state-of-the-art Environmental Treatment Plants (ETP) and eco-friendly boiler systems to ensure zero discharge. By using agro-based briquettes instead of furnace oil for steam generation, we significantly reduce emissions.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='category'>
                                <div className='thumb'>
                                    <img src={resourceEfficiency} alt='' />
                                    <div className='overlay'>Energy-saving Production Processes</div>
                                </div>
                                <div className='white-card'>
                                    <h3>Resource Efficiency</h3>
                                    <p><b>Energy-saving Production Processes:</b> Our innovative techniques, such as the improved Kopirox production process, have significantly reducedsolvent and water usage while also cutting down on energy consumption. This innovation has earned usrecognition, including the Manufacturing Process Innovation Award from FICCI.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='category'>
                                <div className='thumb'>
                                    <img src={wasteManagement} alt='' />
                                    <div className='overlay'>Bio-transformation</div>
                                </div>
                                <div className='white-card'>
                                    <h3>Waste Management</h3>
                                    <p><b>Bio-transformation</b> We've embraced bio-transformation methods for producing emollients in cosmetics. This approachminimizes environmental impact by using renewable sources and eliminating the need for solvents,while also simplifying the production process.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='category'>
                                <div className='thumb'>
                                    <img src={wasteManagement2} alt='' />
                                    <div className='overlay'>Bio-transformation</div>
                                </div>
                                <div className='white-card'>
                                    <h3>Waste Management</h3>
                                    <p><b>Bio-transformation</b> We've embraced bio-transformation methods for producing emollients in cosmetics. This approachminimizes environmental impact by using renewable sources and eliminating the need for solvents,while also simplifying the production process.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='category'>
                                <div className='thumb'>
                                    <img src={biodiversityInitiatives} alt='' />
                                    <div className='overlay'>Biodiversity</div>
                                </div>
                                <div className='white-card'>
                                    <h3>Biodiversity Initiatives</h3>
                                    <p>We plant a new tree or sapling for every new member joining the KOPL family, enriching the soil and fostering a sense of responsibility towards our planet.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='category'>
                                <div className='thumb'>
                                    <img src={tigerAdoption} alt='' />
                                    <div className='overlay'>Biodiversity</div>
                                </div>
                                <div className='white-card'>
                                    <h3>Tiger Adoption and Lake Restoration</h3>
                                    <p>We've adopted tigers in various wildlife parks and supported lake restoration projects in Bangalore, contributing to ecological preservation and sustainable development.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='economic-responsibility'>
                <Container className='container'>
                    <h3>Economic Responsibility</h3>
                    <Grid container justifyContent="center" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={leaf} alt='' />
                                </div>
                                <h5>R&D Focus on Natural and Biotech Products</h5>
                                <p>Our R&D efforts focus on creating natural and biotech products that contribute to sustainability. One of our biotech product - KOPGLOW made from lychee peels, showcases our innovation in utilizing waste materials to create high-value, multifunctional skincare ingredients.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Briefcase} alt='' />
                                </div>
                                <h5>Investment in Workforce</h5>
                                <p>We firmly believe in fostering economic growth by investing in our workforce's skills and knowledge. Our Training Center, accredited by the Life Science Sector Skill Development Council under the Prime Minister's Skill Development Program, plays a pivotal role in this endeavor.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Development} alt='' />
                                </div>
                                <h5>Training and Development</h5>
                                <p>We provide ongoing skill enhancement for our employees through internal and external training programs. Our participation in the Registered National Apprenticeship Promotion Scheme ensures continuous technical training opportunities, aiming for each employee to receive two hours of training per month.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='social-responsibility'>
                <Container className='container'>
                    <div className='pattern'></div>
                    <h3>
                        Social Responsibility
                        <span>Community Engagement Initiatives</span>
                    </h3>
                    <Grid container justifyContent="center" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={PolioCamp} alt='' />
                                <h5>Polio Camp Supporting Pulse Polio Camp</h5>
                                <div className='overlay'>
                                    <h6>Polio Camp Supporting Pulse Polio Camp</h6>
                                    <p>We sponsored a vehicle for a Pulse Polio camp in the Jigani area of Bangalore, demonstrating our commitment to healthcare access for all.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={EducationInfrastructure} alt='' />
                                <h5>Improving Education Infrastructure</h5>
                                <div className='overlay'>
                                    <h6>Improving Education Infrastructure</h6>
                                    <p>We've invested in infrastructure improvements, such as building, toilets and providing computers to enhance education facilities in goverments schools.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={EnvironmentalAwareness} alt='' />
                                <h5>Environmental Awareness Programs</h5>
                                <div className='overlay'>
                                    <h6>Environmental Awareness Programs</h6>
                                    <p>Through green nurturing programs in nearby schools, we're fostering environmental consciousness among students, empowering them to become stewards of the planet.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={YogaDressSponsorship} alt='' />
                                <h5>Yoga Dress Sponsorship</h5>
                                <div className='overlay'>
                                    <h6>Yoga Dress Sponsorship</h6>
                                    <p>In partnership with a government school in Hassan, Karnataka, we sponsored yoga dresses for students, promoting holistic well-being.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={WaterPumpSponsorship} alt='' />
                                <h5>Water Pump Sponsorship</h5>
                                <div className='overlay'>
                                    <h6>Water Pump Sponsorship</h6>
                                    <p>We've sponsored water pump sets in villages near Manohar Pond Lake and Luna Village in Baroda, addressing vital needs in rural communities.</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='economic-responsibility'>
                <Container className='container'>
                    <h3>Employee and Community Health</h3>
                    <Grid container justifyContent="center" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Vision} alt='' />
                                </div>
                                <h5>Girl Child Education Sponsorship:</h5>
                                <p>We identify and support meritorious yet financially disadvantaged girl students, ensuring they have the resources to continue their education.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Drop} alt='' />
                                </div>
                                <h5>Blood Donation & Dental Camps</h5>
                                <p>Regular blood donation drives and medical/dental camps are organized for our employees and neighboring communities, prioritizing healthcare access.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={BinRecycle} alt='' />
                                </div>
                                <h5>Swachh Bharat Abhiyan Cleanliness Drive:</h5>
                                <p>We actively participate in cleanliness drives, setting an example for our communities and promoting the vision of a cleaner India</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default SustainabilityTemplate