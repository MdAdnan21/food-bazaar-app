import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RESTAURANT_DATA_API } from '../../utils/constants';


// Async thunk for fetching restaurant data
export const fetchRestaurants = createAsyncThunk(
  'resData/fetchRestaurants',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(RESTAURANT_DATA_API);
      if (!response.ok) {
        return thunkAPI.rejectWithValue('Failed to fetch swiggy restaurants api');
      }
      const data = await response.json();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const resDataSlice = createSlice({
  name: 'resData',
  initialState: {
    restaurants: [],
    filteredRestaurants: { data: [], filtered: false },
    isLoading: true,
    error: null,
    carouselDishData: [],
    carouselResData: [],
  },
  reducers: {
    filterRestaurants: (state) => {
      if (state.filteredRestaurants.filtered) {
        state.filteredRestaurants = { data: state.restaurants, filtered: false };
      } else {
        state.filteredRestaurants = {
          data: state.restaurants.filter((res) => res.info.avgRating > 4.3),
          filtered: true,
        };
      }
    },
    searchRestaurants: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredRestaurants = {
        data: state.restaurants.filter((restaurant) =>
          restaurant.info.name.toLowerCase().includes(searchText)
        ),
        filtered: state.filteredRestaurants.filtered,
      };
    },
    addRestaurants: (state, action) => {
      state.restaurants = [...state.restaurants, ...action.payload];
      state.filteredRestaurants = {
        data: [...state.restaurants],
        filtered: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload;

        state.carouselDishData = {
          data: data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info,
          heading: data.cards[0]?.card?.card?.header?.title,
        };

        state.carouselResData = {
          data: data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
          heading: data.cards[1]?.card?.card?.header?.title,
        };

        state.restaurants = data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        state.filteredRestaurants = {
          data: state.restaurants,
          heading: 'Restaurants with online food delivery in Nagpur',
          filtered: false,
        };
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { filterRestaurants, searchRestaurants, addRestaurants } = resDataSlice.actions;

export default resDataSlice.reducer;
