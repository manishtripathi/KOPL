import Grid from '@mui/material/Grid2'
import { Container, useMediaQuery } from '@mui/material'
import { useNavigate } from "react-router-dom";
import { CirclePatternTop, ISOGreen, sattvikCouncil, ecocert, submergedFermentationGraph, submergedFermentation, Clothes, downstream, manufacturingUnit1, arrowRight } from '../../helpers/constant/imageUrl'
import AtomButton from '../../atoms/button/button'
import AtomCarousel from '../../atoms/carousel/carousel'
import { BREAK_POINT_CONSTANTS } from '../../helpers/constant/constant'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './biotechCentre.scss'

const BiotechCentreTemplate = () => { 
    const navigate = useNavigate();
    const breakPoint = useMediaQuery(`(${BREAK_POINT_CONSTANTS.MOBIE})`)
    const breakPointIpad = useMediaQuery(`(${BREAK_POINT_CONSTANTS.IPAD})`)
    return (
        <div className="biotech-centre">
            <div className='gradient-section'>
                <Container className='container'>
                    <div className='pattern-top'>
                        <img src={CirclePatternTop} alt='' />
                    </div>
                    <div className='pattern-bottom'>
                        <img src={CirclePatternTop} alt='' />
                    </div>
                    <h1>Biotech Centre</h1>
                    <p>Biocatalysis | Fermentation | Microbiology | Cell biology | Biochemistry | Bioinformatics | Molecular biology</p>
                    <ul>
                        <li>
                            <img src={ISOGreen} alt='' />
                        </li>
                        <li>
                            <img src={sattvikCouncil} alt='' />
                        </li>
                        <li>
                            <img src={ecocert} alt='' />
                        </li>
                    </ul>
                </Container>
            </div>
            <div className='fermentation'>
                <Container className='container'>
                    <h2>Fermentation</h2>
                    <p className='sub-text'>In 2009, we embarked on the journey of fermentation-based products. This encompasses processes that leverage chemical changes initiated by living microorganisms, and our expertise extends across a wide range of production hosts, including bacteria, yeast, and fungi.</p>
                    <Grid container justifyContent="space-between" spacing={{ xs: 5, md: 3 }}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <img src={submergedFermentationGraph} alt='' className='w-100' />
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 12 }}>
                                    <h5>Submerged Fermentation</h5>
                                    <p>We have extensive experience in aerobic submerged fermentation processes, particularly in the production of secondary metabolites. Our expertise includes comprehensive control over pH, dissolved oxygen, temperature, stirring, foaming, and more, ensuring optimal productivity. Additionally, we excel in fed-batch fermentations, wherein extended and enhanced productivity can be achieved through the continuous or intermittent addition of one or more ingredients to the medium</p>
                                    <figure className='bg'>
                                        <img src={submergedFermentation} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 12 }}>
                                    <h5>Solid State Fermentation</h5>
                                    <p>We specialize in solid-state fermentation, a process that involves fermenting solid substrates with minimal water content, offering excellent economic feasibility. Its advantages include reduced energy demand, lower contamination risks, higher product yields, decreased water consumption, and ease of end-product recovery.</p>
                                    <figure className='bg'>
                                        <img src={Clothes} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <div className='card'>
                                <Grid size={{ xs: 8, md: 12 }}>
                                    <h5>Downstream Capabilities</h5>
                                    <ul>
                                        <li>Continuous Centrifugation</li>
                                        <li>Microfiltration</li>
                                        <li>Diafiltration</li>
                                        <li>Ultrafiltration</li>
                                        <li>Ion Exchange Resin Column Purification</li>
                                        <li>Forced Circulation Evaporation</li>
                                        <li>Agitated Nutsche Filtration Drying</li>
                                        <li>Fluidized Bed Drying</li>
                                        <li>Drum Drying</li>
                                    </ul>
                                    <figure className='bg'>
                                        <img src={downstream} alt='' />
                                    </figure>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='manufacturing-unit-section'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'} alignItems={'center'}>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />
                            <div className='blue-section'>
                                <h4>ADVANTAGES</h4>
                                <ul>
                                    <li>Green Technology</li>
                                    <li>Solvent free</li>
                                    <li>Mild conditions of reaction</li>
                                    <li>One - two steps reactions</li>
                                    <li>Renewable sources</li>
                                    <li>Zero discharge</li>
                                    <li>Recycle & reuse of enzymes</li>
                                    <li>Environment friendly</li>
                                </ul>
                            </div>                           
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>Enzymatic Synthesis</h3>
                                <p>Our research expertise extends to enzymatic synthesis, leveraging natural catalysts like enzymes to drive chemical transformations in organic compounds. Specifically, we specialize in esterifications and trans esterifications, processes crucial for various industries including pharmaceuticals, cosmetics, and food. With a focus on sustainability and efficiency, we harness the power of enzymes to facilitate these reactions, resulting in high-quality products with minimal environmental impact.</p>
                                <p>Through meticulous research and innovation, we continuously push the boundaries of enzymatic synthesis, unlocking new possibilities for our clients and contributing to the advancement of biotechnology.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='manufacturing-unit-section blue'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'} alignItems={'center'}>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3 className='blue-text'>Sustainable Extractions</h3>
                                <h5>Harnessing Butylene Glycol for Green Solutions</h5>
                                <p>In our Green Extractions segment, we utilize Butylene Glycol sourced from fermentation as a sustainable solvent for extracting bioactive compounds from non-fermentable natural substrates. This approach not only ensures the efficient extraction of valuable compounds but also aligns with our commitment to sustainability and environmental responsibility. By opting for renewable and eco-friendly solvents, we minimize the environmental footprint of our extraction processes while maximizing the yield and quality of our extracted bioactive compounds.</p>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />                           
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='efficacy-studies'>
                <Container className='container'>
                    <h3>Efficacy Studies</h3>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Microbiological Studies
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={{ xs: 5, md: 10 }}>
                                <Grid size={{ xs: 'auto' }}>
                                    <ul>
                                        <li>Challenge Tests</li>
                                        <li>Repeat Challenge Tests</li>
                                        <li>Minimum Inhibitory Concentration</li>
                                        <li>Zone of Inhibition</li>
                                        <li>Residual Bacteriostatic Activity</li>
                                    </ul>
                                </Grid>
                                <Grid size={{ xs: 'auto' }}>
                                    <ul>
                                        <li>Long-lasting Antimicrobial Effect</li>
                                        <li>Germ Reduction Tests</li>
                                        <li>Oral Biofilm Inhibition Studies</li>
                                        <li>Contact Kill Assay</li>
                                        <li>Rate Kill Assay</li>
                                    </ul>
                                </Grid>
                            </Grid>             
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            Biochemicals Studies
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={{ xs: 5, md: 10 }}>
                                <Grid size={{ xs: 'auto' }}>
                                    <ul>
                                        <li>RBC Assay for Eye Irritation</li>
                                        <li>Antityrosinase Assay</li>
                                        <li>Anticollagenase Assay</li>
                                        <li>Anticollagenase Assay</li>
                                        <li>DPPH Assay</li>
                                    </ul>
                                </Grid>
                                <Grid size={{ xs: 'auto' }}>
                                    <ul>
                                        <li>FRAP Assay</li>
                                        <li>ABTS Radical Absorbance Capacity</li>
                                        <li>Singlet Oxygen Absorbance Capacity</li>
                                        <li>Superoxide Absorbance Assay</li>
                                        <li>Nitric Oxide Absorbance Assay</li>
                                    </ul>
                                </Grid>
                            </Grid>             
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel3-header"
                        >
                            Cell Based Assays
                        </AccordionSummary>
                        <AccordionDetails>
                            <Grid container spacing={{ xs: 5, md: 4 }}>
                                <Grid size={{ xs: 'auto' }}>
                                    <h6>Cytotoxicity Assays/ Screening for Toxicity / Cell Viability Assay</h6>
                                    <ul>
                                        <li>MTT Assay</li>
                                        <li>The Lactate Dehydrogenase (LDH) release Assay</li>
                                    </ul>
                                </Grid>
                                <Grid size={{ xs: 'auto' }}>
                                    <h6>Product Efficacy Testing</h6>
                                    <ul>
                                        <li>Wound Healing / Regeneration Assay</li>
                                        <li>Estimation of Melanin Content/ Skin Lighting / Anti - Melanogenic Assay</li>
                                    </ul>
                                </Grid>
                            </Grid>             
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </div>
            <div className='manufacturing-unit-section blue'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'} alignItems={'center'}>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />                           
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>QC Micro Biology</h3>
                                <p>We conduct comprehensive microbial limit tests on both raw materials and finished products, ensuring the highest standards of quality and safety. We perform rigorous water system validation and monitoring to guarantee the purity and integrity of our processes. Our environmental monitoring and area validation protocols ensure that our facilities maintain optimal conditions for production, adhering to strict regulatory requirements and industry best practices.</p>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='manufacturing-unit-section'>
                <Container className='container'>
                    <Grid container justifyContent={'space-between'} alignItems={'center'}>
                        <Grid size={{ xs: 12, sm: 6.5 }}>
                            <div className='info'>
                                <h3>Custom Research Projects</h3>
                                <p>The facility offers tailored R&D services to cosmeceutical, nutraceutical, and biotechnology companies with the utmost confidentiality and intellectual property protection. Whether it's developing a new process or enhancing an existing one, rest assured of our expertise</p>
                                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomButton 
                                            variant = {'outlined'}
                                            size = {'small'}
                                            className='btn mb-5 mb-md-0'
                                        >
                                            <span className='icon'>
                                                <img src={arrowRight} alt='' />
                                            </span>
                                            <div>
                                                Cost Effective Steps of Biosynthesis
                                            </div>
                                        </AtomButton>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomButton 
                                            variant = {'outlined'}
                                            size = {'small'}
                                            className='btn mb-5 mb-md-0'
                                        >
                                            <span className='icon'>
                                                <img src={arrowRight} alt='' />
                                            </span>
                                            <div>
                                            Process and Product Research & Development & Optimization
                                            </div>
                                        </AtomButton>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomButton 
                                            variant = {'outlined'}
                                            size = {'small'}
                                            className='btn mb-5 mb-md-0'
                                        >
                                            <span className='icon'>
                                                <img src={arrowRight} alt='' />
                                            </span>
                                            <div>
                                                Increasing Process Efficiency & Yield
                                            </div>
                                        </AtomButton>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 6 }}>
                                        <AtomButton 
                                            variant = {'outlined'}
                                            size = {'small'}
                                            className='btn mb-5 mb-md-0'
                                        >
                                            <span className='icon'>
                                                <img src={arrowRight} alt='' />
                                            </span>
                                            <div>
                                                Replacing Environmentally Unsuitable
                                            </div>
                                        </AtomButton>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid size={{ xs: 12, sm: 5 }} className="position-relative">
                            <img src={manufacturingUnit1} alt='' />                           
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}

export default BiotechCentreTemplate