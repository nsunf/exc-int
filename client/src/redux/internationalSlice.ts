import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import internationalData from '../dummyData/international.json';

interface InternationalState {
  data: International[];
}

const initialState: InternationalState = {
  data: [...internationalData]
}

const internationalSlice = createSlice({
  name: 'international',
  initialState, 
  reducers: {
  }
})

export const { } = internationalSlice.actions;

export { internationalSlice };
export default internationalSlice.reducer;