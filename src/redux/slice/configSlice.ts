import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

import { db, storage } from "../../Firebase/firebaseConfig";
//import { error } from "console";


export const fetchCategories = createAsyncThunk<any, void>("categories/fetchcategories", async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
}) 

    export const addCategory = createAsyncThunk<any,any>(
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
          } catch (error:any) {
            console.error("Error uploading image:", error);
            throw new Error(error.message);
          }
        }
      );
      
    

export const deleteCategories = createAsyncThunk("categories/deleteCategories", async (categoryId:any) => {
       await deleteDoc(doc(db, "categories", categoryId));       
       return categoryId;
})



export const addCareer = createAsyncThunk<any,any>(
    "careers/addCareer",
    async (careerData) => {
      try {
        const docRef = await addDoc(collection(db, "careers"), careerData);
  
        return { id: docRef.id, ...careerData };
      } catch (error:any) {
        console.error("Error adding career:", error);
        throw new Error(error.message);
      }
    }
  );

  export const fetchCareer = createAsyncThunk<any, void>("careers/fetchcareers", async () => {
    const querySnapshot = await getDocs(collection(db, "careers"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
}) 

const configSlice = createSlice({
    name: "categories",
    initialState: {
        items: <any>[],
        careers:<any>[],
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
        .addCase(fetchCategories.rejected, (state:any, action:any) => {
            state.loading = false;
            state.items = action.error.message;
        })
        .addCase(addCategory.fulfilled, (state, action:any) => {
            state.items.push(action.payload)
            state.image = action.payload.image
        })

        // careers
        .addCase(addCareer.fulfilled, (state, action:any) => {
            state.careers.push(action.payload)
            state.image = action.payload.image
        })
        .addCase(fetchCareer.pending, (state) => {
            state.loading =true;            
        })
        .addCase(fetchCareer.fulfilled, (state, action) => {
            state.loading = false;
            state.careers = action.payload;
        })
        .addCase(fetchCareer.rejected, (state:any, action:any) => {
            state.loading = false;
            state.items = action.error.message;
        })

        .addCase(deleteCategories.fulfilled, (state, action) => {
            state.items = state.items.filter((category:any) => category.id !== action.payload);
        })
    }
}) 

export const {setImage, setSelectedCategory} = configSlice.actions;
export default configSlice.reducer;