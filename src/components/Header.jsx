import { Link } from "react-router-dom";
import { FiSearch} from "react-icons/fi";
import { ImHome } from "react-icons/im";
import { HiBuildingOffice } from "react-icons/hi2";
import { IoCall } from "react-icons/io5";
import { SiFoodpanda } from "react-icons/si";
import { GiShoppingBag } from "react-icons/gi";
import FUDO from "../assets/FUDO.svg"

const Header = () =>{
    return(
        <div className="sticky w-full top-0 bg-white z-20 py-4 border-b shadow-sm border-gray-100 text-xl ">
        <div className="container-max flex justify-between items-center">
           <div className="w-12 h-12 mx-auto">
            <img src={FUDO} alt="err"/>
           </div>
           <div className="mx-auto">
            <ul className="flex ">
                <li className="px-5">
                <Link to="/"
                className="flex">
                <FiSearch className="w-5 h-8 text-gray-600 mx-2"/>
                <p>Search</p>
                </Link>
                </li>
                <li className="px-5">
                <Link to="/"
                className="flex">
                <ImHome className="w-5 h-8 text-gray-700 mx-2"/>
                <p>Home </p>
                </Link>
                </li>
                <li className="px-5">
                <Link to="/about"
                className="flex">
                <HiBuildingOffice className="w-5 h-8 text-gray-700 mx-2"/>
                <p>About </p>
                </Link>
                </li>
                <li className="px-5">
                <Link to="/contact"
                className="flex">
                <IoCall className="w-5 h-8 text-gray-700 mx-2"/>
                <p>Contact </p>
                </Link>
                </li>
                <li className="px-5">
                <Link to="/grocery"
                className="flex">
                <SiFoodpanda className="w-5 h-8 text-gray-700 mx-2"/>
                <p>Grocery</p>
                </Link>
                </li>
                <li className="px-5">
                <Link to="/cart"
                className="flex">
                <GiShoppingBag className="w-5 h-8 text-gray-700 mx-2"/>
                <p>Cart </p>
                </Link>
                </li>
                <li>
                    <button className="bg-orange-400 px-2 py-1 rounded-md text-white my-auto item-center"
                    >Login</button>
                </li>
                
            </ul>
            </div>
           </div>
        </div>
    )
}
export default Header;