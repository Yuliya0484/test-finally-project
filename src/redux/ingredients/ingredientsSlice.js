// redux/ingredients/ingredientsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIngredientsList = createAsyncThunk(
  "ingredients/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("/api/ingredients");
      return res.data; // це масив
    } catch (e) {
      return thunkAPI.rejectWithValue("Failed to fetch ingredients list");
    }
  }
);

const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIngredientsList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchIngredientsList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ingredientsSlice.reducer;
