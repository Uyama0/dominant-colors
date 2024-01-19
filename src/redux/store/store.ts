import { configureStore } from "@reduxjs/toolkit";
import mailsReducer from "../slices/mailSlice";

const store = configureStore({
  reducer: {
    mails: mailsReducer,
  },
});

export default store;
