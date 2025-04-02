import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, setImage } from "../redux/slice/categoriesSlice";
import "./admincategories.css";
//import { error } from "console";

const AdminCategories = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("")
    const [localimage, setLocalImage] = useState(null)
    const categories = useSelector((state) => state.categories)

    const saveImageToLocal = (key, image) => {
        try {
            let storedImages = JSON.parse(localStorage.getItem(key)) || [];
            storedImages.push(image);
            localStorage.setItem(key, JSON.stringify(storedImages));
            console.log("Image saved to Local Storage");
        } catch (error) {
            console.error("Error saving image to Local Storage", error);
        }
    };

    const handleImageChange = (e) => {
        if (!e.target.files.length) return; 

        const file = e.target.files[0];
        if (!file.type.startsWith("image/")) {
            console.error("Selected file is not an image");
            return;
        }

        setLocalImage(file)

        const reader = new FileReader();
        reader.onload = () => {
            const base64Image = reader.result;
            dispatch(setImage({image : base64Image}))
            setImage(base64Image)
            //setImage(file);
            saveImageToLocal("category_images", base64Image); 
            console.log("Image saved successfully");
        };
        reader.onerror = (error) => {
            console.error("Error reading file", error);
        };
        reader.readAsDataURL(file);
    };


    const handleAddCategory =  () => {
        if (category.trim() === "" || !localimage) return;

        const storedImages = JSON.parse(localStorage.getItem("category_images")) || [];
        const storedImage =  storedImages.length > 0 ? storedImages[storedImages.length - 1] : null;

        //const newCategory = { name: category, imageFile: image, base64Image: storedImage };
        const newCategory = { name: category, imageFile: localimage, base64Image: storedImage };
        dispatch(addCategory(newCategory));

        setCategory("");
        setLocalImage(null);
    };

    return (
        <div className="admin-addcategories">
            <h2> ADD Category</h2>
            <div className="form-addcategories">
                <input type="text" className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}
                    placeholder="Enter Category Name"
                />
                <input type="file" className="form-control" onChange={handleImageChange} accept="image/*" />    
                {localimage && <img src={localimage} alt="Category Preview" style={{ width: "100px", height: "100px" }} />}       
            </div>
            <button onClick={handleAddCategory} className="btn btn-default mt-5"> Add </button>
        </div>
    )
}
export default AdminCategories