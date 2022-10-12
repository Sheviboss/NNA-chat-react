import { configureStore } from '@reduxjs/toolkit';
import ProfileReducer from '../slices/ProfileSlice';

export const store = configureStore({
  reducer: {
    profile: ProfileReducer,
  },
});
