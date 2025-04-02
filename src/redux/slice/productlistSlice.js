import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db, storage } from "../../Firebase/firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from 'uuid';

// Async Thunk to fetch products
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
});

// Async Thunk to add a product with image upload
export const addProduct = createAsyncThunk(
    "products/addProduct",
    async ({ name, category, subtitle, casNumber, base64Image }) => {
        try {
            const newProduct = { name, category, subtitle, casNumber, image: base64Image };
            const docRef = await addDoc(collection(db, "products"), newProduct);
            return { id: docRef.id, ...newProduct };
        } catch (error) {
            console.error("Error adding product:", error);
            throw new Error(error.message);
        }
    }
);


const productSlice = createSlice({
    name: "products",
    initialState: {
        categoryId: null,
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(addProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(addProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.items.push(action.payload);
            })
            .addCase(addProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});


export default productSlice.reducer;
