import { Link } from "react-router-dom";
// import {Bars3Icon, HomeIcon} from '@heroicons/react/24/solid'
import { FiSearch} from "react-icons/fi";
import { ImHome } from "react-icons/im";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { GiShoppingBag } from "react-icons/gi";
import FUDO from "../assets/FUDO.svg"
const Header = () =>{
    return(
        <div className="sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100">
        <div className="container-max flex justify-between items-center">
           <div className="w-14 h-14">
            <img src={FUDO} alt="err"/>
           </div>
           <div className="nav-items">
            <ul className="flex space-x-6">
                <li>
                <Link to="/"
                className="flex">
                <FiSearch className="w-4 h-4 text-gray-700"/>{' '}
                <p>Search</p>
                </Link>
                </li>
                <li>
                <Link to="/"
                className="flex">
                <ImHome className="w-4 h-4 text-gray-700"/>{' '}
                <p>Home </p>
                </Link>
                </li>
                <li>
                <Link to="/about"
                className="flex">
                <HiBuildingOffice className="w-4 h-4 text-gray-700"/>{' '}
                <p>About </p>
                </Link>
                </li>
                <li>
                <Link to="/contact"
                className="flex">
                <IoCall className="w-4 h-4 text-gray-700"/>{' '}
                <p>Contact </p>
                </Link>
                </li>
                <li>
                <Link to="/grocery"
                className="flex">
                <SiFoodpanda className="w-4 h-4 text-gray-700"/>{' '}
                <p>Grocery</p>
                </Link>
                </li>
                <li>
                <Link to="/cart"
                className="flex">
                <GiShoppingBag className="w-4 h-4 text-gray-700"/>{' '}
                <p>Cart </p>
                </Link>
                </li>
                
            </ul>
            </div>
           </div>
        </div>
    )
}
export default Header;