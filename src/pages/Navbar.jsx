import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBagShopping, faBars, faTimes , faShoppingCart, } from '@fortawesome/free-solid-svg-icons';
import A1 from '../assets/logo.png';
import '../App.css';

const Navbar = ({ cartItems, increaseQuantity, decreaseQuantity, removeItem }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen); // Toggle cart modal on icon click
  };

  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="mx-auto lg:px-28 pt-4 pb-2 md:px-12 px-4 fixed-navbar">
      <div className="flex justify-between p-2 items-center">
        {/* Logo */}
        <div>
          <img src={A1} alt="Logo" className="cursor-pointer w-12 md:48" />
        </div>

        {/* Full Menu for 1324px and above */}
        <div className="navbar-full-menu hidden lg:flex justify-between items-center space-x-16">
          <ul className="flex space-x-4 font-medium text-lg">
            <li className="hover:text-prim cursor-pointer nav_item"><a href="#homeBanner">Home</a></li>
            <li className="hover:text-prim cursor-pointer nav_item"><a href="#about">About</a></li>
            <li className="hover:text-prim cursor-pointer nav_item"><a href="#menu">Menu</a></li>
            <li className="hover:text-prim cursor-pointer nav_item"><a href="#gallery">Gallery</a></li>
            <li className="hover:text-prim cursor-pointer nav_item"><a href="#blog">Blog</a></li>
            <li className="hover:text-prim cursor-pointer nav_item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        {/* Search and Icons */}
        <div className="navbar-icons flex items-center space-x-4 md:space-x-2">
          {/* <form className="navbar-search hidden md:block">
            <input 
              type="search" 
              placeholder="Search Here..." 
              className="px-4 py-2 rounded-xl search w-[200px] h-[40px]" 
            />
          </form> */}
          <div className="relative">
            <span 
              className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer hover:bg-prim hover:text-white "
              onClick={toggleCart}
            >
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
            {/* Show cart item count */}
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-prim text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </div>
          {/* <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faBagShopping} 
          </span> */}
          <span className="w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center cursor-pointer">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <div className="navbar-menu-icon lg:hidden cursor-pointer w-[40px] h-[40px] text-prim rounded-md search inline-flex justify-center items-center" onClick={toggleMenu}>
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </div>
        </div>
      </div>

      {/* Mobile Menu for 1024px and below */}
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

      {cartOpen && (
  <div className="fixed top-0 right-0 bg-white shadow-lg p-4 sm:p-8 w-full h-full z-50">
    <div className='flex justify-between mb-4 sm:mb-8 py-1 px-2'>
      <h2 className="text-2xl sm:text-4xl font-bold text-center">Cart Items</h2>
      <button className="bg-prim text-white px-2 sm:px-4 rounded-lg" onClick={toggleCart}>
        <FontAwesomeIcon icon={faTimes} className="text-white" />
      </button>
    </div>
    {cartItems.length === 0 ? (
      <p className='px-2 py-1 text-base sm:text-xl'>Your cart is empty.</p>
    ) : (
      <table className="table-auto w-full">
        <thead className='text-gray-800'>
          <tr>
            <th className="text-center px-2 sm:px-4 py-1 sm:py-2 font-medium">Item</th>
            <th className="text-center px-2 sm:px-4 py-1 sm:py-2 font-medium">Title</th>
            <th className="text-center px-2 sm:px-4 py-1 sm:py-2 font-medium">Price</th>
            <th className="text-center px-2 sm:px-4 py-1 sm:py-2 font-medium">Quantity</th>
            <th className="text-center px-2 sm:px-4 py-1 sm:py-2 font-medium">Total</th>
            <th className="text-center px-2 sm:px-4 py-1 sm:py-2 font-medium">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id} className="border-b">
              <td className="px-2 sm:px-4 py-1 sm:py-2 flex justify-center text-center">
                <img src={item.imgSrc} alt={item.title} className="w-10 sm:w-12 rounded-full shadow-md" />
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 text-center">
                <p className="font-semibold text-sm sm:text-base">{item.title}</p>
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 text-center">
                <p className="text-sm sm:text-base">Rs.&nbsp;{item.price}</p>
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 text-center">
                <div className="flex justify-center">
                  <button
                    className="bg-gray-300 px-2 py-1 rounded text-xs sm:text-base hover:bg-prim hover:text-white"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <p className="text-black px-2 py-1 font-medium text-xs sm:text-base">{item.quantity}</p>
                  <button
                    className="bg-gray-300 px-2 py-1 rounded text-xs sm:text-base hover:bg-prim hover:text-white"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 text-center">
                <p className="text-sm sm:text-base">{(item.price * item.quantity).toFixed(2)}</p>
              </td>
              <td className="px-2 sm:px-4 py-1 sm:py-2 items-center text-center">
                <button
                  className="border border-prim text-white w-6 sm:w-8 h-6 sm:h-8 rounded-full inline-block items-center justify-center text-center"
                  onClick={() => removeItem(item.id)}
                >
                  <FontAwesomeIcon icon={faTimes} className="text-prim" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
)}
    </div>
  );
};

export default Navbar;
