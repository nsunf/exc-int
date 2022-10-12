import { configureStore } from "@reduxjs/toolkit";
import exchangeReducer from "./exchangeSlice";

const store = configureStore({
  reducer: {
    exchange: exchangeReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;