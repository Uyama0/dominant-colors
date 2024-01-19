import { createSlice } from "@reduxjs/toolkit";

const MailsSlice = createSlice({
  name: "mails",
  initialState: {
    data: null,
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

export const { setData, setError } = MailsSlice.actions;
export default MailsSlice.reducer;
