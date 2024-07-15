import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurantMenu } from '../redux/slices/resMenuDataSlice';

const useResMenuData = (resId) => {
  const dispatch = useDispatch();
  const { menu, isLoading, error } = useSelector((state) => state.resMenuData);

  useEffect(() => {
    dispatch(fetchRestaurantMenu(resId));
  }, [dispatch, resId]);

  return { menu, isLoading, error };
};

export default useResMenuData;
