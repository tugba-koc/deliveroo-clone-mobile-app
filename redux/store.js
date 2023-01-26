import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './reducer/basketSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
  },
});
