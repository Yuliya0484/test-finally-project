import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { addToFavorites, removeFromFavorites } from "./operations";

// ⚠️ Замінити URL, коли зʼявиться бекенд
export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/recipes/${id}`); // URL
      const data = response.data;

      return {
        id: data._id?.$oid || data._id,
        title: data.title,
        photo: data.thumb,
        description: data.description,
        instructions: data.instructions,
        ingredients: data.ingredients.map((ing) => ({
          id: ing.id,
          measure: ing.measure,
        })),
        category: data.category,
        area: data.area,
        time: data.time,
        calories: data.calories,
        isFavourite: false, // змінити пізніше
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.response?.data?.message || "Failed to fetch recipe"
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
        state.recipe = null;
        state.error = action.payload;
      })
      .addCase(addToFavorites.fulfilled, (state) => {
        if (state.recipe) state.recipe.isFavorite = true;
      })
      .addCase(removeFromFavorites.fulfilled, (state) => {
        if (state.recipe) state.recipe.isFavorite = false;
      });
  },
});

export default recipeSlice.reducer;
