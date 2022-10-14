import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import data from "../dummyData/exchange.json";
import usData from "../dummyData/usExchange.json";

interface ExchangeState {
  todays: Exchange[];
  selected: ExchangeDetail|null;
}

const initialState: ExchangeState = {
  todays: data as Exchange[],
  selected: {
    info: data[data.length - 1],
    deal_bas_r_arr: usData
  } as ExchangeDetail
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    selectExchange: (state, action: PayloadAction<string>) => {
      const filteredExchange = state.todays.filter(exc => exc.cur_unit === action.payload);
      if (filteredExchange.length !== 1) {
        // state.selected.unit = action.payload;
        // state.selected = 
      } else {
        state.selected = null;
      }
    },
    deselectExchange: (state) => {
      state.selected = null;
    }
  }
});

export const { selectExchange, deselectExchange } = exchangeSlice.actions;

export { exchangeSlice };
export default exchangeSlice.reducer;