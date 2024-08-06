import React from 'react';
import A1 from '../assets/Home.jpg';

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
            <h1 className="text-8xl font-bold ">Welcome to Our <span className="text-prim">Foody</span> Zone Cafe.</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad voluptas non, aspernatur magnam incidunt eos dicta aut velit nulla?</p>
            <button type="submit" className="search custom_button p-4 h-[60px] w-[200px] rounded-3xl hover:text-prim hover:shadow-rose-900">Check Our Menu</button>
        </div>
        <div className="w-full md:w-1/2 relative overflow-hidden">
            <img src={A1} alt="Banner" className="object-cover w-full h-full absolute inset-0" />
        </div>   
      </div>
    </div>
  )
}

export default HomeBanner
