import { configureStore } from '@reduxjs/toolkit';
import resDataReducer from './slices/resDataSlice';
import resMenuDataReducer from './slices/resMenuDataSlice';
import cartReducer from './slices/cartSlice'

const store = configureStore({
  reducer: {
    resData: resDataReducer,
    resMenuData: resMenuDataReducer,
    cart: cartReducer,
  },
});

export default store;
