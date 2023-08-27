import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

export const HeaderSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      console.log(action.payload);
    },
  },
});

export const { setSearch } = HeaderSlice.actions;
export default HeaderSlice.reducer;
