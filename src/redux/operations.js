import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchById",
  async (id, thunkAPI) => {
    try {
      const res = await axios.get(`/api/recipes/${id}`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.response.data.message || "Error fetching recipe"
      );
    }
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipe: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipeById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.recipe = action.payload;
      })
      .addCase(fetchRecipeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default recipeSlice.reducer;
