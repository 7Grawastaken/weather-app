import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "metric",
};

export const selectedUnitSlice = createSlice({
  name: "selectedUnit",
  initialState,
  reducers: {
    setSelectedUnit: (
      state: { value: string },
      action: PayloadAction<"metric" | "us">,
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setSelectedUnit } = selectedUnitSlice.actions;
export default selectedUnitSlice.reducer;
