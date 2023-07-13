import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBestFood = createAsyncThunk("list-food/best-food", async () => {
  const response = await axios.get(
    "https://free-food-menus-api-production.up.railway.app/best-foods"
  );
  return response.data;
});
export const bestFoodSlice = createSlice({
  name: "bestFood",
  initialState: {
    status: "idle",
    data: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getBestFood.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getBestFood.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default bestFoodSlice.reducer;
