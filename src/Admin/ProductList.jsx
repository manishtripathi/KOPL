import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slice/productlistSlice";
import { input, Button, MenuItem } from "@mui/material";
import { fetchCategories, setSelectedCategory } from "../redux/slice/categoriesSlice";

const ProductList = () => {
    const dispatch = useDispatch();
    // const [selectCategory, setSelectedCategory] = useState("")
    const [product, setProduct] = useState({
        name: "",
        subtitle: "",
        category: "",
        casNumber: "",
        base64Image: "",
        productDeatails : [],
    });
    const { items: categories = [], loading: categoriesLoading, error } = useSelector((state) => state.categories)
    const { categoryId } = useSelector((state) => state.productlist)

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])
    console.log("fetches catgories form redux", categories)

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        if (!e.target.files.length) return;

        const file = e.target.files[0];
        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image file.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setProduct((prev) => ({
                ...prev,
                base64Image: reader.result,
            }));
        };
        reader.onerror = (error) => console.error("Error converting file:", error);
        reader.readAsDataURL(file);
    };

    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        console.log("Selected Category:", selectedCategory);

        setSelectedCategory(selectedCategory);
        setProduct({ ...product, category: selectedCategory });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.base64Image) {
            alert("Please select an image.");
            return;
        }
        dispatch(addProduct(product));
        setProduct({ name: "", subtitle: "", category: "", casNumber: "", base64Image: "" });
    };

    return (
        <div className="admin-panel admin-addcategories">
            <h2>Add Product</h2>
            <div className="form-addcategories">
                <form onSubmit={handleSubmit}>
                    <input
                        label="Product Name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <input
                        label="Subtitle"
                        name="subtitle"
                        value={product.subtitle}
                        onChange={handleChange}
                        fullWidth
                        required
                    />
                    <select
                        className="form-select"
                        name="category"
                        value={product.category}
                        onChange={handleCategoryChange}
                        required
                    >
                        {categoriesLoading ? (
                            <option disabled>Loading...</option>
                        ) : (
                            categories.map((category) => (
                                <option key={category.id} value={category.name}>
                                    {category.name}
                                </option>
                            ))
                        )}
                    </select>

                    <input
                        label="CAS Number"
                        name="casNumber"
                        value={product.casNumber}
                        onChange={handleChange}
                        fullWidth
                    />
                    <input type="file" onChange={handleFileChange} accept="image/*" required />
                    {product.base64Image && (
                        <img src={product.base64Image} alt="Preview" style={{ width: "100px", height: "100px" }} />
                    )}
                    <Button type="submit" variant="contained" color="primary">
                        Add Product
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default ProductList;
