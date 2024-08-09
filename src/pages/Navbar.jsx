import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser , faMagnifyingGlass} from '@fortawesome/free-regular-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import A1 from '../assets/logo.png';
import '../App.css';

const Navbar = () => {
  return (
    <div className="mx-auto px-28 py-8">
      <div className="flex justify-between p-2 items-center">
        <div>
            <img src={A1} alt="Logo" className="cursor-pointer"/>
        </div>
        <div className="justify-between flex space-x-16 items-center">
            <div>
            <ul className="flex space-x-4 font-medium">
                <li className="hover:text-prim cursor-pointer nav_item">Home</li>
                <li className="hover:text-prim cursor-pointer nav_item">About</li>
                <li className="hover:text-prim cursor-pointer nav_item">Menu</li>
                <li className="hover:text-prim cursor-pointer nav_item">Gallery</li>
                <li className="hover:text-prim cursor-pointer nav_item">Blog</li>
                <li className="hover:text-prim cursor-pointer nav_item">Contact</li>
            </ul>
            </div>
            <div className="flex space-x-4 items-center text-center">
                <form className="">
                <input type="search" placeholder="Search Here..." className="px-4 py-2 rounded-xl search w-[200px] h-[40px]"/>
                {/* <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className="search_button"/></button> */}
                </form>
                <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faBagShopping}/></span>
                <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faUser} className=""/></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
