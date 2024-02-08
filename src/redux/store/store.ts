import { configureStore } from "@reduxjs/toolkit";

import mailsReducer from "../slices/mailSlice";
import messageReducer from "../slices/messageSlice";

const store = configureStore({
  reducer: {
    mails: mailsReducer,
    messge: messageReducer,
  },
});

export default store;
