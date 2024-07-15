import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RESTAURANT_MENU_API } from '../../utils/constants';

// Async thunk for fetching restaurant menu data
export const fetchRestaurantMenu = createAsyncThunk(
  'resMenuData/fetchRestaurantMenu',
  async (resId, thunkAPI) => {
    try {
      const response = await fetch(RESTAURANT_MENU_API + resId);
      if (!response.ok) {
        return thunkAPI.rejectWithValue('Failed to fetch swiggy restaurant menu api');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const resMenuDataSlice = createSlice({
  name: 'resMenuData',
  initialState: {
    menu: {},
    isLoading: true,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurantMenu.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRestaurantMenu.fulfilled, (state, action) => {
        state.isLoading = false;
        state.menu = action.payload;
      })
      .addCase(fetchRestaurantMenu.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default resMenuDataSlice.reducer;
