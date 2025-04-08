import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import { useNavigate } from "react-router-dom";
import AtomButton from '../../atoms/button'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import AtomTextField from '../../atoms/textField'
import AtomLink from '../../atoms/link/link'
import { CirclePatternTop, ChevronRight, Facebook, Twitter, Linkedin } from '../../helpers/constant/imageUrl'
import './careers.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/storage/store';
import { displayPartsToString } from 'typescript';
import { fetchCareer } from '../../redux/slice/configSlice';

const CareerTemplate = () => { 
    const navigate = useNavigate();
    const breakPointIpad = useMediaQuery(`(${BREAK_POINT_CONSTANTS.IPAD})`)
    const {careers} = useSelector((state:RootState)=>state.config);
    const dispatch = useDispatch<AppDispatch>();
    const [currentTab, setCurrentTab] = useState(0)
    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setCurrentTab(newValue)
    }
    useEffect(()=>{
        dispatch(fetchCareer());
    },[dispatch])
    return (
        <div className="careers">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>Join Our Team</h1>
                    <p>We offer a dynamic and inclusive work environment where innovation and professional growth thrive. Explore our career opportunities and contribute to our journey towards excellence and sustainability.</p>
                    <AtomButton 
                        variant='contained' 
                        color='primary' 
                        size={breakPointIpad ? 'large' : 'small'}
                        endIcon={
                            <img src={ChevronRight} alt='' />
                        }                                   
                    >
                        CURRENT JOB OPENINGS
                    </AtomButton>
                </Container>
            </div>
            <div className='job-opening'>
                <Container className='container'>
                    <div className='form-section'>
                        <div className='form'>
                            <Grid container spacing={{ xs: 1.26 }}>
                                <Grid size={{ xs: 12, md: 3.4, lg: 3.5 }}>
                                    <AtomTextField name="" placeholder='Search' />
                                </Grid>
                                <Grid size={{ xs: 12, md: 'auto' }}>
                                    <div className='divider'></div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3.4, lg: 3.5 }}>
                                    <Select
                                        id="Level"
                                        displayEmpty
                                        renderValue={(selected: any) => {
                                            if (!selected) {
                                              return <span>Level</span>;
                                            }     

                                            return selected;
                                        }}
                                    >
                                        <MenuItem value={'Entry Level'}>Entry Level</MenuItem>
                                        <MenuItem value={'Fresher of 1 to 2 years'}>Fresher of 1 to 2 years</MenuItem>
                                        <MenuItem value={'2+ Years of Experience'}>2+ Years of Experience</MenuItem>
                                        <MenuItem value={'4+ Years of Experience'}>4+ Years of Experience</MenuItem>
                                        <MenuItem value={'6+ Years of Experience'}>6+ Years of Experience</MenuItem>
                                        <MenuItem value={'8+ Years of Experience'}>8+ Years of Experience</MenuItem>
                                        <MenuItem value={'More than 10 Years of Experience'}>More than 10 Years of Experience</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid size={{ xs: 12, md: 'auto' }}>
                                    <div className='divider'></div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 3.4, lg: 3.5 }}>
                                    <Select
                                        id="JobType"
                                        displayEmpty
                                        renderValue={(selected: any) => {
                                            if (!selected) {
                                              return <span>Job Type</span>;
                                            }     

                                            return selected;
                                        }}
                                    >
                                        <MenuItem value={'Full Time'}>Full Time</MenuItem>
                                        <MenuItem value={'Permanent'}>Permanent</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid size={{ xs: 12, md: 'auto' }}>
                                    <AtomButton 
                                        variant='contained' 
                                        color='primary' 
                                        fullWidth={breakPointIpad ? false : true}                             
                                    >
                                        go
                                    </AtomButton>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                    <Grid container spacing={{ xs: 1.26, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            {(Array.isArray(careers) && careers?.length>0) ?  (careers)?.map((career:any)=>{
                                return(
                                    <div className='blue-card'>
                                    <div className='experience'>{career.experienceLevel}</div>
                                    <h4>{career.jobTitle}</h4>
                                    <p>{career.jobDescription}</p>
                                    <h5>Job Type</h5>
                                    <p>{career.jobType}</p>
                                    <AtomButton 
                                        variant = {'outlined'}
                                        size = {'small'}
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        LEARN MORE
                                    </AtomButton>
                                </div> 
                                )
                            }) :
                            <div>No Current careers opening</div>}
                            
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience yellow'>Fresher of 1 to 2 years</div>
                                <h4>Regulatory Affairs Executive</h4>
                                <p>As a Regulatory Affairs Executive, you will be responsible for overseeing all regulatory aspects of our company's products and operations.</p>
                                <h5>Job Type</h5>
                                <p>Full Time</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    LEARN MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience'>Entry Level</div>
                                <h4>Marketing Associate</h4>
                                <p>The Marketing Executive will be responsible for trade show management and execution, marketing material coordination, and digital marketing research and coordination.</p>
                                <h5>Job Type</h5>
                                <p>Full Time</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    Permanent
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience green'>4 to 5 years in International Sales</div>
                                <h4>Sales Executive LATAM Region</h4>
                                <p>Accountability for achieving the KOPL – South America Regional targets KOPL products and distribution products financial performance (P&L) pricing, customer/products portfolio management, it involves working with global sales.</p>
                                <h5>Job Type</h5>
                                <p>Full Time</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    LEARN MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience green'>5 to 7 years Experience</div>
                                <h4>Business Manager</h4>
                                <p>Developing and driving sales of the specialty ingredients / Pharma Actives / Food Additives used in cosmeceutical, personal care, Health & Nutraceuticals industries for the products manufactured by Kumar Organic Products Ltd.</p>
                                <h5>Job Type</h5>
                                <p>Permanent</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    LEARN MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience green'>5 to 7 years in International Sales</div>
                                <h4>Business Development Executive</h4>
                                <p>Developing and driving sales of the specialty ingredients / Pharma Actives / Food Additives used in cosmeceutical, personal care, Health & Nutraceuticals industries for the products manufactured by Kumar Organic Products Ltd.</p>
                                <h5>Job Type</h5>
                                <p>Full Time</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    LEARN MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience yellow'>1 to 2 years Singapore Office Applied Lab</div>
                                <h4>Chemist</h4>
                                <p>Chemists often work in research and development, where they investigate the properties, composition, and reactions of substances. This can involve conducting experiments, analyzing data, and interpreting results to develop new products or improve existing ones.</p>
                                <h5>Job Type</h5>
                                <p>Permanent</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    LEARN MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience'>Entry Level</div>
                                <h4>Sales Executive</h4>
                                <p>Developing and driving sales of the specialty ingredients / Pharma Actives / Food Additives used in cosmeceutical, personal care, Health & Nutraceuticals industries for the products manufactured by KOPL India and outsourced by KOPL.</p>
                                <h5>Job Type</h5>
                                <p>Full Time</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    LEARN MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='blue-card'>
                                <div className='experience green'>4 to 5 years in International Sales</div>
                                <h4>Sales Executive LATAM Region</h4>
                                <p>Accountability for achieving the KOPL – South America Regional targets KOPL products and distribution products financial performance (P&L) pricing, customer/products portfolio management, it involves working with global sales</p>
                                <h5>Job Type</h5>
                                <p>Full Time</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    LEARN MORE
                                </AtomButton>
                            </div>
                        </Grid>
                    </Grid>
                    <div className='text-center mt-10'>
                        <AtomButton 
                            variant = {'outlined'}
                            size = {'large'}
                            endIcon={
                                <img src={ChevronRight} alt='' />
                            }
                        >
                            VIEW MORE
                        </AtomButton>
                    </div>
                </Container>
            </div>
            <div className='get-in-touch'>
                <Container className='container'>
                    <Grid container alignItems={'center'}>
                        <Grid size={{ xs: 12, md: 5 }} className="column">
                            <h5>Get in touch</h5>
                            <div className='mt-8'>
                                <h6>COMPANY EMAIL</h6>
                                <AtomLink 
                                    href="mailto:kop@kumarorganic.net"
                                >
                                    kop@kumarorganic.net
                                </AtomLink>
                            </div>
                            <div className='mt-8'>
                                <h6>HR SUPPORT</h6>
                                <AtomLink 
                                    href="mailto:kop@kumarorganic.net"
                                >
                                    hr1@kumarorganic.net
                                </AtomLink>
                            </div>
                            <div className='mt-8'>
                                <ul className='social'>
                                    <li>
                                        <AtomLink 
                                            href=""
                                        >
                                            <img src={Facebook} alt='' />
                                        </AtomLink>
                                    </li>
                                    <li>
                                        <AtomLink 
                                            href=""
                                        >
                                            <img src={Twitter} alt='' />
                                        </AtomLink>
                                    </li>
                                    <li>
                                        <AtomLink 
                                            href=""
                                        >
                                            <img src={Linkedin} alt='' />
                                        </AtomLink>
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <div className='white-card'>
                                <Grid container spacing={{ xs: 2 }}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomTextField name="First Name" placeholder='First Name' />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomTextField name="Product" placeholder='Product' />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomTextField name="Phone Number" placeholder='Phone Number' />
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomTextField name="Email Address" placeholder='Email Address' />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <Select
                                            id="JobType"
                                            displayEmpty
                                            renderValue={(selected: any) => {
                                                if (!selected) {
                                                return <span>Select Position</span>;
                                                }     

                                                return selected;
                                            }}
                                        >
                                            <MenuItem value={'Development'}>Development</MenuItem>
                                        </Select>
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <AtomTextField name="Message" multiline={true} minRows={4} placeholder='Message' />
                                    </Grid>
                                </Grid>
                                <div className='mt-8 text-center'>
                                    <AtomButton 
                                        variant='contained' 
                                        color='primary' 
                                        endIcon={
                                            <img src={ChevronRight} alt='' />
                                        }
                                    >
                                        Request a call
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default CareerTemplate