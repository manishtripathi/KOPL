import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../Firebase/firebaseConfig";
import getNewsFromFirebase from "../../services/newsService";
import { CategoryItem , NewsItem} from "../../types";

// Async thunk to fetch all news
export const fetchAllNews = createAsyncThunk<NewsItem[]>("config/fetchAllNews", async () => {
    return await getNewsFromFirebase(100);
});

// Async thunk to fetch categories
export const fetchCategories = createAsyncThunk<CategoryItem[]>("config/fetchCategories", async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CategoryItem));
});

// Async thunk to add a new category
export const addCategory = createAsyncThunk<CategoryItem, Omit<CategoryItem, "id">>(
    "config/addCategory",
    async (categoryData) => {
        const docRef = await addDoc(collection(db, "categories"), categoryData);
        return { id: docRef.id, ...categoryData };
    }
);

// Async thunk to delete a category
export const deleteCategory = createAsyncThunk<string, string>(
    "config/deleteCategory",
    async (categoryId) => {
        await deleteDoc(doc(db, "categories", categoryId));
        return categoryId;
    }
);

// Define the state structure
interface ConfigState {
    news: NewsItem[];
    blogs: any[]; // You can replace 'any' with your own Blog type
    items: CategoryItem[];
    loading: boolean;
    error: string | null;
}

const initialState: ConfigState = {
    news: [],
    blogs: [],
    items: [],
    loading: false,
    error: null,
};

const configSlice = createSlice({
    name: "config",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllNews.fulfilled, (state, action: PayloadAction<NewsItem[]>) => {
                state.news = action.payload;
                state.loading = false;
            })
            .addCase(fetchAllNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? "Failed to fetch news";
            })

            .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<CategoryItem[]>) => {
                state.items = action.payload;
            })

            .addCase(addCategory.fulfilled, (state, action: PayloadAction<CategoryItem>) => {
                state.items.push(action.payload);
            })

            .addCase(deleteCategory.fulfilled, (state, action: PayloadAction<string>) => {
                state.items = state.items.filter(item => item.id !== action.payload);
            });
    },
});

export default configSlice.reducer;
