import { Container } from '@mui/material'
import Grid from '@mui/material/Grid2'
import AtomButton from '../../atoms/button/button'
import { useNavigate } from "react-router-dom";
import { Antibacterial, ChevronRight, Emollients, FoodHealth, OralCare, PaintsCoatings, Preservatives, SunCare, SkinCare, CirclePatternTop } from '../../helpers/constant/imageUrl'
import './products.scss'

const ProductsTemplate = () => {
    const navigate = useNavigate();
    return (
        <div className="products-section">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>Business Segments</h1>
                    <p>In a dynamic market environment characterized by rapid shifts in consumer behavior and evolving demands, KOPL serves customers across diverse industries and regions, confronting a spectrum of challenges.</p>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Antibacterial
                                    <AtomButton
                                        onClick={() => navigate("/antibacterial-products")}
                                    >
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Hair Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={SunCare} alt='' />
                                <div className="overlay">
                                    Sun Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Hair Growth
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Antibacterial} alt='' />
                                <div className="overlay">
                                    Bio Ferments
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={SkinCare} alt='' />
                                <div className="overlay">
                                    Skin Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Preservatives} alt='' />
                                <div className="overlay">
                                    Preservatives
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={FoodHealth} alt='' />
                                <div className="overlay">
                                    Food & Health
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={PaintsCoatings} alt='' />
                                <div className="overlay">
                                    Paints & Coatings
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={Emollients} alt='' />
                                <div className="overlay">
                                    Emollients
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                            <div className="product-thumb">
                                <img src={OralCare} alt='' />
                                <div className="overlay">
                                    Oral Care
                                    <AtomButton>
                                        VIEW MORE
                                        <img src={ChevronRight} alt='' />
                                    </AtomButton>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='measurement'>
                <Container className='container'>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>5</h4>
                            <p>Manufacturing Units</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>2,000+</h4>
                            <p>Customers Served</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>2</h4>
                            <p>Research Centre</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>60+</h4>
                            <p>Active Ingredients</p>
                        </Grid>
                        <Grid size={{ xs: 6, md: 2.4 }}>
                            <h4>80+</h4>
                            <p>Countries Served</p>
                        </Grid>
                    </Grid>
                </Container>
            </div>
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
                        <Grid size={{ xs: 12, md: 9 }}>
                            <h6>
                                Discover Our Global Reach: Find Country - Specific Contact Information
                            </h6>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'auto' }}>
                            <AtomButton 
                                variant = {'outlined'}
                                size = {'large'}
                                endIcon={
                                    <img src={ChevronRight} alt='' />
                                }
                            >
                                global offices
                            </AtomButton>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
} 

export default ProductsTemplate