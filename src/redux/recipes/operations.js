import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addToFavorites = createAsyncThunk(
  "recipes/addToFavorites",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.post(`/api/recipes/${recipeId}/favorite`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.responce?.data?.message || "Add failed"
      );
    }
  }
);

export const removeFromFavorites = createAsyncThunk(
  "recipes/removeFromFavorites",
  async (recipeId, thunkAPI) => {
    try {
      const res = await axios.delete(`/api/recipes/${recipeId}/favorite`);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        e.responce?.data?.message || "Remove failed"
      );
    }
  }
);
