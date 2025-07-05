import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Основний запит рецепта
export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        `https://fullstack-recipes-backend-ssa1.onrender.com/api/recipes/${id}`
      );

      const data = response.data.data;

      return {
        id: data._id,
        title: data.title,
        photo: data.thumb,
        description: data.description,
        instructions: data.instructions,
        ingredients: data.ingredients,
        category: data.category,
        area: data.area,
        time: data.time,
        calories: data.calories,
        isFavourite: false,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.response?.data?.message || "Recipe not found"
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
      });
    // .addCase(addToFavorites.fulfilled, (state) => {
    //   if (state.recipe) state.recipe.isFavourite = true;
    // })
    // .addCase(removeFromFavorites.fulfilled, (state) => {
    //   if (state.recipe) state.recipe.isFavourite = false;
    // });
  },
});

// export const addToFavorites = createAsyncThunk(
//   "recipes/addToFavorites",
//   async (id) => {
//     // тимчасово — фейковий запит
//     await new Promise((res) => setTimeout(res, 500));
//     return id;
//   }
// );

// export const removeFromFavorites = createAsyncThunk(
//   "recipes/removeFromFavorites",
//   async (id) => {
//     // тимчасово — фейковий запит
//     await new Promise((res) => setTimeout(res, 500));
//     return id;
//   }
// );

export default recipeSlice.reducer;
