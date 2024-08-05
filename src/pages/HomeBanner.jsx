import React from 'react';
import A1 from '../assets/Home.jpg';
import A2 from '../assets/Home2.jpg';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const HomeBanner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
    <div className="mx-auto px-28 py-12">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="flex flex-col space-y-4 w-full md:w-1/2 p-4">
            <h1 className="text-8xl font-bold ">Welcome to Our <span className="text-[#ff8243]">Foody</span> Zone Cafe.</h1>
            <p className="font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad voluptas non, aspernatur magnam incidunt eos dicta aut velit nulla?</p>
            <button type="submit" className="search p-4 h-[60px] w-[200px] rounded-3xl hover:text-[#ff8243]">Check Our Menu</button>
        </div>
        <div className="w-full md:w-1/2 relative overflow-hidden">
            <img src={A1} alt="Banner" className="object-cover w-full h-full absolute inset-0" />
        </div>
        {/* <Slider {...settings}>
        <div className="w-full md:w-1/2 relative overflow-hidden">
            <img src={A1} alt="Banner" className="object-cover w-full h-full absolute inset-0" />
        </div>
        <div className="w-full md:w-1/2 relative overflow-hidden">
            <img src={A2} alt="Banner" className="object-cover w-full h-full absolute inset-0" />
        </div>
        </Slider> */}    
      </div>
    </div>
  )
}

export default HomeBanner
