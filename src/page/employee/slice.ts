import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { EmployeeData } from "./employee.type";
import { Employees_URL } from "../../constants/employees";

export interface dataState {
  loading: boolean;
  error: string | null;
  employeeItems: EmployeeData[];
}
const initialState: dataState = {
  loading: false,
  error: null,
  employeeItems: [],
};
export const getEmployees = createAsyncThunk<
  EmployeeData[],
  void,
  { rejectValue: string }
>("employees/getEmployees", async (_, thunkApi) => {
  try {
    const response = await fetch(Employees_URL);
    if (!response.ok) {
      return thunkApi.rejectWithValue("data request was failed");
    }
    const data: EmployeeData[] = await response.json();
    return data;
  } catch {
    return thunkApi.rejectWithValue("data request was failed");
  }
});
export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEmployees.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "unknown error";
      })
      .addCase(
        getEmployees.fulfilled,
        (state, action: PayloadAction<EmployeeData[]>) => {
          state.loading = false;
          state.error = null;
          state.employeeItems = action.payload;
        },
      );
  },
});
export default employeeSlice.reducer;
