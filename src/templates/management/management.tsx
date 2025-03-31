import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material'
import { Amardeep, kkSingh, Udayan, Unnayan, Sharath, SNSingh, Deepak, KSRajanadam, Shubra } from '../../helpers/constant/imageUrl'
import AtomLink from '../../atoms/link/link';
import './management.scss'

const ManagementTemplate = () => { 
    return (
        <div className='management'>
            <div className='gradient-section'>
                <Container className='container'>
                    <div className='pattern'></div>
                    <h1>Board Of Directors</h1>
                    <p>At Kumar Organic Products Limited, our Board of Directors brings together a wealth of experience, expertise, and leadership. Each member plays a crucial role in guiding our strategic direction and ensuring our continued success. With diverse backgrounds in various industries, our board members provide invaluable insights and governance, driving innovation and excellence across our organization.</p>
                </Container>
            </div>
            <div className='management-info'>
                <Container className='container'>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={kkSingh} alt='' className='pic' />
                                <h4>KK Singh</h4>
                                <h5>CHAIRMAN</h5>
                                <p>Mr. Krishan Kumar Singh, with over 55 years of manufacturing experience, plays a pivotal role at Kumar Organic Products Limited. He oversees company finances, international policies, compliance, and cost control. Actively engaged in strategic initiatives, Mr. Singh champions corporate citizenship, emphasizing environmental sustainability and societal contributions as core values of KOPL.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>KK Singh</h6>
                                    <p>Mr. Krishan Kumar Singh, with over 55 years of manufacturing experience, plays a pivotal role at Kumar Organic Products Limited. He oversees company finances, international policies, compliance, and cost control. Actively engaged in strategic initiatives, Mr. Singh champions corporate citizenship, emphasizing environmental sustainability and societal contributions as core values of KOPL.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Udayan} alt='' className='pic' />
                                <h4>Udayan Kumar Singh</h4>
                                <h5>MANAGING DIRECTOR</h5>
                                <p>Mr. Udayan Kumar Singh, founder of Kumar Organic Products Limited, is a seasoned technocrat with over 35 years of industry experience. He oversees key administrative functions, including R&D, project management, marketing, financial management, product strategy, CSR, and employee policies. Committed to people development, Mr. Singh plays a crucial role in strengthening management teams to maximize profitability and efficiency.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>Udayan Kumar Singh</h6>
                                    <p>Mr. Udayan Kumar Singh, founder of Kumar Organic Products Limited, is a seasoned technocrat with over 35 years of industry experience. He oversees key administrative functions, including R&D, project management, marketing, financial management, product strategy, CSR, and employee policies. Committed to people development, Mr. Singh plays a crucial role in strengthening management teams to maximize profitability and efficiency.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Unnayan} alt='' className='pic' />
                                <h4>Unnayan Kumar Singh</h4>
                                <h5>JOINT DIRECTOR</h5>
                                <p>With 27 years of industry experience, Mr. Unnayan Kumar Singh, Joint Managing Director of Kumar Organic Products Limited, brings exceptional leadership and strategic acumen. He oversees financial affairs, key administrative functions, manufacturing units, and cost control policies, ensuring market competitiveness and robust financial management, significantly contributing to the organization's success.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>Unnayan Kumar Singh</h6>
                                    <p>With 27 years of industry experience, Mr. Unnayan Kumar Singh, Joint Managing Director of Kumar Organic Products Limited, brings exceptional leadership and strategic acumen. He oversees financial affairs, key administrative functions, manufacturing units, and cost control policies, ensuring market competitiveness and robust financial management, significantly contributing to the organization's success.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={SNSingh} alt='' className='pic' />
                                <h4>S N Singh</h4>
                                <h5>DIRECTOR</h5>
                                <p>With over 36 years of industry experience, Mr. S.N. Singh manages resource planning, risk identification, and compliance with GMP and quality, safety, and environmental standards. He oversees project assessment, business process re-engineering, and gap analysis initiatives, supporting smooth operations in the Production, R&D, and QC Departments.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>S N Singh</h6>
                                    <p>With over 36 years of industry experience, Mr. S.N. Singh manages resource planning, risk identification, and compliance with GMP and quality, safety, and environmental standards. He oversees project assessment, business process re-engineering, and gap analysis initiatives, supporting smooth operations in the Production, R&D, and QC Departments.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Sharath} alt='' className='pic' />
                                <h4>Sharath Chandra</h4>
                                <h5>DIRECTOR FINANCE</h5>
                                <p>With over 32 years of experience as a Chartered Accountant, Mr. Sharath brings extensive expertise to his role. Formerly KOPL’s CFO (2015-2019), he joined the board as a whole-time director in August 2019. He oversees financial accounting, taxation, audits, financial reporting, and ERP implementation to enhance real-time data processing and decision-making.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>Sharath Chandra</h6>
                                    <p>With over 32 years of experience as a Chartered Accountant, Mr. Sharath brings extensive expertise to his role. Formerly KOPL’s CFO (2015-2019), he joined the board as a whole-time director in August 2019. He oversees financial accounting, taxation, audits, financial reporting, and ERP implementation to enhance real-time data processing and decision-making.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Deepak} alt='' className='pic' />
                                <h4>Deepak Rasiklal Parikh</h4>
                                <h5>INDEPENDENT DIRECTOR</h5>
                                <p>Deepak Parikh, Ph.D., is a seasoned global C-suite executive with over 30 years in chemicals and materials industries. He has led $5Bn P&Ls and 25K employees at DuPont, Clariant, and Dow. Currently, he advises Petronas Chemical Group and is an Operating Partner at Advent International. Dr. Parikh holds 45 US patents and a Ph.D. in Materials Science & Engineering.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>Deepak Rasiklal Parikh</h6>
                                    <p>Deepak Parikh, Ph.D., is a seasoned global C-suite executive with over 30 years in chemicals and materials industries. He has led $5Bn P&Ls and 25K employees at DuPont, Clariant, and Dow. Currently, he advises Petronas Chemical Group and is an Operating Partner at Advent International. Dr. Parikh holds 45 US patents and a Ph.D. in Materials Science & Engineering.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={KSRajanadam} alt='' className='pic' />
                                <h4>KS Rajanadam</h4>
                                <h5>INDEPENDENT DIRECTOR</h5>
                                <p>Dr. K.S. Rajanandam is a Chemical Engineer with over 35 years in academia and consultancy. He holds degrees from Andhra University and a Ph.D. from IISc, Bangalore. He served as Principal of M.S. Ramaiah Institute of Technology and has published extensively. He was President of the IISc Alumni Association (2020-2022) and is a fellow of the Institution of Engineers (India) and IIChE.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>KS Rajanadam</h6>
                                    <p>Dr. K.S. Rajanandam is a Chemical Engineer with over 35 years in academia and consultancy. He holds degrees from Andhra University and a Ph.D. from IISc, Bangalore. He served as Principal of M.S. Ramaiah Institute of Technology and has published extensively. He was President of the IISc Alumni Association (2020-2022) and is a fellow of the Institution of Engineers (India) and IIChE.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Shubra} alt='' className='pic' />
                                <h4>Shubra Singh</h4>
                                <h5>WOMEN DIRECTOR</h5>
                                <p>Mrs. Shubhra Singh, a distinguished graduate of Lady Shri Ram College for Women, is highly experienced in women empowerment initiatives. She holds directorships in multiple companies and has made significant contributions to the corporate management of the Kumar Group since its inception.</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>Shubra Singh</h6>
                                    <p>Mrs. Shubhra Singh, a distinguished graduate of Lady Shri Ram College for Women, is highly experienced in women empowerment initiatives. She holds directorships in multiple companies and has made significant contributions to the corporate management of the Kumar Group since its inception.</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <img src={Amardeep} alt='' className='pic' />
                                <h4>Amardeep Singh</h4>
                                <h5>COMPANY SECRETARY & COMPLIANCE OFFICER</h5>
                                <p>With 7 years of experience as a Company Secretary, Mr. Amardeep Singh ensures smooth corporate operations and compliance with regulatory frameworks. Committed to integrity, he aims to elevate our company's corporate governance standards</p>
                                <AtomLink 
                                    href=""
                                    className='read-more'
                                >
                                    READ MORE
                                </AtomLink>
                                <div className='overlay'>
                                    <h6>Amardeep Singh</h6>
                                    <p>With 7 years of experience as a Company Secretary, Mr. Amardeep Singh ensures smooth corporate operations and compliance with regulatory frameworks. Committed to integrity, he aims to elevate our company's corporate governance standards</p>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default ManagementTemplate