import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurnantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";

const RestaurantMenu = () => {
  const { resId } = useParams()
  const resInfo = useRestaurantMenu(resId)
  const [showIndex, setShowIndex] = useState(0)
  
  console.log(resInfo, resId)
  if(!resInfo) return <RestaurantCardSkeleton />

  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  let categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  //   console.log(categories)
  categories=categories.filter(
    (c) => 
      c.card.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  // console.log(showIndex)
  return (
    <div className="text-center m-4">
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <p className="font-bold text-sm">{cuisines.join(', ')} - {costForTwoMessage}</p>
      {categories.map( (category, index) => (
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