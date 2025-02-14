import { useEffect, useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Carousel from "../components/Carousel";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";
import useResData from "../hooks/useResData";
import Unserviceable from "../components/Unserviceable";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const Home = () => {
  const [searchText, setsearchText] = useState("");

  const {
    restaurants,
    filteredRestaurants,
    isLoading,
    error,
    carouselDishData,
    carouselResData,
    updateRestaurants,
  } = useResData();

  // console.log("Restaurant: ", restaurants)
  // console.log("FilteredRestaurants: ", filteredRestaurants);
  // console.log("isLoading: ", isLoading);
  // console.log("CarouselDishData", carouselDishData)
  // console.log("CarouselResData", carouselResData)

  const { loadingMore } = useInfiniteScroll(restaurants);

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection...
      </h1>
    );

  // const dispatch = useDispatch();
  // const { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData } = useResData();

  // const {restaurant} = useCart()
  // console.log('ResSlice: ',restaurant)

  return (
    <div className="body mt-[3%] mb-[5%] mx-[5%]">
      <Carousel
        isLoading={isLoading}
        type={"Dish"}
        carouselData={carouselDishData}
      />

      <Carousel
        isLoading={isLoading}
        type={"Restaurant"}
        carouselData={carouselResData}
      />

      <h1 className="text-2xl font-extrabold mx-2  tablet:mx-5 my-2">
        {filteredRestaurants?.heading}
      </h1>

      {isLoading ? (
        <RestaurantCardSkeleton showHeading={loadingMore} />
      ) : !filteredRestaurants?.data?.length ? (
        <Unserviceable />
      ) : (
        <div className="flex flex-wrap my-13">
          {filteredRestaurants?.data?.map((restaurant) => (
            <Link
              key={restaurant?.info?.id}
              to={"/restaurant/" + restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
          {loadingMore && <RestaurantCardSkeleton showHeading={false} />}
        </div>
      )}
    </div>
  );
};

export default Home;
