import { configureStore } from "@reduxjs/toolkit";
import mailsReducer from "../slices/MailsSlice";

const store = configureStore({
  reducer: {
    mails: mailsReducer,
  },
});

export default store;
