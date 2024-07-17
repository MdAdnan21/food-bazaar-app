import React from 'react'
import useCart from '../hooks/useCart'
import { CDN_URL } from '../utils/constants'
import { Location, Rating, Time } from '../utils/Icons'
import { getRatingColorClass } from '../utils/miscellaneous'
import EmptyCart from '../images/Empty-cart.png'
import _ from 'lodash'

const Cart = () => {
  const {items, restaurant, totalPrice, billingDetails} = useCart() 
  console.log("bills: ", billingDetails)
  if (_.isEmpty(restaurant)){
    return (
      <div className='mt-[3%] mb-[5%] mx-[5%]'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='my-2 text-4xl font-semibold text-default text-center'>Your Cart is Empty!</h1>
          <img className='' src={EmptyCart} alt="empty cart" />
        </div>
      </div>
    )
  }

  const {  name, avgRating, avgRatingString, areaName, city, cloudinaryImageId } = restaurant
  return (
    <div className='mt-[3%] mb-[5%] mx-5 flex flex-wrap justify-center'>
      <div className='w-full flex justify-between items-start'>
        <div className="my-3 mx-auto p-5 flex w-10/12 tablet:8/12 desktop:w-5/12 shadow-lg rounded-lg">
          <div className="m-5 text-left flex flex-col w-1/2">
            <h1 className="font-bold text-2xl my-3">{name}</h1>
            <p className={`mt-1 mb-2 pt-[1px] pb-[2px] px-[6px] w-16 inline-flex items-center max-w-fit ${getRatingColorClass(avgRating)} rounded-lg text-white items-baseline font-semibold`}>{avgRatingString === "--" ? '4.0' : avgRatingString} <Rating /></p>
            <p className="flex items-center my-4 font-semibold text-gray-700"><Location style={'text-red-600 text-2xl mr-2'} /> {areaName+', '+city}</p>
          </div>
          <div className="m-5 w-40 h-40">
            <img 
              className="w-full h-full object-cover rounded-lg"
              src={ CDN_URL + cloudinaryImageId }
              alt='Restaurant Card'
            />
          </div>
        </div>
        <div className='my-3 mr-10 p-5 flex flex-col shadow-lg rounded-lg'>
          <h1 className='m-3 p-2 text-3xl font-bold text-default'>Oder Summary</h1>
          <ul className='mx-3 p-2'>
            {billingDetails?.map(({ dishName, times, price, totalPrice }, index) => (
              <li key={index} className="flex justify-between mt-2 mb-5 text-lg text-gray-500">
                <span className='mx-2'>{dishName} x {times}</span>
                <span className='mx-2'>₹{totalPrice.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between m-3 p-2 font-bold text-xl">
            <span className='mx-2'>Total Bill</span>
            <span className='mx-2'>₹{totalPrice.toFixed(2)}</span>
          </div>
          <button className="mx-5 shadow-lg bg-[#fe8b00] text-white text-xl font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform">
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart;
