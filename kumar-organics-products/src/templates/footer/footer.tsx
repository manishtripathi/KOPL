import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { Logo, FooterBg, ContactTag } from '../../helpers/constant/imageUrl'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded'
import XIcon from '@mui/icons-material/X'
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram'
import AtomButton from '../../atoms/button/button'
import AtomLink from '../../atoms/link/link'
import './footer.scss'

const FooterTemplate = () => {
    const navigate = useNavigate();
    return (
        <div className="footer">
            <img src={FooterBg} alt='' className='animated-pattern' /> 
            <Container className='container'>
                <Grid container justifyContent="space-between">
                    <Grid size={{ xs: 12, md: 3 }} className="mb-10 mb-md-0">
                        <img src={Logo} alt='' className='mb-6' /> 
                        <h5>About Us</h5>
                        <p>Kumar Organic Products Limited is a leading specialty ingredient manufacturing company dedicated to innovation, quality, and sustainability.</p>
                    </Grid>
                    <Grid size={{ xs: 6, md: 2.5 }}>
                        <h5>Departments</h5>
                        <ul>
                            <li>
                                <AtomButton
                                    // onClick={() => navigate("/contact-us")}
                                >
                                    Global Presence
                                </AtomButton>
                            </li>
                            <li>
                                <AtomButton
                                    onClick={() => navigate("/research-centre")}
                                >
                                    Research & Development
                                </AtomButton>
                            </li>
                            <li>
                                <AtomButton>
                                    Manufacturing Units
                                </AtomButton>
                            </li>
                            <li>
                                <AtomButton 
                                    onClick={() => navigate("/careers")}
                                >
                                    Careers At Kumar
                                </AtomButton>
                            </li>
                            <li>
                                <AtomButton
                                    onClick={() => navigate("/sustainability")}
                                >
                                    Sustainability
                                </AtomButton>
                            </li>
                        </ul>
                    </Grid>
                    <Grid size={{ xs: 6, md: 2 }}>
                        <h5>Quick Links</h5>
                        <ul>
                            <li>
                                <AtomButton>Blogs</AtomButton>
                            </li>
                            <li>
                                <AtomButton>
                                    Recent News
                                </AtomButton>
                            </li>
                            <li>
                                <AtomButton
                                    onClick={() => navigate("/investors")}
                                >
                                    Investors
                                </AtomButton>
                            </li>
                            <li>
                                <AtomButton>
                                    Policies
                                </AtomButton>
                            </li>
                            <li>
                                <AtomButton
                                    onClick={() => navigate("/certifications")}
                                >
                                    Certifications
                                </AtomButton>
                            </li>
                        </ul>
                    </Grid>
                    <Grid size={{ xs: 12, md: 2.75 }} className="mt-10 mt-md-0">
                        <h5>Contact</h5>
                        <h6>Usha Krishan Centre,</h6>
                        <p className='pb-4'>819/C, 13th Cross, 7th Block, Near JSS College Circle, Jayanagar, Bengaluru, Karnataka, India. – 560070</p>
                        <h6>
                        <a href='tel:+91-80-41425832'>+91-80-41425832</a>, <a href='tel:+91 80-41525960'>+91 80-41525960</a>
                        </h6>
                        <h6>
                            <a href='mailto:kop@kumarorganic.net'>kop@kumarorganic.net</a>
                        </h6>
                        <ul className='social-icons'>
                            <li>
                                <AtomLink href=''>
                                    <LinkedInIcon />
                                </AtomLink>
                            </li>
                            <li>
                                <AtomLink href=''>
                                    <FacebookRoundedIcon />
                                </AtomLink>
                            </li>
                            <li>
                                <AtomLink href=''>
                                    <XIcon />
                                </AtomLink>
                            </li>
                            <li>
                                <AtomLink href=''>
                                    <InstagramIcon />
                                </AtomLink>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
            <div className='footer-bottom'>
                &copy; 2024 Kumar Organic Products Limited
            </div>
            <div className='contact-us-circle'>
                <img src={ContactTag} alt='' className='mb-6' />
            </div>
        </div>
    )
} 

export default FooterTemplate