import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, addCategory, deleteCategories } from "../redux/slice/categoriesSlice";

const CategoryList = () => {
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector((state) => state.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch])

    const handleAddCategories = () => {
        const newCategory = {name: "new Category"}
        dispatch(addCategory(newCategory))
    };

    const handelDeleteCatgories = (id) => {
        dispatch(deleteCategories(id))
    };

    return (
        <>
        <h2>Categories </h2>

        {loading && <p> Loading... </p>}

        {error && <p> Error: {error} </p>}

        <ul>
            {items.map((category) => (
                <li key={category.id}>
                    {category.name}

                    <button onClick={() => handelDeleteCatgories(category.id)}> Delete </button>
                </li>
            ))}
        </ul>
        <button onClick={handleAddCategories}>Add Categories</button>
        </>
    )


}

export default CategoryList