import { useState } from "react";
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard"
import { Link } from "react-router-dom"
import useOnlineStatus from "../hooks/useOnlineStatus";
import Carousel from "../components/Carousel";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";
import useResData from "../hooks/useResData";

const Home = () => {
  
  const [searchText, setsearchText] = useState('')

  const { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData } = useResData();

  // console.log("Restaurant: ", restaurants)
  console.log("FilteredRestaurants: ", filteredRestaurants)
  console.log("isLoading: ", isLoading)
  // console.log("CarouselDishData", carouselDishData)
  // console.log("CarouselResData", carouselResData)

  const onlineStatus = useOnlineStatus()
  
  if(!onlineStatus) return <h1>Looks like you are offline!! Please check your internet connection...</h1>

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  // const dispatch = useDispatch();
  // const { restaurants, filteredRestaurants, isLoading, error, carouselDishData, carouselResData } = useResData();

  return (
    <div className="body mt-[3%] mb-[5%] mx-[5%]">
      {/* <div className="filter flex items-center">
        <div className="m-4 p-4 flex items-center">
          <button 
            className="filter-btn px-4 py-2 bg-gray-100 rounded-lg shadow-lg" 
            onClick={ () => {
                // console.log(liveResData)
                if(filteredListOfRestaurant.filtered) {
                  setfilteredListOfRestaurat({data: listOfRestaurant, dataLoading:setfilteredListOfRestaurat.dataLoading, filtered: !filteredListOfRestaurant.filtered})
                } else {
                  const filteredList = filteredListOfRestaurant.data.filter(
                    (res) => res.info.avgRating > 4.3 
                  )
                  setfilteredListOfRestaurat({data: filteredList,dataLoading:setfilteredListOfRestaurat.dataLoading, filtered: !filteredListOfRestaurant.filtered})
                }
              }
            } 
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4">
          <input 
            type="text" 
            className="border border-solid border-black"
            onChange={ (e) => { 
              setsearchText(e.target.value) 
            }}
            value={searchText} 
          />
          <button 
            className="px-4 py-1 bg-green-100 m-4 rounded-lg shadow-lg"
            onClick={ () => {
              const filterData=listOfRestaurant.filter( (restaurant)=> {
                // console.log(restaurant.info.name.includes(searchText))
                return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              })
              // console.log(filterData)
              setfilteredListOfRestaurat({data: filterData, filtered: filteredListOfRestaurant.filtered})
            }}
          >Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
            <label className="mx-2">User Name:</label>
            <input 
              className="border border-black" 
              type="text" 
              value={loggedInUser}
              onChange={(e) => {setUserName(e.target.value)}} 
            />
        </div>
      </div> */}

      <Carousel 
        isLoading={isLoading}
        type={'Dish'}
        carouselData={ carouselDishData } 
      />

      <Carousel
        isLoading={isLoading}
        type={'Restaurant'}
        carouselData={ carouselResData } 
      />

      <h1 className='text-2xl font-extrabold mx-2  tablet:mx-5 my-2'>{filteredRestaurants?.heading}</h1>

      { isLoading ? 
      ( <RestaurantCardSkeleton /> ) : !filteredRestaurants.data?.length ? <h1 className="w-1/2 mx-auto my-10 text-3xl font-semibold text-[#fe8b00]">No data found</h1> : 
        <div className="flex flex-wrap my-13">
        {filteredRestaurants?.data?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={'/restaurant/'+restaurant?.info?.id}
          >
            {!restaurant?.info?.isOpen ? 
              (<RestaurantCardPromoted resData={restaurant} />) : 
              (<RestaurantCard resData={restaurant} />)}
          </Link>))
        }
      </div>
      }
    </div>
  )}

  export default Home;