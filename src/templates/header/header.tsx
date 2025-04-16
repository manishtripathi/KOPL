import { useEffect, useState } from "react";
import { Container, useMediaQuery } from '@mui/material'
import AtomLink from '../../atoms/link/link'
import Accordion from '@mui/material/Accordion';
import { useLocation, useNavigate } from "react-router-dom";
import AccordionSummary from '@mui/material/AccordionSummary';
import { fetchCategories } from "../../redux/slice/categoriesSlice";
import { fetchProducts } from "../../redux/slice/productlistSlice"; 
import AccordionDetails from '@mui/material/AccordionDetails';
import { Logo, LogoBlack, CaretDown, Dismiss, Search, Humburger } from '../../helpers/constant/imageUrl'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import './header.scss'
import AtomButton from "../../atoms/button";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/storage/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()

const HeaderTemplate = ({ }) => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate();
    // const { items: categories = [], loading = false } = useSelector(
    //     (state: RootState) => state.categories || {}
    // )
    // const {products : Product = []} = useSelector(
    //     (state: RootState) => [], state.products || {}
    // )

    const { items: products = [], loading: productsLoading = false } = useSelector(
        (state: RootState) => state.productlist || { items: [], loading: false }
    );

    const { items: categories = [], loading: categoriesLoading = false } = useSelector(
        (state: RootState) => state.categories || { items: [], loading: false }
    );
    

    useEffect(() => {
        dispatch(fetchCategories());        
        dispatch(fetchProducts());
    }, [dispatch])
    const breakPointIpad = useMediaQuery(`(${BREAK_POINT_CONSTANTS.IPAD})`)
    const [openDropdown, setOpenDropdown] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const location = useLocation();
    // const products: Product[] = useSelector((state: RootState) => state.products.items);


    const toggleDropdown = (menu: any) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    }
    const handleSearch = () => {
        setIsSearchOpen(true)
    }
    const handleSearchClosed = () => {
        setIsSearchOpen(false)
    }

    interface Product {
        id: string;
        name: string;
        category: string;
      }
      interface Category {
        id: string;
        name: string;
      }

      useEffect(() => {
        if(openDropdown)
        setOpenDropdown(null);
    }, [location.pathname]);

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
                                            <AtomButton>Manufacturing Units</AtomButton>
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
                                            <AtomButton>KOP Research Centre</AtomButton>
                                        </li>
                                        <li>
                                            <AtomButton>Biotech Centre</AtomButton>
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
                                {categoriesLoading || productsLoading ? (
                                    <p> Loading Menu ...</p>
                                ) : (
                                    <AccordionDetails>
                                        <ul>
                                            <li>
                                                <AtomButton> All Products </AtomButton>
                                            </li>
                                            {categories.map((category: Category) => {
                                                const categoryProducts = products.filter(
                                                    (product: Product) => product.category === category.name
                                                );
                    
                                                return (
                                                    <li key={category.id} className="category-item">
            <AtomButton>{category.name}</AtomButton>
            {categoryProducts.length > 0 && (
                <ul className="product-submenu" style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                    {categoryProducts.map((product: Product) => (
                        <li key={product.id}>
                            <AtomButton>{product.name}</AtomButton>
                        </li>
                    ))}
                </ul>
            )}
        </li>
                                                );
                                            })}
                                           
                                        </ul>
                                    </AccordionDetails>
                                )}
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
                                        <li onClick={()=>navigate("/all-news")}>
                                            <AtomButton >News & Events</AtomButton>
                                        </li>
                                        <li onClick={()=>navigate("/all-blogs")}>
                                            <AtomButton >Blogs</AtomButton>
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
                                                        <AtomButton>Manufacturing Units</AtomButton>
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
                                                        <AtomButton>KOP Research Centre</AtomButton>
                                                    </li>
                                                    <li>
                                                        <AtomButton>Biotech Centre</AtomButton>
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

                                                {categoriesLoading || productsLoading ? (
                                                    <p> Loading Menu ...</p>
                                                ) : (
                                                    <AccordionDetails>
                                                    <ul>
                                                      <li>
                                                        <AtomButton>All Products</AtomButton>
                                                      </li>
                                                  
                                                      {categories.map((category: Category) => {
                                                        const categoryProducts = products.filter(
                                                            (product: Product) => product.category === category.name
                                                        );

                                                        return (
                                                            <li key={category.id} className="category-item">
                                                            <AtomButton>{category.name}</AtomButton>
                                                            <span className="arrow-icon">&#8594;</span>
                                                            {categoryProducts.length > 0 && (
                                                                <ul className="product-submenu" style={{ paddingLeft: '1rem', marginTop: '0.5rem' }}>
                                                                    {categoryProducts.map((product: Product) => (
                                                                        <li key={product.id}>
                                                                            <AtomButton>{product.name}</AtomButton>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            )}
                                                        </li>
                                                        );
                                                        })}

                                                    </ul>
                                                  </AccordionDetails>
                                                  
                                                  
                                                )}
                                               
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
                                                        <AtomButton onClick={()=>navigate("/all-news")}>News & Events</AtomButton>
                                                    </li>
                                                    <li>
                                                        <AtomButton onClick={()=>navigate("/all-blogs")}>Blogs</AtomButton>
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
                                                        <AtomButton onClick={() => navigate('/careers')}>
                                                            Careers
                                                        </AtomButton>
                                                    </li>
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