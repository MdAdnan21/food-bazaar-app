import { CDN_URL } from "../utils/constants"
import { NonVeg, Veg } from "../utils/Icons"

const ItemList = ({item, visible}) => {
  // console.log(item)
  return (
    <div className={`${visible ? 'max-h-[1000vh]' : 'invisible max-h-0'} shadow-lg rounded-lg text-left transition-all duration-500 ease-in-out overflow-hidden auto-scroll`}>
        {item?.map( (data) => {
          const {id, itemAttribute, name, price, defaultPrice, description, imageId} = data.card.info
          const [serves, details] = description.split('|').map(part => part.trim());
          return (
          <div key={id} className="px-2 py-3 mx-3 my-5 border-gray-300 border-b flex justify-between">
            <div className="w-9/12 flex flex-col justify-between h-full">
              <div className="flex items-center">
                <span className="mr-2">{itemAttribute?.vegClassifier === 'VEG'? <Veg /> : <NonVeg />}</span>
                <span className="py-2 text-md font-semibold">{name}</span>
              </div>
              <span className="font-medium">{" "} ₹{price ? 
                price/100 : defaultPrice/100 }
              </span>
              <p className="text-sm text-gray-500 py-3">{serves}</p>
              <p className="text-sm text-gray-500 pb-3">{details}</p>
            </div>
            <div className="w-3/12 relative flex items-end justify-center">
              <div className="absolute my-3">
                <button className="px-4 py-1 bg-white shadow-lg rounded-lg font-semibold text-md text-green-600 hover:bg-gray-200">Add +</button>
              </div>
              <div className="w-40 h-40">
                <img className="w-full h-full rounded-lg"  src={CDN_URL+imageId} alt="dish" />
              </div>
            </div>
            
          </div>)
        }
      )}
    </div>
  )
}

export default ItemList
