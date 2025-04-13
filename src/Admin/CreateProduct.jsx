import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/slice/productlistSlice";
import { input, Button, MenuItem, TextField } from "@mui/material";
import { fetchCategories, setSelectedCategory } from "../redux/slice/categoriesSlice";
import ProductDetailForm from "../Forms/ProductDetailForm";
import './createproduct.css'

const CreateProduct = () => {
    const dispatch = useDispatch();
    debugger
    const [product, setProduct] = useState({
        name: "",
        subtitle: "",
        category: "",
        casNumber: "",
        base64Image: "",
        productDescription: "",
        productDetails : [],
    });
    const { items: categories = [], loading: categoriesLoading, error } = useSelector((state) => state.categories)
    const { categoryId } = useSelector((state) => state.productlist)

   
      const onSave = (data) => {
       
        setProduct((prev) => ({
            ...prev,
            productDetails: data,
        }));
    };
    

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])
    

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
        debugger
        const selectedCategory = e.target.value;
       

        setSelectedCategory(selectedCategory);
        // setProduct({ ...product, category: selectedCategory });

        const selected = categories.find((cat) => cat.name === selectedCategory);
        setProduct({ ...product, category: selected?.name || "" });



    };

   
    const handleSubmit = (e) => {
        debugger;
        
        e.preventDefault();
        if (!product.base64Image) {
            alert("Please select an image.");
            return;
        }
        if (
            !product.productDetails ||
            !Array.isArray(product.productDetails.sections) ||
            product.productDetails.sections.length === 0
        ) {
            alert("Please add product specification");
            return;
        }
        console.log(product);
        dispatch(addProduct(product));
        setProduct({ name: "", subtitle: "", category: "", casNumber: "", base64Image: "", productDetails: [], productDescription: "" });
    };

    return (
        <div className="admin-panel admin-addcategories">
            <h2>Add Product</h2>
            <div className="productadd">
                <form onSubmit={handleSubmit}>
                    <div className="formrow">
                <div className="form-group">
                    <input
                        label="Product Name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        fullWidth
                        required
                    />
                    </div>
                    <div className="form-group">
                    <input
                        label="Subtitle"
                        name="subtitle"
                        value={product.subtitle}
                        onChange={handleChange}
                        placeholder="Subtitle"
                        fullWidth
                        required
                    />
                    </div>
                    </div>
                    <div className="formrow">
                    <div className="form-group">
                    <select
                        className="form-select"
                        name="category"
                        value={product.category}
                        onChange={handleCategoryChange}
                        placeholder="Category"
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
                        </div>
                        <div className="form-group">
                    <input
                        label="CAS Number"
                        name="casNumber"
                        value={product.casNumber}
                        onChange={handleChange}
                        placeholder="CAS Number"
                        fullWidth
                    />
                    <TextField
                        name="productDescription"                       
                        placeholder="e.g., Full-time, Part-time"
                        value={product.productDescription}
                        onChange={handleChange}
                        variant="outlined"
                        fullWidth
                      />
                    </div>
                    </div>
                    <div className="formrow">
                    <div className="form-group">
                    <input type="file" onChange={handleFileChange} accept="image/*" required />
                    {product.base64Image && (
                        <img src={product.base64Image} alt="Preview" style={{ width: "100px", height: "100px" }} />
                    )}
                    </div>
                    </div>
                    <ProductDetailForm onSave={onSave}/>
                    <Button type="submit" variant="contained" color="primary">
                        Add Product
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CreateProduct;
