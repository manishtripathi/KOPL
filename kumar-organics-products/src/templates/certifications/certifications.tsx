import React, { useState } from 'react'
import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import AtomTabs from '../../atoms/tabs/tabs'
import AtomTabPanel from '../../atoms/tabs/tabPanel'
import AtomLink from '../../atoms/link/link'
import AtomButton from '../../atoms/button'
import { CirclePatternTop, certification1, certification2, certification3, certification4, certification5, certification6, certification7, certification8, certification9, certification10, DialogArrow, ChevronRight } from '../../helpers/constant/imageUrl'
import './certifications.scss'

const CertificationsTemplate = () => { 
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState(0)
    const handleChange = (event: React.SyntheticEvent<Element, Event>, newValue: number) => {
        setCurrentTab(newValue)
    }
    return (
        <div className="certifications">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>Standards & Certifications</h1>
                </Container>
            </div>
            <div className='all-certifications'>
                <Container className='container'>
                    <Grid container rowSpacing={{ xs: 3, sm: 2, md: 6 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>KOPSOVA 105 IP</h3>
                                        <p>Our scientists secured a Patent from the Government of India's Intellectual Property India for Kopsova 105 (Isosorbide Dithioglycolate), a novel depilatory active, and its unique preparation process</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification1} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>GMP OF VU</h3>
                                        <p>GMP for Cosmetic Ingredients All units</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification2} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>ISO 9001: 2015</h3>
                                        <p>Management System Standards, ensuring quality and environmental compliance.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification3} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>AQUA PRODUCTS IP</h3>
                                        <p>Patent Awarded for Revolutionary Aqua Products! Kumar Organic Products celebrates another patented innovation from its Research & Innovation Team.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification4} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>ISO 14001: 2015</h3>
                                        <p>Management System Standards, ensuring quality and environmental compliance</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification5} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>FICCI</h3>
                                        <p>FICCI awards honor excellence in business, innovation, entrepreneurship, and social responsibility across various sectors in India.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification6} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>COLGATE-PALMOLIVE INDIA</h3>
                                        <p>Kumar Organic: Recognized by Colgate-Palmolive India as a trusted triclosan supplier</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification7} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>USFDA</h3>
                                        <p>USFDA inspected facilities across all units</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification8} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>REACH</h3>
                                        <p>EU Region REACH-Registered Products</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification9} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='white-card'>
                                <Grid container alignContent={'center'}>
                                    <Grid size={{ xs: 6 }}>
                                        <h3>SME GAURAV AWARD</h3>
                                        <p>The "SME Gaurav Award" is a prestigious honor recognizing excellence and innovation among Small and Medium Enterprises (SMEs) in various sectors.</p>
                                    </Grid>
                                    <Grid size={{ xs: 6 }} className="text-right">
                                        <img src={certification10} alt='' />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default CertificationsTemplate