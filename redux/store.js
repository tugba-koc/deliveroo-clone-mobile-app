import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './reducer/basketSlice';
import restaurantSlice from './reducer/restaurantSlice';

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    restaurant: restaurantSlice
  },
});
