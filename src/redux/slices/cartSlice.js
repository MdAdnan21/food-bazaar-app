// src/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: {},
  items: [],
  totalItems: 0,
  billingDetails: [],
  totalPrice: 0,
};

const calculateTotals = (items) => {
  let totalItems = 0;
  let totalPrice = 0;
  const billingDetails = items.map(item => {
    totalItems += item.quantity;
    const itemTotalPrice = item.price/100 * item.quantity;
    totalPrice += itemTotalPrice;
    return {
      dishName: item.name,
      times: item.quantity,
      price: item.price/100,
      totalPrice: itemTotalPrice,
    };
  });
  return { totalItems, billingDetails, totalPrice };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      const totals = calculateTotals(state.items);
      state.totalItems = totals.totalItems;
      state.billingDetails = totals.billingDetails;
      state.totalPrice = totals.totalPrice;
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== id);
        }

        const totals = calculateTotals(state.items);
        state.totalItems = totals.totalItems;
        state.billingDetails = totals.billingDetails;
        state.totalPrice = totals.totalPrice;
      }
    },
  },
});

export const { setRestaurant, addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
