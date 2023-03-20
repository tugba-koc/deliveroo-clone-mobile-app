import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    items: [],
    basketRestaurant: null,
  },
  reducers: {
    emptyBasket: (state) => {
      state.items = [];
      state.basketRestaurant = null;
    },
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload.basket];
      state.basketRestaurant = action.payload.basketRestaurant;
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload);
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else {
        // console.log('There is no product with this ' + action.payload);
      }
      if (!newBasket.length) {
        state.basketRestaurantId = null;
      }
    },
  },
});

export const selectBasketItems = (state) => state.basket.items;
export const selectBasketRestaurant = (state) =>
  state.basket.basketRestaurant;

// filter items sccording to its id.
export const selectBasketItemsWithId = (state, id) =>
  state.basket?.items?.filter((item) => item.id === id);

// total price
export const selectTotalBasket = (state) =>
  state.basket?.items?.reduce((total, item) => total + item.price, 0);

export const { addToBasket, removeFromBasket, emptyBasket } =
  basketSlice.actions;
export default basketSlice.reducer;
