import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import RestaurantCategory from "../components/RestaurantCategory";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";
import useResMenuData from "../hooks/useResMenuData";
import { getRatingColorClass } from "../utils/miscellaneous";
import { Rating, Time, Location } from "../utils/Icons";


const RestaurantMenu = () => {
  const { resId } = useParams()
  const [showIndex, setShowIndex] = useState(0)
  const { menu, isLoading, error } = useResMenuData(resId);

  console.log("menu: ",menu)

  if (isLoading) return <RestaurantCardSkeleton />;

  if (error) return <h1>Error: {error}</h1>;

  const {  name, costForTwoMessage, cuisines, sla, avgRating, avgRatingString, areaName, city, cloudinaryImageId } = menu?.cards[2]?.card?.card?.info;
  let categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  console.log(categories)
  categories=categories?.filter(
    (c) => 
      c.card.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  // console.log(categories)
  return (
    <div className="text-center mt-[3%] mb-[5%] mx-[5%]">
      <div className="my-3 p-5 flex flex-wrap justify-between w-10/12 tablet:8/12 desktop:w-7/12 mx-auto shadow-lg rounded-lg">
        <div className="m-5 text-left">
          <h1 className="font-bold text-3xl my-3">{name}</h1>
          <p className={`mt-1 mb-2 pt-[1px] pb-[2px] px-[6px] inline-flex items-center ${getRatingColorClass(avgRating)} rounded-lg text-white items-baseline font-semibold`}>{avgRatingString === "--" ? '4.0' : avgRatingString} <Rating /></p>
          <p className="my-2 text-md mb-3 text-gray-700 font-semibold">{cuisines.join(', ')} - {costForTwoMessage}</p>
          <p className="my-4 text-gray-900 font-bold flex items-center"><Time style={'text-xl mr-2'} /> {sla.slaString}</p>
          <p className="flex items-center my-4 font-semibold text-gray-700"><Location style={'text-red-600 text-2xl mr-2'} /> {areaName+', '+city}</p>
        </div>
        <div className="m-5 w-48 h-48">
          <img 
            className="w-full h-full object-cover rounded-lg"
            src={ CDN_URL + cloudinaryImageId }
            alt='Restaurant Card'
          />
        </div>
      </div>
      {!categories.length && <h1 className="w-1/2 mx-auto my-10 text-3xl font-semibold text-[#fe8b00]">Sometimes the data is structured diffrently in the Swiggy's backend try refreshing the page or select a diffrent restaurant card!</h1>}
      {categories?.map( (category, index) => (
        <RestaurantCategory  
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItem={showIndex === index}
          index={index}
          setShowItem={() => { setShowIndex(prevIndex => (prevIndex === index ? -1 : index))} }
        />
      ))}
    </div>  
  );
}

export default RestaurantMenu