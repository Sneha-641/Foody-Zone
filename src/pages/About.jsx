import React from 'react';
import img from '../assets/image.png';

const About = () => {
  return (
    <div className="mx-auto lg:px-28 md:px-12 px-4 py-12" id="about">
        <div className="text-center">
        <p className=" text-prim py-2 px-4 rounded-full inline-block mb-4 text-md bg-[#f3f3f5] headings">About Us</p>
        <h1 className="md:text-6xl text-dark font-[900] md:mb-12 leading-tight text-3xl mb-8">Discover Our <br/> Restaurant Story</h1>
        <p className="leading-relaxed text-gray-600 md:text-lg text-sm">This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolore at aspernatur eveniet temporibus placeat voluptatum quaerat accusamus possimus cupiditate, quidem impedit sed libero id perspiciatis esse earum repellat quam. Dolore modi temporibus quae possimus accusantium, cum corrupti sed deserunt iusto at sapiente nihil sint iste similique soluta dolor! Quod.</p>
        </div>
        <div className="mt-8 mx-auto md:w-4/5 text-center w-full">
          <img src={img} className="rounded-3xl w-full"/>
        </div>
      </div>
  )
}

export default About
