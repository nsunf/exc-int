import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "../dummyData/exchange.json";

const encodedData = data as Exchange[];

interface ExchangeState {
  todays: Exchange[];
  selected: string|null;
}

const initialState: ExchangeState = {
  todays: [...encodedData],
  selected: null
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    selectExchange: (state, action: PayloadAction<string>) => {
      const filteredExchange = state.todays.filter(exc => exc.cur_unit === action.payload);
      if (filteredExchange.length !== 1)
        state.selected = action.payload;
      else
        state.selected = null;
    },
    deselectExchange: (state) => {
      state.selected = null;
    }
  }
});

export const { selectExchange, deselectExchange } = exchangeSlice.actions;

export { exchangeSlice };
export default exchangeSlice.reducer;