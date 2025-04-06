import { Container, toggleButtonClasses, useMediaQuery } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { useState } from "react";
import { CirclePatternTop, ChevronRight, Headquarters, Call, Mail, Clock, Bangalore, NorthIndia, WestIndia, USA, EastIndia, UK, Switzerland, Germany, Singapore } from '../../helpers/constant/imageUrl'
import AtomTextField from '../../atoms/textField'
import AtomButton from '../../atoms/button'
import AtomModal from '../../atoms/modal'
import AtomLink from '../../atoms/link/link'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './contactUs.scss'

const ContactUsTemplate = () => {
    const breakPointIpad = useMediaQuery(`(${BREAK_POINT_CONSTANTS.IPAD})`)
    const [open, setOpen] = useState<boolean>(false)    
    const toggleHandler = () => {
        setOpen(!open)
    }  
    const showModalHandler = () => {
        setOpen(true)
    }  
    return (
        <div className="contact-us">
            <AtomModal
                isOpen={open}
                onClose={toggleHandler}
                className='schedule-meeting'
            >
                <h3>Schedule a meeting</h3>
                <Grid container spacing={{ xs: 2 }}>
                    <Grid size={{ xs: 12 }}>
                        <AtomTextField name="Name" placeholder='Name*' />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <AtomTextField name="Company" placeholder='Company*' />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <AtomTextField name="Phone Number" placeholder='Phone Number*' />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <AtomTextField name="Email Address" placeholder='Email Address*' />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <AtomTextField name="State" placeholder='State*' />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <AtomTextField name="Country" placeholder='Country*' />
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Select
                            renderValue={() => 'Placeholder'}                        
                        >
                            <MenuItem value={1}>HPCI</MenuItem>
                            <MenuItem value={2}>PCHI</MenuItem>
                            <MenuItem value={3}>Incosmetics Global</MenuItem>
                            <MenuItem value={4}>NYSCC</MenuItem>
                            <MenuItem value={5}>Other</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </AtomModal>
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <Grid container justifyContent="center">
                        <Grid size={{ xs: 12, sm: 8 }}>
                            <h1>Contact Us</h1>
                            <p>Schedule a meeting with us at your convenience and let's discuss how we can collaborate to achieve your goals.</p>
                            <div className='text-center'>
                                <AtomButton 
                                    variant='contained' 
                                    color='primary' 
                                    size={breakPointIpad ? 'large' : 'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                    onClick={showModalHandler}                                    
                                >
                                    SCHEDULE A MEETING WITH US
                                </AtomButton>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div> 
            <div className='first-step'>
                <Container className='container'>
                    <h2>
                        Take the first step 
                        <span>We will take care for the rest</span>
                    </h2>
                    <Grid container justifyContent="center">
                        <Grid size={{ xs: 12, sm: 8, md: 7.5 }}>
                            <div className='white-card'>
                                <Grid container spacing={{ xs: 2 }}>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <AtomTextField name="First Name" placeholder='First Name' />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <AtomTextField name="Product" placeholder='Product' />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <AtomTextField name="Phone Number" placeholder='Phone Number' />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <AtomTextField name="Email Address" placeholder='Email Address' />
                                    </Grid>
                                    <Grid size={{ xs: 12 }}>
                                        <AtomTextField name="Message" multiline={true} minRows={4} placeholder='Message' />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <AtomTextField name="Delivery Location" placeholder='Delivery Location (Place)' />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 6 }}>
                                        <AtomTextField name="Current Location" placeholder='Current Location' />
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
            <div className='our-offices'>
                <Container className='container'>
                    <h4>Our Offices</h4>
                    <Grid container justifyContent="center" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12 }}>
                            <div className='card full-section'>
                                <div className='hover-effect'></div>
                                <Grid container justifyContent="center" spacing={{ xs: 5, md: 2 }}>
                                    <Grid size={{ xs: 12, sm: 6, md: 5 }}>
                                        <div className='icon-holder'>
                                            <img src={Headquarters} alt='' />
                                        </div>
                                        <h5>Corporate Headquarters</h5>
                                        <p>Usha Krishan Centre, 819/C, 13th Cross, 7th Block, Near JSS College Circle, Jayanagar, Bengaluru - 560070 Karnataka, India</p>
                                        <ul>
                                            <li className='tel'>
                                                <img src={Call} alt='' className='mt-1' />
                                                <div>
                                                    <span className='d-flex'>
                                                        <AtomLink href="tel:+918041425832" className='mr-1'>+ 91-80-41425832</AtomLink> /
                                                    </span>
                                                    <span className='d-flex'>
                                                        <AtomLink href="tel:+918041525960" className='mr-1'>+ 91-80-41525960</AtomLink> /
                                                    </span>                                        
                                                </div>
                                            </li>
                                            <li>                                                
                                                <AtomLink href="">
                                                    <img src={Mail} alt='' />
                                                    kop@kumarorganic.net
                                                </AtomLink>
                                            </li>
                                            <li>                                                
                                                <img src={Clock} alt='' />
                                                09:30-18:30 IST
                                            </li>
                                        </ul>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6, md: 7 }}>
                                        <div className="mapouter"> 
                                            <div className="gmap_canvas">
                                                <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Kumar+Organic+Products+Limited+Usha+Krishna+Centre%2C+819%2FC%2C+13th&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Bangalore} alt='' />
                                </div>
                                <h5>KOP Research Centre Pvt. Ltd.</h5>
                                <p>Plot No. 36-B, Road No. 3 & 5, Jigani Industrial Area, Anekal Taluk, Bengaluru - 560 105 Karnataka, India</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+918029525376" className='mr-1'>+ 91-80-29525376</AtomLink> /
                                            </span>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+918029525196" className='mr-1'>+ 91-80-29525196</AtomLink> /
                                            </span>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+918029525733" className='mr-1'>+ 91-80-29525733</AtomLink>
                                            </span>                                         
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        10:30-18:30 IST
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={NorthIndia} alt='' />
                                </div>
                                <h5>North India- Gurugram Office</h5>
                                <p>No: 112, First Floor, "Star Mall" Sector 30,NH 8, Gurugram - 122001 Haryana, India</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+911244734331" className='mr-1'>+91-124 - 4734331</AtomLink>
                                            </span>                                        
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        09:30-18:30 IST
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={WestIndia} alt='' />
                                </div>
                                <h5>West India - Baroda Kumar Organic Products Limited</h5>
                                <p>Plot No. 379, Canal Road, Mairti Marg, Village Luna, Taluk, Padra, Vadodara - 391440 Gujarat, India</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:7069110469" className='mr-1'>7069110469</AtomLink>
                                            </span>                                        
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        08:30 - 17:30 IST
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={USA} alt='' />
                                </div>
                                <h5>USA Office</h5>
                                <p>Suite 221, 409 Joyce Kilmer Avenue, New Brunswick NJ 08901</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+17326622651" className='mr-1'>+1 7326622651</AtomLink>
                                            </span>                                        
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        08:00 - 17:00 EST
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={EastIndia} alt='' />
                                </div>
                                <h5>East India - Patna Office</h5>
                                <p>Kumar Bhawan Buddha Murthy New Area Kadam Kuan, Patna: 800003, Bihar, India</p>
                                <ul>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        09:30-18:30 IST
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={UK} alt='' />
                                </div>
                                <h5>UK Office</h5>
                                <p>Lower Ground Floor 20 Grosvenor Place, London SW1X 7HN</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:00441582437119" className='mr-1'>0044 1582 437 119</AtomLink>
                                            </span>                                        
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        08:30 - 17:00 GMT
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Switzerland} alt='' />
                                </div>
                                <h5>Switzerland Office</h5>
                                <p>Birsigstrasse 2, CH 4054 Basel, Switzerland</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+41(0)613179315" className='mr-1'>+41 (0) 613179315</AtomLink>
                                            </span>                                        
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        08:30 - 17:00 CET
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Germany} alt='' />
                                </div>
                                <h5>Germany Office</h5>
                                <p>C/O Regus Business Centre Hamburg AltonaOttenser Hauptstraße 2-6 (Entrance: Hahnenkamp 1) 22765 Hamburg, Germany</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+49(0)40822174060" className='mr-1'>+49(0) 40 822 174 060</AtomLink> /
                                            </span>  
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+49(0)40822174061" className='mr-1'>+49(0) 40 822 174 061</AtomLink>
                                            </span>                                        
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        09:00 - 17:00 CET
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='card'>
                                <div className='hover-effect'></div>
                                <div className='icon-holder'>
                                    <img src={Singapore} alt='' />
                                </div>
                                <h5>Singapore Office</h5>
                                <p>Map : 41, Science Park Road The Gemini, # 04 - 07 C Singapore- 117610</p>
                                <ul>
                                    <li className='tel'>
                                        <img src={Call} alt='' className='mt-1' />
                                        <div>
                                            <span className='d-flex'>
                                                <AtomLink href="tel:+6531571525" className='mr-1'>+65 31571525</AtomLink>
                                            </span>                                        
                                        </div>
                                    </li>
                                    <li>                                                
                                        <img src={Clock} alt='' />
                                        08:30 - 17:30 SST
                                    </li>
                                </ul>
                            </div>
                        </Grid>
                    </Grid>
                </Container>             
            </div>        
        </div>
    )
} 

export default ContactUsTemplate