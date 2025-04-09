    import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
    import { db, storage } from "../../Firebase/firebaseConfig";
    import { collection, addDoc, getDocs } from "firebase/firestore";
    import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
    import { v4 as uuidv4 } from 'uuid';
    export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        
        console.log("Fetched Products from Firebase:", products); 
    
        return products;
    });
    

    export const addProduct = createAsyncThunk(
        "products/addProduct",
        async ({ name, category, subtitle, casNumber, productDetails, base64Image, productDescription }) => {
            debugger
            try {
                const newProduct = { name, category, subtitle, productDetails, casNumber, image: base64Image, productDescription  };
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
