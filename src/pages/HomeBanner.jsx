import React from 'react';
import A1 from '../assets/Home.jpg';
import '../App.css';

const HomeBanner = () => {
    return (
        <div className="mx-auto lg:px-28 md:py-8 md:px-12 px-4 py-2" id="homeBanner">
            <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="flex flex-col space-y-4 w-full md:w-1/2 p-4">
                    <h1 className="xl:text-8xl font-bold md:text-5xl text-5xl">
                        Welcome to Our <span className="text-prim">Foody</span> Zone Cafe.
                    </h1>
                    <p className="xl:text-lg md:text-md text-gray-500 text-sm">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ad voluptas non, aspernatur magnam incidunt eos dicta aut velit nulla?
                    </p>
                    <button type="submit" className="search custom_button p-4 md:h-[60px] md:w-[200px] rounded-3xl hover:text-prim hover:shadow-rose-900 w-full">
                        <a href="#menu">Check Our Menu</a>
                    </button>
                </div>
                <div className="w-full md:w-1/2 relative overflow-hidden resp">
                    <img src={A1} alt="Banner" className="object-cover w-full h-full" />
                </div>
            </div>
        </div>
    );
}

export default HomeBanner;
