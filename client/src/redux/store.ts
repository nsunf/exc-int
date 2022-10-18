import { configureStore } from "@reduxjs/toolkit";
import exchangeReducer from "./exchangeSlice";
import interestReducer from "./interestSlice";

const store = configureStore({
  reducer: {
    exchange: exchangeReducer,
    interest: interestReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;