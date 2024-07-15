import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { Bars, CartIcon, Close } from "../utils/Icons";
import Logo from "../images/Logo.png"
import SideMenu from "./SideMenu";


const Header = () => {
  
  const [btnName, setbtnName] = useState('Sign In')
  const [showNavItems, setShowNavItems] = useState(false)

  const onlineStatus = useOnlineStatus()
  const cartItemCount = 2;

  return (
    <div className="flex justify-between flex-col mx-5 shadow-lg transition duration-1000 ease-out">
      <div className="flex flex-row justify-between">
        <Link to="/" className="flex items-center w-3/12 mx-[4%]">
          <img className="w-24 mx-5 my-2" 
              src={ Logo }
              alt="logo" 
          />
          <div>
            <p className="hidden mobile:block text-[#211b16] font-extrabold text-3xl uppercase whitespace-nowrap">Foodzy</p>
            <p className="hidden mobile:block text-[#fe8b00] font-semibold text-center text-sm whitespace-nowrap">Order your healthy food now!</p>
          </div>
        </Link>
        <div className=" hidden items-center tablet:flex desktop:w-6/12">
          <ul className="flex p-4 m-4 w-full justify-center">
            <li><Link to='/' className="py-1 mx-1 px-4 font-medium text-lg hover:text-[#fe8b00] underline-animation whitespace-nowrap">Home</Link></li>
            <li><Link to='/about' className="py-1 mx-1 px-4 font-medium text-lg hover:text-[#fe8b00] underline-animation whitespace-nowrap">About</Link></li>
            <li><Link to='/contact' className="py-1 mx-1 px-4 font-medium text-lg hover:text-[#fe8b00] underline-animation whitespace-nowrap">Contact Us</Link></li>
            <li><Link to='/grocery' className="py-1 mx-1 px-4 font-medium text-lg hover:text-[#fe8b00] underline-animation whitespace-nowrap">Grocery</Link></li>
          </ul>
        </div>
        <div className="flex items-center justify-center w-7/12 mobile:w-5/12 tablet:w-3/12 desktop:w-3/12">
          <Link to='/cart' className="hidden smobile:inline relative mx-3 px-3 py-0.5 text-lg group underline-animation">
            <CartIcon />
            {cartItemCount && (
              <span className="absolute -top-1 right-1.5 bg-red-600 group-hover:bg-[#fe8b00] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button
            // onClick={() => setShowSideMenu(!showSideMenu)}
            className="mx-5 shadow-lg bg-[#fe8b00] text-white font-medium px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap"
          >
            Sign In
          </button>
          <button className="mx-4 w-12"  onClick={() => { setShowNavItems(!showNavItems)} }>
            {showNavItems ? <Close/> : <Bars /> }
          </button>
        </div>
      </div> 
        <div className={`${showNavItems ? 'max-h-80' : 'max-h-0 invisible'}  flex items-center transition-all duration-500 ease-in-out overflow-hidden`}>
          <ul className="px-4 mt-2 mb-6 mx-4 w-full min-h-full flex flex-col items-center">
            <li className="mt-2"><Link to='/cart' className="inline smobile:hidden relative mx-3 px-3 py-0.5 text-lg group underline-animation">
                <CartIcon />
                {cartItemCount && (
                  <span className="absolute -top-1 right-1.5 bg-red-600 group-hover:bg-[#fe8b00] text-white rounded-full h-4 w-4 flex items-center justify-center text-xs">
                    {cartItemCount}
                  </span>
                )}
            </Link></li>
            <li className="my-2"><Link to='/' className="px-4 font-medium text-xl hover:text-[#fe8b00] underline-animation whitespace-nowrap">Home</Link></li>
            <li className="my-2"><Link to='/about' className="px-4 font-medium text-xl hover:text-[#fe8b00] underline-animation whitespace-nowrap">About</Link></li>
            <li className="my-2"><Link to='/contact' className="py-1 px-4 font-medium text-xl hover:text-[#fe8b00] underline-animation whitespace-nowrap">Contact Us</Link></li>
            <li className="my-2"><Link to='/grocery' className="px-4 font-medium text-xl hover:text-[#fe8b00] underline-animation whitespace-nowrap">Grocery</Link></li>
          </ul>
        </div>
    </div>
)};

export default Header;