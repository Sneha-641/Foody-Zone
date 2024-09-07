import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import A1 from '../assets/menu_1.png';
import A2 from '../assets/menu_2.png';
import A3 from '../assets/menu_3.png';
import A4 from '../assets/menu_4.png';
import A5 from '../assets/menu_5.png';
import A6 from '../assets/menu_6.png';
import A7 from '../assets/menu_7.png';
import A8 from '../assets/menu_8.png';

const items = [
  { id: 1, title: 'Salad', image: A1 },
  { id: 2, title: 'Rolls', image: A2 },
  { id: 3, title: 'Desserts', image: A3 },
  { id: 4, title: 'Sandwich', image: A4 },
  { id: 5, title: 'Cake', image: A5 },
  { id: 6, title: 'Pure Veg', image: A6 },
  { id: 7, title: 'Pasta', image: A7 },
  { id: 8, title: 'Noodles', image: A8 },
];

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7.5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  return (
    <div className="mx-auto lg:px-28 py-12 md:px-12 px-4">
      <h1 className="font-bold text-3xl p-2">Explore Our Menu</h1>
      <p className="p-2 mb-4 md:text-lg text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ad eveniet maiores doloribus eos amet cupiditate suscipit minima, ipsa </p>
      <Slider {...settings}>
        {items.map(item => (
          <div key={item.id} className="mx-2">
            <div className="flex flex-col justify-center">
              <img src={item.image} alt={item.title} className="border-4 border-black rounded-full mx-auto" />
              <div className="p-2">
                <h3 className="text-lg font-semibold text-center">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomSlider;
