import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { DataTasks } from "./task.type";
import { TASK_URL } from "../../constants/tasks";
export interface TaskState {
  tasks: DataTasks[];
  loading: boolean;
  error: string | null;
}
const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};
export const getTasks = createAsyncThunk<
  DataTasks[],
  void,
  { rejectValue: string }
>("tasks/getTasks", async (_, thunkApi) => {
  try {
    const response = await fetch(TASK_URL);
    if (!response.ok) {
      thunkApi.rejectWithValue("data request was failed");
    }
    const data = response.json();
    return data;
  } catch {
    thunkApi.rejectWithValue("data request was failed");
  }
});

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        getTasks.fulfilled,
        (state, action: PayloadAction<DataTasks[]>) => {
          state.loading = false;
          state.error = null;
          state.tasks = action.payload;
        },
      )
      .addCase(getTasks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "unkown error";
      });
  },
});
export default taskSlice.reducer;
