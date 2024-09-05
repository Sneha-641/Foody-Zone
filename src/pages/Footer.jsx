import React from 'react';
import A1 from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF , faTwitter , faYoutube , faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="mx-auto lg:px-28 py-8 mt-6 md:px-12 footer_bg border-t-2 border-[#cccccc66] px-4">
      <div className="flex flex-col lg:flex-row p-4 justify-between space-y-4 lg:space-y-0">
      <div className="lg:w-1/3 w-full flex flex-col ">
        <img src={A1} alt="Logo" className="lg:p-2 md:p-0 lg:my-4 w-48 md:my-0"/>
        <p className="p-2 my-4 lg:text-lg ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem soluta corporis.</p>
        <div className="flex space-x-4 lg:space-x-4 p-2 md:space-x-2 ">
            <span className="px-4 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faFacebookF}/></span>
            <span className="px-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faTwitter}/></span>
            <span className="px-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faYoutube}/></span>
            <span className="px-3 py-2  rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faInstagram}/></span>
        </div>
      </div>
      <div className="lg:w-2/3  flex flex-col md:flex-row p-2 justify-between lg:justify-around space-y-8 md:space-y-0">
        <ul className="flex flex-col space-y-2 lg:text-md px-2 ">
            <li><h2 className="font-bold lg:text-4xl py-2 md:text-2xl">Open Hours</h2></li>
            <li>Mon-Thurs : 9am - 8pm</li>
            <li>Fri-Sun : 11am - 22pm</li>
        </ul>
        <ul className="flex flex-col space-y-2 lg:text-md px-2 ">
            <li><h2 className="font-bold lg:text-4xl py-2 md:text-2xl">Links</h2></li>
            <li className="hover:text-prim cursor-pointer">Home</li>
            <li className="hover:text-prim cursor-pointer">About</li>
            <li className="hover:text-prim cursor-pointer">Menu</li>
            <li className="hover:text-prim cursor-pointer">Gallery</li>
            <li className="hover:text-prim cursor-pointer">Contact</li>
            </ul>
        <ul className="flex flex-col space-y-2 lg:text-md px-2">
            <li><h2 className="font-bold lg:text-4xl py-2 md:text-2xl">Company</h2></li>
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


// import React from 'react';
// import A1 from '../assets/logo.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faFacebookF , faTwitter , faYoutube , faInstagram} from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <div className="mx-auto lg:px-28 py-8 mt-6 md:px-12 sm:px-6 px-4 footer_bg border-t-2 border-[#cccccc66]">
//       <div className="flex flex-col lg:flex-row lg:justify-between p-4">
//         <div className="lg:w-1/3 w-full mb-6 lg:mb-0">
//           <img src={A1} alt="Logo" className="p-2 my-4 mx-auto lg:mx-0"/>
//           <p className="p-2 my-4 text-center lg:text-left text-base md:text-lg lg:text-xl">
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus exercitationem soluta corporis.
//           </p>
//           <div className="flex justify-center lg:justify-start space-x-2 sm:space-x-4 p-2">
//               <span className="px-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faFacebookF}/></span>
//               <span className="px-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faTwitter}/></span>
//               <span className="px-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faYoutube}/></span>
//               <span className="px-3 py-2 rounded-full custom_social cursor-pointer"><FontAwesomeIcon icon={faInstagram}/></span>
//           </div>
//         </div>
//         <div className="lg:w-2/3 w-full flex flex-col lg:flex-row lg:justify-between">
//           <ul className="flex flex-col space-y-2 text-center lg:text-left text-sm md:text-base lg:text-lg px-2">
//               <li><h2 className="font-bold text-lg md:text-2xl lg:text-3xl py-2">Open Hours</h2></li>
//               <li>Mon-Thurs : 9am - 8pm</li>
//               <li>Fri-Sun : 11am - 10pm</li>
//           </ul>
//           <ul className="flex flex-col space-y-2 text-center lg:text-left text-sm md:text-base lg:text-lg px-2">
//               <li><h2 className="font-bold text-lg md:text-2xl lg:text-3xl py-2">Links</h2></li>
//               <li className="hover:text-prim cursor-pointer">Home</li>
//               <li className="hover:text-prim cursor-pointer">About</li>
//               <li className="hover:text-prim cursor-pointer">Menu</li>
//               <li className="hover:text-prim cursor-pointer">Gallery</li>
//               <li className="hover:text-prim cursor-pointer">Contact</li>
//           </ul>
//           <ul className="flex flex-col space-y-2 text-center lg:text-left text-sm md:text-base lg:text-lg px-2">
//               <li><h2 className="font-bold text-lg md:text-2xl lg:text-3xl py-2">Company</h2></li>
//               <li className="hover:text-prim cursor-pointer">Terms & Conditions</li>
//               <li className="hover:text-prim cursor-pointer">Privacy Policy</li>
//               <li className="hover:text-prim cursor-pointer">Cookie Policy</li>
//           </ul>
//         </div>
//       </div>
//       <h4 className="font-normal text-sm sm:text-base md:text-lg p-4 mt-4 text-center">
//         Copyright &copy; 2024 <span className="font-semibold text-prim">Sneha Goyal.</span> All Rights Reserved.
//       </h4>
//     </div>  
//   )
// }

// export default Footer;
