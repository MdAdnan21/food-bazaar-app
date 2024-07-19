import React from 'react'
import comming_soon from '../images/comming-soon.png'

const Grocery = () => {
    return (
      <div className='mt-[3%] mb-[5%] mx-[5%] flex flex-col justify-center items-center fade-in'>
        <img className='h-[30%] w-[30%]' src={comming_soon} alt="comming-soon" />
        <h1 className='text-default text-4xl font-semibold text-center'>This is basically added to test Lazy loading of a component!</h1>  
      </div>
    )
  }
  
  export default Grocery;