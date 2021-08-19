import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import trackSlice from "./trackSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    track: trackSlice
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;