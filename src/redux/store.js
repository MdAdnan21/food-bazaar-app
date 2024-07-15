import { configureStore } from '@reduxjs/toolkit';
import resDataReducer from './slices/resDataSlice';
import resMenuDataReducer from './slices/resMenuDataSlice';

const store = configureStore({
  reducer: {
    resData: resDataReducer,
    resMenuData: resMenuDataReducer,
  },
});

export default store;
