import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

import { db, storage } from "../../Firebase/firebaseConfig";
//import { error } from "console";


export const fetchCategories = createAsyncThunk("categories/fetchcategories", async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
}) 

    export const addCategory = createAsyncThunk(
        "categories/addCategories",
        async ({ name, imageFile, base64Image }) => {
          try {
            let imageUrl = "";
            if (imageFile) {
            //   console.log("Uploading image 1:", imageFile);
            const imageRef = ref(storage, `categories/${uuidv4()}`);
            // const res=  await uploadBytes(imageRef, imageFile);
            // console.log("response from upload", res)
            //   imageUrl = await getDownloadURL(imageRef);
            //   console.log("Image uploaded successfully. URL:", imageUrl);
            }
      
            const categoryData = { name, image: base64Image };
            const docRef = await addDoc(collection(db, "categories"), categoryData);
      
            return { id: docRef.id, ...categoryData };
          } catch (error) {
            console.error("Error uploading image:", error);
            throw new Error(error.message);
          }
        }
      );
      
    

export const deleteCategories = createAsyncThunk("categories/deleteCategories", async (categoryId) => {
       await deleteDoc(doc(db, "categories", categoryId));       
       return categoryId;
})

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        items: [],
        loading: false,
        error: null,
        image: null,
        selectedCategory: "",
    },
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setImage : (state, action) => {
            state.image = action.payload.image;
        }
    },
    extraReducers : (builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.loading =true;            
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.loading = false;
            state.items = action.error.message;
        })
        .addCase(addCategory.fulfilled, (state, action) => {
            state.items.push(action.payload)
            state.image = action.payload.image
        })

        .addCase(deleteCategories.fulfilled, (state, action) => {
            state.items = state.items.filter(category => category.id !== action.payload);
        })
    }
}) 

export const {setImage, setSelectedCategory} = categorySlice.actions;
export default categorySlice.reducer;