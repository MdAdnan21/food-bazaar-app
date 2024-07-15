import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurnantMenu";
import RestaurantCategory from "../components/RestaurantCategory";
import RestaurantCardSkeleton from "../skeletons/RestaurantCardSkeleton";
import useResMenuData from "../hooks/useResMenuData";


const RestaurantMenu = () => {
  const { resId } = useParams()
  const [showIndex, setShowIndex] = useState(0)
  const { menu, isLoading, error } = useResMenuData(resId);

  console.log("menu: ",menu)

  if (isLoading) return <RestaurantCardSkeleton />;

  if (error) return <h1>Error: {error}</h1>;

  const { name, cuisines, costForTwoMessage } = menu?.cards[2]?.card?.card?.info;
  let categories = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
  console.log(categories)
  categories=categories?.filter(
    (c) => 
      c.card.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  );
  // console.log(categories)
  return (
    <div className="text-center mt-[3%] mb-[5%] mx-[5%]">
      <h1 className="font-bold text-2xl my-5">{name}</h1>
      <p className="font-bold text-sm">{cuisines.join(', ')} - {costForTwoMessage}</p>
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