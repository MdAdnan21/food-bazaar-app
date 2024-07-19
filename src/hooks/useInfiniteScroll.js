import { useEffect, useState } from 'react';
import { RESTAURANT_UPDATE_API } from '../utils/constants';
import useResData from './useResData';

const useInfiniteScroll = (restaurants) => {
  const [endReached, setEndReached] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const { updateRestaurants } = useResData()

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [restaurants, endReached]);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement || document.body;

    if (scrollTop + clientHeight >= scrollHeight - 10 && !endReached) {
      console.log('End reached');
      updateApi();
      setEndReached(true);
    } else if (scrollTop + clientHeight < scrollHeight - 10 && endReached) {
      setEndReached(false);
    }
  };

  const updateApi = async () => {
    setLoadingMore(true);
    try {
      const response = await fetch(RESTAURANT_UPDATE_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ startIndex: restaurants.length + 1 }),
      });

      const data = await response.json();
      const newRestaurants = data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      updateRestaurants(newRestaurants)
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoadingMore(false);
    }
  };

  return { loadingMore };
};

export default useInfiniteScroll;
