import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface State {
  value: string;
}

const initialState: State = {
  value: "London",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state: State, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
