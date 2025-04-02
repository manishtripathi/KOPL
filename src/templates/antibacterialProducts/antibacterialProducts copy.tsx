import Grid from '@mui/material/Grid2'
import { Container } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { CirclePatternTop, CetylpyridiniumChlorideMonohydrate, BenzalkoniumChloride, PCMX, Benzalkonium, ZincCitrateTrihydrate, ZincLactateDihydrate, Bakuchiol, Triclosan, ChevronRight } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import './antibacterialProducts.scss'

const AntibacterialProductsTemplate = () => { 
    const navigate = useNavigate();
    return (
        <div className="organic-products">
            <div className='gradient-section'>
                <div className='pattern-top'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <div className='pattern-bottom'>
                    <img src={CirclePatternTop} alt='' />
                </div>
                <Container className='container'>
                    <h1>Antibacterial Products</h1>
                </Container>
            </div>
            <div className='products'>
                <Container className='container'>
                    <Grid container spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={CetylpyridiniumChlorideMonohydrate} alt='' />
                                </figure>
                                <h3>Cetylpyridinium chloride Monohydrate</h3>
                                <p>Kopdinium Chloride</p>
                                <p>6004-24-6</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                    onClick={() => navigate("/cetylpyridinium-chloride-monohydrate")}
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={BenzalkoniumChloride} alt='' />
                                </figure>
                                <h3>Benzalkonium Chloride</h3>
                                <p>Kopthonium Chloride</p>
                                <p>121-54-0</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={PCMX} alt='' />
                                </figure>
                                <h3>PCMX/ Chloroxylenol</h3>
                                <p>Kopxylenol</p>
                                <p>88-04-0</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={Benzalkonium} alt='' />
                                </figure>
                                <h3>Benzalkonium Chloride</h3>
                                <p>Kopalkonium</p>
                                <p>8001-54-5</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={ZincCitrateTrihydrate} alt='' />
                                </figure>
                                <h3>Zinc Citrate Trihydrate</h3>
                                <p>Kopcitrate Zn TH</p>
                                <p>546-46-3 + 178326-57-3</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={ZincLactateDihydrate} alt='' />
                                </figure>
                                <h3>Zinc Lactate Dihydrate</h3>
                                <p>Koplactate Zn</p>
                                <p>51120-75-3+ 63179-81-7</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={Bakuchiol} alt='' />
                                </figure>
                                <h3>Bakuchiol (Natural Retinol)</h3>
                                <p>Kopuchiol</p>
                                <p>10309-37-2</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                            <div className='white-card'>
                                <figure className='thumb'>
                                    <img src={Triclosan} alt='' />
                                </figure>
                                <h3>Triclosan</h3>
                                <p>Kopsan</p>
                                <p>3380-34-5</p>
                                <AtomButton 
                                    variant = {'outlined'}
                                    size = {'small'}
                                    endIcon={
                                        <img src={ChevronRight} alt='' />
                                    }
                                >
                                    KNOW MORE
                                </AtomButton>
                            </div>
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
                            <h6>High Quality Ingredients</h6>
                        </Grid>
                        <Grid size={{ xs: 12, md: 'auto' }}>
                            <AtomButton 
                                variant = {'outlined'}
                                size = {'large'}
                                endIcon={
                                    <img src={ChevronRight} alt='' />
                                }
                            >
                                DISCOVER MORE
                            </AtomButton>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default AntibacterialProductsTemplate