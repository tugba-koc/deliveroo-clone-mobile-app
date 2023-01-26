import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      if (index >= 0) {
        let newBasket = [...state.items];
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else {
        console.log('There is no product with this ' + action.payload);
      }
    },
  },
});

export const selectItems = (state) => state.basket.items;

// filter items sccording to its id.
export const selectBasketItemsWithId = (state, id) =>
  state.basket?.items?.filter((item) => item.id === id);

// total price
export const selectTotalBasket = (state) =>
  state.basket?.items?.reduce(
    (total, item) => total + item.price,
    0
  );

export const { addToBasket, removeFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
