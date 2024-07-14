import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "../components/RestaurantCard"
import { Link } from "react-router-dom"
import { RESTAURANT_DATA_API } from "../utils/constants";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Carousel from "../components/Carousel";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";

const Home = () => {
  
  const [listOfRestaurant, setlistOfRestaurant] = useState([])
  const [filteredListOfRestaurant, setfilteredListOfRestaurat] = useState({data: [], filtered: false})
  const [isLoading, setIsLoading] = useState(true)
  const [searchText, setsearchText] = useState('')
  const {loggedInUser, setUserName} = useContext(UserContext) 
  const [carouselDishData, setCarouselDishData] = useState([])
  const [carouselResData, setCarouselResData] = useState([])

  useEffect( () => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
        RESTAURANT_DATA_API
    );
    const json = await data.json();
    console.log(json)
    setIsLoading(false)

    const liveCarouselDishData = {
      data: json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info, 
      heading: json?.data?.cards[0]?.card?.card?.header?.title
    }
    setCarouselDishData(liveCarouselDishData)

    const liveCarouselResData = {
      data: json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants, 
      heading: json?.data?.cards[1]?.card?.card?.header?.title
    }
    setCarouselResData(liveCarouselResData)
    // console.log(liveCarouselData)

    const liveResData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setlistOfRestaurant(liveResData)
    setfilteredListOfRestaurat({data: liveResData,heading: 'Top restaurant chains in Nagpur',  dataLoading: false, filtered: false})
    // console.log(filteredListOfRestaurant.data)
  }

  const onlineStatus = useOnlineStatus()
  if(!onlineStatus) return <h1>Looks like you are offline!! Please check your internet connection...</h1>

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

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

      <h1 className='text-2xl font-extrabold mx-2  tablet:mx-5 my-2'>{filteredListOfRestaurant?.heading}</h1>

      { isLoading ? 
      ( <RestaurantCardSkeleton /> ) : !filteredListOfRestaurant.data?.length ? <h1 className="no-data">No data found</h1> : 
        <div className="flex flex-wrap my-13">
        {filteredListOfRestaurant?.data?.map((restaurant) => (
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