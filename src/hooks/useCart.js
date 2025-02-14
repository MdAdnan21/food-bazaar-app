import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, setRestaurant } from "../redux/slices/cartSlice";
import { useEffect } from "react";

const useCart = () => {
  const dispatch = useDispatch();
  const restaurant = useSelector((state) => state.cart.restaurant);
  const items = useSelector((state) => state.cart.items);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const billingDetails = useSelector((state) => state.cart.billingDetails);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  const setRestaurantData = (menu) => {
    useEffect(() => {
      if (menu?.cards) {
        const {
          name,
          costForTwoMessage,
          cuisines,
          sla,
          avgRating,
          avgRatingString,
          areaName,
          city,
          cloudinaryImageId,
        } = menu?.cards[2]?.card?.card?.info;
        dispatch(
          setRestaurant({
            name,
            costForTwoMessage,
            cuisines,
            sla,
            avgRating,
            avgRatingString,
            areaName,
            city,
            cloudinaryImageId,
          })
        );
      }
    }, [menu]);
  };

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const getQuantity = (id) => {
    const item = items.find((item) => item.id === id);
    return item ? item?.quantity : 0;
  };

  return {
    restaurant,
    items,
    setRestaurantData,
    addItemToCart,
    removeItemFromCart,
    getQuantity,
    totalItems,
    totalPrice,
    billingDetails,
  };
};

export default useCart;
