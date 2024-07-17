import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import Carousel from "../components/Carousel";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";
import useResData from "../hooks/useResData";
import unserviceable from "../images/unserviceable.png";

const Home = () => {
  const [searchText, setsearchText] = useState("");

  const { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData} = useResData();

  // console.log("Restaurant: ", restaurants)
  console.log("FilteredRestaurants: ", filteredRestaurants);
  console.log("isLoading: ", isLoading);
  // console.log("CarouselDishData", carouselDishData)
  // console.log("CarouselResData", carouselResData)

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection...
      </h1>
    );

  if (!restaurants?.length) {
    return (
      <div className="mt-[3%] mb-[5%] mx-[5%] flex justify-center">
        <img className="shadow-lg" src={unserviceable} alt="unserviceable" />
      </div>
    );
  }

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
        <RestaurantCardSkeleton />
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
        </div>
      )}
    </div>
  );
};

export default Home;
