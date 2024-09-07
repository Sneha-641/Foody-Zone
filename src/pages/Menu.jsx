import React , {useState} from 'react';
import bg from '../assets/menu-bg.png';
import m1 from '../assets/menu/menu-1.png';
import m2 from '../assets/menu/menu-2.png';
import m3 from '../assets/menu/menu-3.png';
import m4 from '../assets/menu/menu-4.png';
import d1 from '../assets/dish/1.png';
import d2 from '../assets/dish/2.png';
import d3 from '../assets/dish/3.png';
import d4 from '../assets/dish/4.png';
import d5 from '../assets/dish/5.png';
import d6 from '../assets/dish/6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-regular-svg-icons';
import { faPlus} from '@fortawesome/free-solid-svg-icons';

const dishes = [
    {
      id: 1,
      category: 'dinner',
      imgSrc: d1,
      rating: 5,
      title: 'Chicken Veggies',
      calories: '120 calories',
      type: 'Non Veg',
      persons: 2,
      price: '499',
    },
    {
      id: 2,
      category: 'lunch',
      imgSrc: d2,
      rating: 4.3,
      title: 'Grilled Chicken',
      calories: '80 calories',
      type: 'Non Veg',
      persons: 1,
      price: '359',
    },
    {
      id: 3,
      category: 'lunch',
      imgSrc: d3,
      rating: 4,
      title: 'Paneer Noodles',
      calories: '100 calories',
      type: 'Veg',
      persons: 2,
      price: '149',
    },
    {
        id: 4,
        category: 'dinner',
        imgSrc: d4,
        rating: 4,
        title: 'Chicken Noodles',
        calories: '120 calories',
        type: 'Non Veg',
        persons: 2,
        price: '379',
      },{
        id: 5,
        category: 'breakfast',
        imgSrc: d5,
        rating: 5,
        title: 'Bread Boiled Egg',
        calories: '120 calories',
        type: 'Non Veg',
        persons: 2,
        price: '99',
      },{
        id: 6,
        category: 'breakfast',
        imgSrc: d6,
        rating: 5,
        title: 'Immunity Dish',
        calories: '120 calories',
        type: 'Veg',
        persons: 2,
        price: '159',
      },
    
  ];


const Menu = ({addToCart}) => {
  const [activeFilter, setActiveFilter] = useState('.all');
  const handleClick = (filter) => { setActiveFilter(filter); };

  const filteredDishes = dishes.filter(dish => activeFilter === '.all' || dish.category === activeFilter.replace('.', ''));

  return (
    <div className="mx-auto lg:px-28 py-12 text-center md:px-12 px-4" style={{backgroundImage: `url(${bg})`}} id="menu">

        {/* Title */}
         <div>
           <p className=" text-prim py-2 px-4 rounded-full inline-block mb-4 text-md bg-[#f3f3f5] headings">Our Menu</p>
           <h1 className="md:text-6xl text-3xl text-dark font-[900] mb-12 leading-tight">Wake Up Early,
           <br/>Eat Fresh & Healthy</h1>
         </div>


         {/* Heading */}
        <div>
            <ul className="inline-block bg-white rounded-full p-2 relative shadow-lg">
            <div className="absolute left-0 top-3 min-h-[50px] z-[-1] rounded-full"></div>
                <li className={`inline-flex items-center justify-center cursor-pointer px-6 py-2 mr-2 rounded-full text-xl transition-colors duration-300 ${activeFilter === '.all' ?  'bg-prim' : 'hover:bg-white'}`}
            onClick={() => handleClick('.all')}>
                <img src={m1} alt="" className="mr-2" />All</li>
                <li className={`inline-flex items-center justify-center cursor-pointer px-6 py-2 mr-2 rounded-full text-xl transition-colors duration-300 ${activeFilter === '.breakfast' ?  'bg-prim' : 'hover:bg-white'}`}
            onClick={() => handleClick('.breakfast')}>
                <img src={m2} alt="" className="mr-2" />Breakfast</li>
                <li className={`inline-flex items-center justify-center cursor-pointer px-6 py-2 mr-2 rounded-full text-xl transition-colors duration-300 ${activeFilter === '.lunch' ?  'bg-prim' : 'hover:bg-white'}`}
            onClick={() => handleClick('.lunch')}>
                <img src={m3} alt="" className="mr-2" />Lunch</li>
                <li className={`inline-flex items-center justify-center cursor-pointer px-6 py-2 mr-2 rounded-full text-xl transition-colors duration-300 ${activeFilter === '.dinner' ?  'bg-prim' : 'hover:bg-white'}`}
            onClick={() => handleClick('.dinner')}>
                <img src={m4} alt="" className="mr-2" />Dinner</li>
            </ul>
        </div>


        {/* Dishes Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 gap-6">
        {filteredDishes.map(dish => (
          <div key={dish.id} className="mt-48 text-center bg-gradient-to-br from-gray-200 to-white rounded-3xl shadow-lg p-6 relative transition-transform transform hover:scale-105">
            <div className="mb-6 absolute left-1/2 transform -translate-x-1/2 -top-24">
              <img src={dish.imgSrc} alt={dish.title} className=" rounded-full shadow-md" />
            </div>
            <div className="text-xl mt-32 mb-4">{dish.rating}
              <span className="text-prim ml-1"><FontAwesomeIcon icon={faStar} /></span>
            </div>
            <div className=" mb-6">
              <h3 className="text-2xl font-bold mb-4">{dish.title}</h3>
              <p className="text-gray-500">{dish.calories}</p>
            </div>
            <div className="mb-6 border-b border-gray-300 pb-6 px-8">
              <ul className="flex justify-around text-left">
                <li className="flex-1">
                  <p className="text-lg">Type</p>
                  <b className="font-semibold">{dish.type}</b>
                </li>
                <li className="flex-1 border-l border-gray-300 pl-4 text-right">
                  <p className="text-lg">Persons</p>
                  <b className="font-semibold">{dish.persons}</b>
                </li>
              </ul>
            </div>
            <div className="px-8">
              <ul className="flex justify-between items-center">
                <li>
                  <b className="text-xl">Rs. {dish.price}</b>
                </li>
                <li>
                <button className="py-2 px-4 bg-prim rounded-lg shadow-md transition-colors"
                    onClick={() => addToCart(dish)}>
                    <span className="text-white text-xl"><FontAwesomeIcon icon={faPlus} /></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ))}
        </div>
      </div>

  );
};

export default Menu;

