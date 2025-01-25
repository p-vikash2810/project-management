import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateType {
  isSidebarCollapsed: boolean;
  isdarkMode: boolean;
}
const initialState: initialStateType = {
  isSidebarCollapsed: false,
  isdarkMode: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isdarkMode = action.payload;
    },
  },
});

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
