import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faChevronDown, faChevronUp, faStar, faCartShopping, faBars, faX, faXmark, faArrowRight, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

export const CartIcon = () => <FontAwesomeIcon className='cursor-pointer group-hover:text-[#fe8b00] text-xl' icon={faShoppingCart} />;

export const DownArrow = () => <FontAwesomeIcon className='mx-6 font-bold' icon={faChevronDown} />

export const UpArrow = () => <FontAwesomeIcon className='mx-6 font-bold' icon={faChevronUp} />

export const Rating = () => <FontAwesomeIcon className='text-white text-[10px] ml-1' icon={faStar} />

export const Time = () => <FontAwesomeIcon  icon={faClock} />

export const Location = () => <FontAwesomeIcon className='mx-1' icon={faCartShopping} />

export const Bars = () => <FontAwesomeIcon className='tablet:hidden cursor-pointer p-3 hover:text-[#fe8b00] transition duration-300 transform hover:scale-105 border-gray-200 border-1 shadow-lg rounded-lg' icon={faBars} />

export const Close = () => <FontAwesomeIcon className='tablet:hidden cursor-pointer p-3 hover:text-[#fe8b00] transition duration-300 transform hover:scale-105 border-gray-200 border-1 shadow-lg rounded-lg' icon={faXmark} />

export const ArrowLeft = () => <FontAwesomeIcon icon={faArrowLeft} />

export const ArrowRight = () => <FontAwesomeIcon icon={faArrowRight} />