// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faUser , faMagnifyingGlass } from '@fortawesome/free-regular-svg-icons';
// import { faBagShopping , faBars} from '@fortawesome/free-solid-svg-icons';
// import A1 from '../assets/logo.png';
// import '../App.css';

// const Navbar = () => {

//   return (
//     <div className="mx-auto lg:px-28 py-8 md:px-12">
//       <div className="flex justify-between p-2 items-center">
//         <div className="">
//             <img src={A1} alt="Logo" className="cursor-pointer"/>
//         </div>
//         <div className="justify-between flex space-x-16 items-center">
//             <div className="">
//             <ul className="flex space-x-4 font-medium">
//                 <li className="hover:text-prim cursor-pointer nav_item">Home</li>
//                 <li className="hover:text-prim cursor-pointer nav_item">About</li>
//                 <li className="hover:text-prim cursor-pointer nav_item">Menu</li>
//                 <li className="hover:text-prim cursor-pointer nav_item">Gallery</li>
//                 <li className="hover:text-prim cursor-pointer nav_item">Blog</li>
//                 <li className="hover:text-prim cursor-pointer nav_item">Contact</li>
//             </ul>
//             </div>
//             <div className="flex space-x-2 items-center text-center">
//                 <form className="">
//                 <input type="search" placeholder="Search Here..." className="px-4 py-2 rounded-xl search w-[200px] h-[40px]"/>
//                 {/* <button type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} className="search_button"/></button> */}
//                 </form>
//                 <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faBagShopping}/></span>
//                 <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faUser} className=""/></span>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


// // import React from 'react';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {faUser , faMagnifyingGlass } from '@fortawesome/free-regular-svg-icons';
// // import { faBagShopping , faBars} from '@fortawesome/free-solid-svg-icons';
// // import A1 from '../assets/logo.png';
// // import '../App.css';

// // const Navbar = () => {

// //   return (
// //     <div className="mx-auto lg:px-28 py-2 md:px-12 w-full">
// //       <div className="flex flex-col">
// //         <div className="flex justify-between p-2">
// //           <div>
// //             <img src={A1} alt="Logo" className="cursor-pointer"/>
// //           </div>
// //           <div className="flex space-x-4">
// //           <form>
// //               <input type="search" placeholder="Search Here..." className="px-4 py-2 rounded-xl search w-[220px] h-[40px]"/>
// //           </form>
// //                 <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faBagShopping}/></span>
// //                 <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer"><FontAwesomeIcon icon={faUser} className=""/></span>
// //           </div>
// //         </div>
// //           <div className="flex items-center justify-center mt-2">
// //             <ul className="flex lg:space-x-10 font-medium md:space-x-2">
// //                 <li className="hover:text-prim cursor-pointer nav_item">Home</li>
// //                 <li className="hover:text-prim cursor-pointer nav_item">About</li>
// //                 <li className="hover:text-prim cursor-pointer nav_item">Menu</li>
// //                 <li className="hover:text-prim cursor-pointer nav_item">Gallery</li>
// //                 <li className="hover:text-prim cursor-pointer nav_item">Blog</li>
// //                 <li className="hover:text-prim cursor-pointer nav_item">Contact</li>
// //             </ul>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Navbar


import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import A1 from '../assets/logo.png';
import '../App.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="mx-auto lg:px-28 py-8 md:px-12 px-4">
      <div className="flex justify-between p-2 items-center">
        {/* Logo */}
        <div>
          <img src={A1} alt="Logo" className="cursor-pointer w-48 " />
        </div>

      {/* Full Menu for 1024px and above */}
      <div className="hidden lg:flex justify-between items-center space-x-16">
        <ul className="flex space-x-4 font-medium">
          <li className="hover:text-prim cursor-pointer nav_item">Home</li>
          <li className="hover:text-prim cursor-pointer nav_item">About</li>
          <li className="hover:text-prim cursor-pointer nav_item">Menu</li>
          <li className="hover:text-prim cursor-pointer nav_item">Gallery</li>
          <li className="hover:text-prim cursor-pointer nav_item">Blog</li>
          <li className="hover:text-prim cursor-pointer nav_item">Contact</li>
        </ul>
      </div>
        
        {/* Search and Icons */}
        <div className="flex items-center space-x-4 md:space-x-2">
          <form className="hidden md:block">
            <input 
              type="search" 
              placeholder="Search Here..." 
              className="px-4 py-2 rounded-xl search w-[200px] h-[40px]" 
            />
          </form>
          <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faBagShopping} />
          </span>
          <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="lg:hidden cursor-pointer w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </div>
        </div>
      </div>


      {/* Mobile Menu for 768px and below */}
      <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col items-center space-y-4 mt-4">
          <li className="hover:text-prim cursor-pointer nav_item">Home</li>
          <li className="hover:text-prim cursor-pointer nav_item">About</li>
          <li className="hover:text-prim cursor-pointer nav_item">Menu</li>
          <li className="hover:text-prim cursor-pointer nav_item">Gallery</li>
          <li className="hover:text-prim cursor-pointer nav_item">Blog</li>
          <li className="hover:text-prim cursor-pointer nav_item">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
