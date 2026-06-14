import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { POSITION_URL } from "../../constants/positions.ts";
import type { DataPositions } from "./position.type";
export interface dataState {
  loading: boolean;
  error: string | null;
  positionsItems: DataPositions[];
}
const initialState: dataState = {
  loading: false,
  error: null,
  positionsItems: [],
};
export const getPositions = createAsyncThunk<
  DataPositions[],
  void,
  { rejectValue: string }
>("positions/getPositions", async (_, thunkApi) => {
  try {
    const response = await fetch(POSITION_URL);
    if (!response.ok) {
      return thunkApi.rejectWithValue("data request was failed");
    }
    const data: DataPositions[] = await response.json();
    return data;
  } catch {
    return thunkApi.rejectWithValue("position data request was failed");
  }
});
export const positionSlice = createSlice({
  name: "position",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPositions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPositions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "unknown error";
      })
      .addCase(
        getPositions.fulfilled,
        (state, action: PayloadAction<DataPositions[]>) => {
          state.loading = false;
          state.error = null;
          state.positionsItems = action.payload;
        },
      );
  },
});
export default positionSlice.reducer;
