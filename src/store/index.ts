import { configureStore } from "@reduxjs/toolkit";

import { positionSlice } from "../page/position/slice";
import { taskSlice } from "../page/tasks/slice";

const store = configureStore({
  reducer: { position: positionSlice.reducer, tasks: taskSlice.reducer },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
