import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { db, storage } from "../../Firebase/firebaseConfig";

interface Category {
    id?: string;
    name: string;
    image?: string;
}

interface CategoryState {
    items: Category[];
    loading: boolean;
    error: string | null;
    image: string | null;
}

// Fetch categories
export const fetchCategories = createAsyncThunk<Category[], void>(
    "categories/fetchcategories",
    async (_, { rejectWithValue }) => {
        try {
            const querySnapshot = await getDocs(collection(db, "categories"));
            return querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Category),
            }));
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

// Add category
export const addCategory = createAsyncThunk<
    Category,
    { name: string; imageFile?: File; base64Image?: string }
>(
    "categories/addCategories",
    async ({ name, imageFile, base64Image }, { rejectWithValue }) => {
        try {
            let imageUrl = "";
            if (imageFile) {
                const imageRef = ref(storage, `categories/${uuidv4()}`);
                await uploadBytes(imageRef, imageFile, { contentType: imageFile.type });
                imageUrl = await getDownloadURL(imageRef);
            }
            const categoryData: Category = {
                name,
                image: base64Image && base64Image.trim() !== "" ? base64Image : imageUrl,
            };
            const docRef = await addDoc(collection(db, "categories"), categoryData);

            return { id: docRef.id, ...categoryData };
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

// Delete category
export const deleteCategories = createAsyncThunk<string, string>(
    "categories/deleteCategories",
    async (categoryId, { rejectWithValue }) => {
        try {
            await deleteDoc(doc(db, "categories", categoryId));
            return categoryId;
        } catch (error) {
            return rejectWithValue((error as Error).message);
        }
    }
);

const categorySlice = createSlice({
    name: "categories",
    initialState: {
        items: [] as Category[],
        loading: false,
        error: null,
        image: null,
    } as CategoryState,
    reducers: {
        setImage: (state, action: PayloadAction<{ image: string }>) => {
            state.image = action.payload.image;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.items.push(action.payload);
                state.image = action.payload.image || null;
            })
            .addCase(addCategory.rejected, (state, action) => {
                state.error = action.payload as string;
            })
            .addCase(deleteCategories.fulfilled, (state, action) => {
                state.items = state.items.filter((category) => category.id !== action.payload);
            })
            .addCase(deleteCategories.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    },
});

export const { setImage } = categorySlice.actions;
export default categorySlice.reducer;
