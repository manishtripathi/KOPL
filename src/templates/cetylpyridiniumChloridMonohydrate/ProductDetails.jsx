import React, { useState, useEffect } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import AtomLink from '../../atoms/link/link'
import AtomTabs from '../../atoms/tabs/tabs'
import AtomTabPanel from '../../atoms/tabs/tabPanel'
import { product1, ChevronRight } from '../../helpers/constant/imageUrl'
import { TAB_LIST } from './constants'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import AtomButton from '../../atoms/button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useNavigate, useLocation } from "react-router-dom";
import { fetchProducts } from '../../redux/slice/productlistSlice'
import './cetylpyridiniumChloridMonohydrate.scss'

const ProductDetails = () => {
    
    const navigate = useNavigate();
    const location = useLocation();

    //const [selectedProduct, setSelectedProduct] = useState(null);
    const breakPointIpad = useMediaQuery(`(${BREAK_POINT_CONSTANTS.IPAD})`)
    const [currentTab, setCurrentTab] = useState(0)
    const handleChange = (event, newValue) => {
        setCurrentTab(newValue);
    };
    const selectedProduct = location.state?.selectedProduct || null;
    //const products = Array.isArray(items) ? items : [];

    useEffect(() => {
        if (!selectedProduct) {
            navigate('/antibacterial-products');
        }
    }, [selectedProduct, navigate]);
    return (
        <div className="products-detail">
            <Container className='container'>
                <Breadcrumbs aria-label="breadcrumb">
                    <AtomButton
                        onClick={() => navigate("/antibacterial-products")}
                    >
                        Antibacterial Products
                    </AtomButton>
                    <span>{selectedProduct?.name || 'Product Details'}</span>
                </Breadcrumbs>
                
                    {selectedProduct && (
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={6} md={5}>
                            <img src={selectedProduct.image} alt={selectedProduct.name} className='products-thumb' />
                        </Grid>
                        <Grid item xs={12} sm={6} md={7}>
                            <div className="info">
                                <h1>{selectedProduct.name}</h1>
                                <h2>{selectedProduct.subtitle}</h2>
                                <AtomButton
                                    variant="contained"
                                    color="primary"
                                    size={breakPointIpad ? 'large' : 'small'}
                                    endIcon={<img src={ChevronRight} alt="" />}
                                >
                                    GET A QUOTE
                                </AtomButton>
                                <p>{selectedProduct.description}</p>
                            </div>
                        </Grid>
                    </Grid>
                )}
                <AtomTabs
                    value={currentTab}
                    variant={breakPointIpad ? 'standard' : 'scrollable'}
                    scrollButtons={true}
                    onChange={handleChange}
                >
                    {TAB_LIST}
                </AtomTabs>
                <AtomTabPanel value={currentTab} index={0} className='tab-panel'>
                    <Grid container spacing={{ xs: 5, md: 8 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">INCI NAME</TableCell>
                                        <TableCell>Cetylpyridinium chloride</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center">CHEMICAL NAME</TableCell>
                                        <TableCell>1-Hexadecylpyridin-1-ium chloride</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center">MOLECULAR WEIGHT</TableCell>
                                        <TableCell>358.01 g/mol</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center">CAS NUMBER</TableCell>
                                        <TableCell>6004-24-6</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="center">EINECS NUMBER</TableCell>
                                        <TableCell>204-593-9</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center">ODOUR</TableCell>
                                        <TableCell>Faint odour</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center">APPEARANCE</TableCell>
                                        <TableCell>Cetylpyridinium chloride</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="center">SOLUBILITY</TableCell>
                                        <TableCell>Sparingly soluble in water but more soluble in organic</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                    </Grid>
                </AtomTabPanel>
                <AtomTabPanel value={currentTab} index={1} className='tab-panel'>
                    <p className='description'>Cetylpyridinium chloride (CPC) is commonly found in mouthwashes, toothpaste, and throat lozenges. These products, serve as an antiseptic agent to help reduce oral bacteria, plaque formation, gingivitis, and bad breath. It may also be used in pharmaceutical formulations for oral hygiene or throat infection. In mouthwash formulations, CPC concentrations range from 0.045% to 0.1% (w/v) as an active ingredient. Users typically rinse with the mouthwash for about 30 seconds to 1 minute before spitting it out. Toothpaste; concentrations ranging from 0.05% to 0.15% (w/w). Throat Lozenges; concentrations ranging from 1 mg to 4 mg per lozenge.</p>
                </AtomTabPanel>
                <AtomTabPanel value={currentTab} index={2} className='tab-panel'>
                    <p className='description'>Store CPC in tightly sealed containers at room temperature (typically between 20°C to 25°C or 68°F to 77°F). Avoid exposure to extreme temperatures. CPC may be sensitive to extreme pH levels, so it’ s advisable to avoid highly acidic or alkaline environments during storage.</p>
                </AtomTabPanel>
            </Container>
            <div className='discover-offices'>
                <Container className='container'>
                    <Grid
                        container
                        direction="row"
                        spacing={{ xs: 5, md: 0 }}
                        sx={{
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <Grid size={{ xs: 12, md: 10 }}>
                            <h6>APPLICATIONS<br /> Cosmetics, pharmaceuticals, cough lozenges, mouthwashes, deodorants, antiseptics, poultry application</h6>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'auto' }}>
                            <AtomButton
                                variant={'outlined'}
                                size={'large'}
                                endIcon={
                                    <img src={ChevronRight} alt='' />
                                }
                            >
                                GET A QUOTE
                            </AtomButton>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default ProductDetails