import { configureStore } from "@reduxjs/toolkit";
import exchangeReducer from "./exchangeSlice";
import interestReducer from "./interestSlice";
import internationalReducer from "./internationalSlice";

const store = configureStore({
  reducer: {
    exchange: exchangeReducer,
    interest: interestReducer,
    international: internationalReducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;