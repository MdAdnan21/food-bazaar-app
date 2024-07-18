import { useState } from "react";
import useCart from "../hooks/useCart";
import { CDN_URL } from "../utils/constants"
import { Minus, NonVeg, Plus, Veg } from "../utils/Icons"
import { normalizeItemData } from "../utils/miscellaneous";

const MenuList = ({data, showDescription}) => {
  const { addItemToCart, removeItemFromCart, getQuantity } = useCart();
  // console.log(data)
  const normalizedData = normalizeItemData(data);
  const {id, itemAttribute, name, price, defaultPrice, description, imageId} = normalizedData
  const [quantity, setQuantity] = useState(getQuantity(id))
  
  const addToCart = () => {
    const itemData = {id, name, price: price || defaultPrice, imageId, itemAttribute, description};
    addItemToCart(itemData);
  };

  const removeFromCart = () => {
    removeItemFromCart(id);
  };

  const addHandler = () => {
      if(quantity === 0){
        setQuantity(1)
        addToCart()
      }
  }
  const plusHandler = () => {
      setQuantity(quantity+1)
      addToCart()
  }
  const minusHandler = () => {
    if(quantity!=0){
      setQuantity(quantity-1)
      removeFromCart()
    }
  }
  let serves = "", details = "";
  if (description) {
    [serves, details] = description.split('|').map(part => part.trim());
  }

  return (
    <div className="px-2 py-3 mx-3 my-5 border-gray-300 border-b flex justify-between">
      <div className="w-9/12 flex flex-col justify-between h-full">
        <div className="flex items-center">
          <span className="mr-2">{itemAttribute?.vegClassifier === 'VEG'? <Veg /> : <NonVeg />}</span>
          <span className="py-2 text-md font-semibold">{name}</span>
        </div>
        <span className="font-medium">{" "} ₹{price ? price/100: defaultPrice/100}</span>
        {showDescription && 
          <div>
            <p className="text-sm text-gray-500 py-3">{serves}</p>
            <p className="text-sm text-gray-500 pb-3">{details}</p>
          </div>}
      </div>
      <div className="w-3/12 relative flex items-end justify-center">
        <div className="absolute my-3">
          <div
            className="flex items-center bg-white shadow-lg rounded-lg font-semibold text-md text-green-600 ">
            {quantity!=0 && 
              <button 
                onClick={minusHandler} 
                className="py-1 px-1 hover:rounded-s-lg  hover:bg-red-100">
                  <Minus />
              </button> }
            <button 
              onClick={addHandler}
              className={`py-1 px-2 ${quantity ? 'cursor-text hover:rounded-none' : 'px-7'} hover:bg-gray-200 hover: rounded-lg`}>
              {quantity<=0 ? 'Add' : quantity}
            </button> 
            {quantity!=0 && 
              <button 
                onClick={plusHandler} 
                className="py-1 px-1 hover:rounded-e-lg  hover:bg-green-100">
                <Plus />
              </button>}
          </div>
        </div>
        <div className="w-40 h-40">
          <img className="w-full h-full rounded-lg"  src={CDN_URL+imageId} alt="dish" />
        </div>
      </div>   
    </div>)
}

const ItemList = ({item, visible, showDescription}) => {
  // console.log(item)

  return (
    <div className={`${visible ? 'max-h-[1000vh]' : 'invisible max-h-0'} shadow-lg rounded-lg text-left transition-all duration-500 ease-in-out overflow-hidden auto-scroll`}>
        {item && item?.map( (data, index) => 
          <MenuList key={index} data={data} showDescription={showDescription} />
      )}
    </div>
  )
}

export default ItemList
