import { useState } from "react";
import { Container, useMediaQuery } from '@mui/material'
import AtomLink from '../../atoms/link/link'
import Accordion from '@mui/material/Accordion';
import { useNavigate } from "react-router-dom";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Logo, LogoBlack, CaretDown, Dismiss, Search, Humburger } from '../../helpers/constant/imageUrl'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import './header.scss'
import AtomButton from "../../atoms/button";

const HeaderTemplate = ({}) => {
    const navigate = useNavigate();
    const breakPointIpad = useMediaQuery(`(${BREAK_POINT_CONSTANTS.IPAD})`)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const toggleDropdown = (menu: any) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    }
    const handleSearch = () => {
        setIsSearchOpen(true)
    }
    const handleSearchClosed = () => {
        setIsSearchOpen(false)
    } 
    return (
        <>
            {
                !breakPointIpad ? 
                <div className="mobile-header">
                    <AtomLink href="">
                        <img src={Logo} alt='' className="logo" />
                    </AtomLink>
                    <div>
                        <AtomLink href="">
                            <img src={Search} alt='' className='search-ico' />
                        </AtomLink>
                        <AtomLink onClick={() => setIsOpen(!isOpen)} className="ml-6">
                            <img src={Humburger} alt='' />
                        </AtomLink>
                    </div>
                    <div className={isOpen ? "sidebar show" : "sidebar"}>
                        <img src={LogoBlack} alt='' className="ml-6 mb-6" />
                        <AtomLink className="dismiss" onClick={() => setIsOpen(!isOpen)}>
                            <img src={Dismiss} alt='' />
                        </AtomLink>
                        <div className="single-anchor">
                            <AtomButton onClick={() => navigate("/")}>Home</AtomButton>
                        </div>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                WHO WE ARE
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>
                                        <AtomButton onClick={() => navigate("/who-we-are")}>Who we are</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton onClick={() => navigate("/organization")}>Organisation</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton onClick={() => navigate("/manufacturing-units")}>Manufacturing Units</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton onClick={() => navigate("/management")}>Management</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton onClick={() => navigate("/sustainability")}>Sustainability</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton onClick={() => navigate("/investors")}>Investors</AtomButton>
                                    </li>
                                </ul>                        
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                R&D
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>
                                        <AtomButton onClick={() => navigate("/research-centre")}>KOP Research Centre</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton onClick={() => navigate("/biotech-centre")}>Biotech Centre</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Formulations</AtomButton>
                                    </li>
                                </ul> 
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                PRODUCTS
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>
                                        <AtomButton>Antibacterial Products</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Preservatives Products</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Hair Care Products</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Hair Growth Products</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Skin Care Products</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Bio Ferments</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Sun Care</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Oral Care</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Emollients</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Food & Health Products</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Paints & Coating Products</AtomButton>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                media
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                <li>
                                        <AtomButton
                                            onClick={() => navigate("/media")}
                                        >
                                            Media
                                        </AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton
                                            onClick={() => navigate("/news-events")}
                                        >
                                            News & Events
                                        </AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton
                                            onClick={() => navigate("/blog")}
                                        >
                                            Blogs
                                        </AtomButton>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                careers
                            </AccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    <li>
                                        <AtomButton>Sales Manager - MEA Region</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Business Manager India</AtomButton>
                                    </li>

                                    <li>
                                        <AtomButton>Sales Executive - Singapore</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Applied Lab Chemist</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Business Development Executive</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Business Manager</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Sales Executive - LATAM Region</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Digital Marketing Associate</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Regulatory Affairs Executive</AtomButton>
                                    </li>
                                    <li>
                                        <AtomButton>Sales Executive Switzerland</AtomButton>
                                    </li>
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                        <div className="single-anchor">
                            <AtomButton onClick={() => navigate("/contact-us")}>CONTACT</AtomButton>
                        </div>
                    </div>                  
                </div> :
                <>
                    {openDropdown ? <div className="backdrop"></div> : null}
                    <Container className={openDropdown ? 'header transparent' : 'header'}>
                        <AtomLink href="">
                            <img src={Logo} alt='' className="logo" />
                        </AtomLink>
                        {!isSearchOpen ? 
                            <ul className='menu'>
                                <li>
                                    <AtomButton onClick={() => navigate("/")}>Home</AtomButton>
                                </li>
                                <li className={openDropdown === "WhoWeAre" ? 'sub-menu highlight' : 'sub-menu'}>
                                    <AtomLink 
                                        onClick={() => toggleDropdown("WhoWeAre")} 
                                        endIcon={<img src={CaretDown} alt='' className='caret' />}
                                    >
                                        Who We are
                                    </AtomLink>
                                    {openDropdown === "WhoWeAre" && (
                                        <div className="sub-dropdown"> 
                                            <AtomLink 
                                                className="dismiss-icon"
                                                onClick={() => toggleDropdown("WhoWeAre")} 
                                                endIcon={<img src={Dismiss} alt='' />}
                                            ></AtomLink>                               
                                            <ul>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/who-we-are")}>Who we are</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/organization")}>Organisation</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/manufacturing-units")}>Manufacturing Units</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/management")}>Management</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/sustainability")}>Sustainability</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/investors")}>Investors</AtomButton>
                                                </li>
                                            </ul>                                
                                        </div>
                                    )}
                                </li>
                                <li className={openDropdown === "RD" ? 'sub-menu highlight' : 'sub-menu'}>
                                    <AtomLink 
                                        onClick={() => toggleDropdown("RD")} 
                                        endIcon={<img src={CaretDown} alt='' className='caret' />}
                                    >
                                        R&D
                                    </AtomLink>
                                    {openDropdown === "RD" && (
                                        <div className="sub-dropdown">
                                            <AtomLink 
                                                className="dismiss-icon"
                                                onClick={() => toggleDropdown("RD")} 
                                                endIcon={<img src={Dismiss} alt='' />}
                                            ></AtomLink>
                                            <ul>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/research-centre")}>KOP Research Centre</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton onClick={() => navigate("/biotech-centre")}>Biotech Centre</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Formulations</AtomButton>
                                                </li>
                                            </ul>
                                        </div>                            
                                    )}
                                </li>
                                <li className={openDropdown === "Products" ? 'sub-menu highlight' : 'sub-menu'}>
                                    <AtomLink 
                                        onClick={() => toggleDropdown("Products")} 
                                        endIcon={<img src={CaretDown} alt='' className='caret' />}
                                    >
                                        Products
                                    </AtomLink>
                                    {openDropdown === "Products" && (
                                        <div className="sub-dropdown">
                                            <AtomLink 
                                                className="dismiss-icon"
                                                onClick={() => toggleDropdown("Products")} 
                                                endIcon={<img src={Dismiss} alt='' />}
                                            ></AtomLink>
                                            <ul>
                                                <li>
                                                    <AtomButton>Antibacterial Products</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Preservatives Products</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Hair Care Products</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Hair Growth Products</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Skin Care Products</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Bio Ferments</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Sun Care</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Oral Care</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Emollients</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Food & Health Products</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Paints & Coating Products</AtomButton>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li className={openDropdown === "Media" ? 'sub-menu highlight' : 'sub-menu'}>
                                    <AtomLink 
                                        onClick={() => toggleDropdown("Media")} 
                                        endIcon={<img src={CaretDown} alt='' className='caret' />}
                                    >
                                        Media
                                    </AtomLink>
                                    {openDropdown === "Media" && (
                                        <div className="sub-dropdown">
                                            <AtomLink 
                                                className="dismiss-icon"
                                                onClick={() => toggleDropdown("Media")} 
                                                endIcon={<img src={Dismiss} alt='' />}
                                            ></AtomLink>
                                            <ul>
                                                <li>
                                                    <AtomButton
                                                        onClick={() => navigate("/media")}
                                                    >
                                                        Media
                                                    </AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton
                                                        onClick={() => navigate("/news-events")}
                                                    >
                                                        News & Events
                                                    </AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton
                                                        onClick={() => navigate("/blog")}
                                                    >
                                                        Blogs
                                                    </AtomButton>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li className={openDropdown === "Careers" ? 'sub-menu highlight' : 'sub-menu'}>
                                    <AtomLink 
                                        onClick={() => toggleDropdown("Careers")} 
                                        endIcon={<img src={CaretDown} alt='' className='caret' />}
                                    >
                                        Careers
                                    </AtomLink>
                                    {openDropdown === "Careers" && (
                                        <div className="sub-dropdown">
                                            <AtomLink 
                                                className="dismiss-icon"
                                                onClick={() => toggleDropdown("Careers")} 
                                                endIcon={<img src={Dismiss} alt='' />}
                                            ></AtomLink>
                                            <ul>
                                                <li>
                                                    <AtomButton>Sales Manager - MEA Region</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Business Manager India</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Sales Executive - Singapore</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Applied Lab Chemist</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Business Development Executive</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Business Manager</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Sales Executive - LATAM Region</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Digital Marketing Associate</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Regulatory Affairs Executive</AtomButton>
                                                </li>
                                                <li>
                                                    <AtomButton>Sales Executive Switzerland</AtomButton>
                                                </li>
                                            </ul>
                                        </div>
                                    )}
                                </li>
                                <li>
                                    <AtomButton onClick={() => navigate("/contact-us")}>Contact</AtomButton>
                                </li>
                                <li>
                                    <img src={Search} alt='' className='search-ico' onClick={handleSearch} />
                                </li>
                            </ul> : null
                        }
                        {isSearchOpen ? 
                            <TextField
                                className="header-search"
                                placeholder="Search.."
                                slotProps={{
                                    input: {
                                        startAdornment: <img src={Search} alt='' />,
                                        endAdornment: <img src={Dismiss} alt='' className="close-icon" onClick={handleSearchClosed} />
                                    },
                                }}
                            /> : null    
                        }
                    </Container>
                </>
            }            
        </>
    )
} 

export default HeaderTemplate