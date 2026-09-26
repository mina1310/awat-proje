import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { UserData } from "./user.type";
import { USER_URL } from "../../constants/user";

export interface dataState {
  loading: boolean;
  error: string | null;
  userItems: UserData[];
}
const initialState: dataState = {
  loading: false,
  error: null,
  userItems: [],
};
export const getUsers = createAsyncThunk<
  UserData[],
  void,
  { rejectValue: string }
>("users/getUsers", async (_, thunkApi) => {
  try {
    const response = await fetch(USER_URL);
    if (!response.ok) {
      return thunkApi.rejectWithValue("data request was failed");
    }
    const data: UserData[] = await response.json();
    return data;
  } catch {
    return thunkApi.rejectWithValue("user data request was failed");
  }
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "unknown error";
      })
      .addCase(
        getUsers.fulfilled,
        (state, action: PayloadAction<UserData[]>) => {
          state.loading = false;
          state.error = null;
          state.userItems = action.payload;
        },
      );
  },
});
export default userSlice.reducer;
