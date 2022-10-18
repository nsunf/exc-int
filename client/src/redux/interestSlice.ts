import { createSlice } from "@reduxjs/toolkit";

import dummyData from "../dummyData/interest.json";

interface InterestState {
  data: Interest[];
}

const initialState: InterestState = {
  data: [...dummyData]
};

const interestSlice = createSlice({
  name: 'interest',
  initialState,
  reducers: {

  }
});

export const { } = interestSlice.actions;

export { interestSlice };
export default interestSlice.reducer;