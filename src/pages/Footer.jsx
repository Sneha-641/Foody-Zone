import React from 'react';
import A1 from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF , faTwitter , faYoutube , faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="mx-auto px-28 py-8 mt-6 footer_bg border-t-2 border-[#cccccc66]">
      <div className="flex p-4">
      <div className="w-1/3">
        <img src={A1} alt="Logo" className="p-2 my-4"/>
        <p className="p-2 my-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem soluta corporis.</p>
        <div className="flex space-x-4 p-2">
            <span className="px-4 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faFacebookF}/></span>
            <span className="pl-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faTwitter}/></span>
            <span className="pl-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faYoutube}/></span>
            <span className="pl-4 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faInstagram}/></span>
        </div>
      </div>
      <div className="w-2/3 flex p-2 justify-between">
        <ul className="flex flex-col space-y-2 text-md px-2">
            <li><h2 className="font-bold text-4xl py-2">Open Hours</h2></li>
            <li>Mon-Thurs : 9am - 22pm</li>
            <li>Fri-Sun : 11am - 22pm</li>
        </ul>
        <ul className="flex flex-col space-y-2 text-md px-2">
            <li><h2 className="font-bold text-4xl py-2">Links</h2></li>
            <li className="hover:text-prim cursor-pointer">Home</li>
            <li className="hover:text-prim cursor-pointer">About</li>
            <li className="hover:text-prim cursor-pointer">Menu</li>
            <li className="hover:text-prim cursor-pointer">Gallery</li>
            <li className="hover:text-prim cursor-pointer">Contact</li>
            </ul>
        <ul className="flex flex-col space-y-2 text-md px-2">
            <li><h2 className="font-bold text-4xl py-2">Company</h2></li>
            <li className="hover:text-prim cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-prim cursor-pointer">Privacy Policy</li>
            <li className="hover:text-prim cursor-pointer">Cookie Policy</li>
        </ul>
      </div>
    </div>
    <h4 className="font-normal text-lg p-4 mt-4 text-center">Copyright &copy; 2024 <span className="font-semibold text-prim">Sneha Goyal.</span> All Rights Reserved.</h4>
    </div>  
  )
}

export default Footer
