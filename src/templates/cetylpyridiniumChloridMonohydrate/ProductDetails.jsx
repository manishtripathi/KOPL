import React, { useState, useEffect } from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
// import Grid from '@mui/material/Grid2'
import Grid from '@mui/material/Grid';

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
import  useBreadCrumbHistory  from '../../helpers/useBreadCrumbs';

const ProductDetails = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const generateBreadcrumbs = () => {
        const pathnames = location.pathname.split('/').filter(x => x);
        const breadcrumbs = [];
    
        breadcrumbs.push({
            label: 'Home',
            path: '/'
        });
    
        pathnames.forEach((value, index) => {
            const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    
            let label = value.replace(/-/g, ' ');
            if (value === 'antibacterial-products') label = 'Antibacterial Products';
            if (index === pathnames.length - 1 && selectedProduct?.name) {
                label = selectedProduct.name;
            }
    
            breadcrumbs.push({
                label,
                path,
                isLast: index === pathnames.length - 1
            });
        });
    
        return breadcrumbs;
    };
    

    // const [selectedProduct, setSelectedProduct] = useState(null);
    
    // const breadcrumbHistory = useBreadCrumbHistory();

    // // Exclude current page
    // const visitedPages = breadcrumbHistory.slice(0, -1);
    // const breadcrumbs = visitedPages
    //   .slice(-3) // Only last 3 visited pages
    //   .map((path, idx, arr) => {
    //     const label = decodeURIComponent(path.split('/').pop().replace(/-/g, ' '));
    //     const backStep = -(arr.length - idx); // -3, -2, -1
  
    //     return { label, backStep };
    //   });

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

    const tabItems = selectedProduct?.productDetails?.sections?.map((section, index) => ({
        label: section.title,
        text: section.title,
        key: index
      }));
    return (
        <div className="products-detail">
            <Container className='container'>
            <Breadcrumbs aria-label="breadcrumb">
  {generateBreadcrumbs()?.map((crumb, index) => (
    <AtomButton key={index} onClick={() => navigate(crumb.backStep)}>
      {crumb.label}
    </AtomButton>
  ))}
  <span>{selectedProduct?.name || 'Current Page'}</span>
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
                                <p>{selectedProduct.productDescription}</p>
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

                     
                     {/* {selectedProduct?.productDetails?.sections?.map((section, index) => ({
                        label: section.title,
                        text: section.title,
                        key: index
                    }))} */}
                    {tabItems}

                    
                </AtomTabs>
                {selectedProduct?.productDetails?.sections?.map((section, index) => (
                    <AtomTabPanel key={index} value={currentTab} index={index} className="tab-panel">
                        {section.fields?.length > 0 && section.fields[0]?.label ? (
                            <Grid container spacing={{ xs: 5, md: 8 }}>
                                {section.fields.reduce((acc, field, i) => {
                                    const colIndex = Math.floor(i / 4);
                                    if (!acc[colIndex]) acc[colIndex] = [];
                                    acc[colIndex].push(field);
                                    return acc;
                                }, []).map((group, colIdx) => (
                                    <Grid key={colIdx} item xs={12} sm={6} >
                                        <Table>
                                            <TableBody>
                                                {group.map((field, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell align="center">{field.label}</TableCell>
                                                        <TableCell>{field.value}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </Grid>
                                ))}
                            </Grid>
                        ) : (
                            <p className="description" dangerouslySetInnerHTML={{__html:section?.description}}/>
                        )}
                    </AtomTabPanel>
                ))}
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