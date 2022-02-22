import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartIsShown: false,
  notification: null,
  items: [],
  changed: false,
};

const cartSlice = createSlice({
  name: "cartReducer",
  initialState: initialCartState,
  reducers: {
    cartToggle(state) {
      state.cartIsShown = !state.cartIsShown;
    },
    showNotification(state, action) {
      state.notification = action.payload;
    },
    replaceCart(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      const existingItem = state.items.find(
        (i) => i.title === action.payload.title
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items = [...state.items, action.payload];
      }
      state.changed = true;
    },
    removeItem(state, action) {
      const existingItem = state.items.find(
        (i) => i.title === action.payload.title
      );
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (i) => i.title !== action.payload.title
        );
      } else {
        existingItem.quantity--;
      }
      state.changed = true;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
