import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import tipReducer from "../features/tips/tipSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tips: tipReducer,
  },
});
