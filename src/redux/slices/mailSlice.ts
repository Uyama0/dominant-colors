import { createSlice } from "@reduxjs/toolkit";

const mailSlice = createSlice({
  name: "mails",
  initialState: {
    data: {},
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setError } = mailSlice.actions;
export default mailSlice.reducer;
