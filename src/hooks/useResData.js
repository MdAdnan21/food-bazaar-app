import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../redux/slices/resDataSlice';

const useResData = () => {
  const dispatch = useDispatch();
  const { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData } = useSelector(
    (state) => state.resData
  );

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, [dispatch]);

  return { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData };
};

export default useResData;
