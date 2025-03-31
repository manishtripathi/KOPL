import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { Briefcase, CirclePatternTop, Call, Pin, Document, Download, WavePattern } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import AtomLink from '../../atoms/link/link';
import './Investors.scss'

const InvestorsTemplate = () => { 
    const navigate = useNavigate();
    return (
        <div className="investors">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>Investors</h1>
                    <p>At Kumar Organic Products Limited, we value our investors as key stakeholders in our journey towards growth and innovation. Our commitment to transparency, robust governance, and sustainable development drives our business strategy and operational excellence. Here, you will find comprehensive information on our financial performance, corporate governance practices, and strategic initiatives. We aim to provide our investors with the insights and data they need to make informed decisions. Thank you for your trust and support in Kumar Organic Products Limited. Together, we are building a prosperous future.</p>
                </Container>
            </div>
            <div className='cin-section'>
                <Container className='container'>
                    <h2>CIN: U85110KA1991PLC012095</h2>
                    <Grid container justifyContent="center">
                        <Grid size={{ xs: 12, sm: 6, md: 6 }}>
                            <p>Reg. Office : Usha Krishna Towers, Plot 36-B, Road No.3 & 5, Jigani Industrial Area, Anekal Taluk Bangalore - 560105, Karnataka, India Tel: +91 080 - 41525960</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='financial-audits'>
                <Container className='container'>
                    <h3>Financial Audits</h3>
                    <Grid container justifyContent="center" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Financial Audit & Annual Return 20-21</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Financial Audit & Annual Return 20-21</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Financial Audit & Annual Return 21-22</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Financial Audit & Annual Return 22-23</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Financial Audit & Annual Return 23-24</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='investor-contact'>
                <div className='pattern'>
                    <img src={WavePattern} alt='' />
                </div>
                <Container className='container'>
                    <Grid container justifyContent="space-between">
                        <Grid size={{ xs: 12, sm: 3 }}>
                            <h5>Investor Contact</h5>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <h6>Mr. Amardeep Singh</h6>
                            <ul>
                                <li>
                                    <div className='icon-holder'>
                                        <img src={Briefcase} alt='' />
                                    </div>
                                    Company Secretary & Compliance Officer, Kumar Organic Products Limited,
                                </li>
                                <li>
                                    <div className='icon-holder'>
                                        <img src={Call} alt='' />
                                    </div>
                                    819/C, Usha Krishna Centre, Jayanagar 7th Block, 13th Cross Rd, Jayanagar, Bengaluru, Karnataka 560082, Karnataka, India.
                                </li>
                                <li>
                                    <div className='icon-holder'>
                                        <img src={Pin} alt='' />
                                    </div>
                                    <div>
                                        E-mail - <AtomLink href="mailto:cs@kumarorganic.net">cs@kumarorganic.net</AtomLink>
                                        <span className='d-block'>Landline Number - <AtomLink href="tel:+91 080- 41525960">+91 080- 41525960</AtomLink> </span>
                                    </div>                                   
                                </li>
                            </ul>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='policies'>
                <Container className='container'>
                    <h6>Policies</h6>
                    <Grid container justifyContent="center" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Whistleblower Policy</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Policy on Sexual Harrassment</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Nomination Remuneration Policy</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>KOPL Annual Action Plan For CSR 2024-25</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>CSR Policy 2024-25</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='icon-holder'>
                                    <img src={Document} alt='' />
                                </div>
                                <h4>Composition of Committee Members</h4>
                                <AtomButton 
                                    endIcon={<img src={Download} alt='' />}
                                >
                                    DOWNLOAD PDF
                                </AtomButton>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default InvestorsTemplate