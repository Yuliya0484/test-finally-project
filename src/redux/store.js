import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipes/recipeSlice";

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
