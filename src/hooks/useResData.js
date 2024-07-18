import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addRestaurants, fetchRestaurants } from '../redux/slices/resDataSlice';

const useResData = () => {
  const dispatch = useDispatch();
  const { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData } = useSelector(
    (state) => state.resData
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  const updateRestaurants = (newRestaurants) => {
    dispatch(addRestaurants(newRestaurants));
  };

  return { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData, updateRestaurants };
};

export default useResData;
