import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchProducts } from "../../redux/slice/productlistSlice";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import AtomButton from "../../atoms/button/button";
import { ChevronRight, CirclePatternTop } from "../../helpers/constant/imageUrl";
import "./antibacterialProducts.scss";
import { fetchCategories } from "../../redux/slice/categoriesSlice";

const AntibacterialProductsTemplate = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    debugger
    const categoryName = useLocation()?.state?.categoryName || "";
    const { items = [], loading, error } = useSelector((state) => state.productlist || {});
    const categories = useSelector((state) => state.categories.items);
    const products = Array.isArray(items) ? items : [];


    useEffect(() => {
        dispatch(fetchProducts());
        if (categories?.length === 0)
            dispatch(fetchCategories())
    }, [dispatch]);

    const categoryDetail = useMemo(() => categories.find((categ) => categ.name === categoryName), [categoryName])
    console.log("Fetched Products:", products);

    return (
        <div className="organic-products">
            <div className="gradient-section">
                <div className="pattern-top">
                    <img src={CirclePatternTop} alt="" />
                </div>
                <div className="pattern-bottom">
                    <img src={CirclePatternTop} alt="" />
                </div>
                <Container className="container">
                    <h1>{categoryDetail?.name}</h1>
                </Container>
            </div>

            <div className="products">
                <Container className="container">
                    {loading && <p>Loading products...</p>}
                    {error && <p>Error loading products: {error}</p>}
                    <Grid container spacing={3}>
                        {products.length === 0 ? (
                            <p>No products found</p>
                        ) : (
                            products.map((product) => {
                                console.log("Rendering Product:", product); // Debug log
                                return (
                                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                                        <div className="white-card">
                                            <figure className="thumb">
                                                <img src={product.image} alt={product.name} />
                                            </figure>
                                            <h3>{product.name || "No Name"}</h3>
                                            <p>{product.subtitle || "No Subtitle"}</p>
                                            <p>{product.casNumber || "No CAS Number"}</p>
                                            <AtomButton
                                                variant="outlined"
                                                size="small"
                                                endIcon={<img src={ChevronRight} alt="" />}
                                                onClick={() => navigate(`/product-detail`, { state: { selectedProduct: product } })}
                                            >
                                                KNOW MORE
                                            </AtomButton>
                                        </div>
                                    </Grid>
                                );
                            })
                        )}


                    </Grid>
                </Container>
            </div>

            <div className="discover-offices">
                <Container className="container">
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item xs={12} md={9}>
                            <h6>High Quality Ingredients</h6>
                        </Grid>
                        <Grid item xs={12} md="auto">
                            <AtomButton variant="outlined" size="large" endIcon={<img src={ChevronRight} alt="" />}>
                                DISCOVER MORE
                            </AtomButton>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default AntibacterialProductsTemplate;
