import React from 'react';
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';
import b5 from '../assets/b5.png';
import img from '../assets/image.png';

const About = () => {
  return (
    <div className="mx-auto lg:px-28 md:px-12 px-4 py-12">
      <div>
          <p className="md:text-2xl sm:text-xl font-text uppercase p-4 font-medium tracking-wider text-dark">Trusted by 20+ Companies</p>
          <div className="grid md:grid-cols-5 grid-cols-3 items-center justify-center ">
            <img src={b1} className=""/>
            <img src={b2} className=""/>
            <img src={b3} className=""/>
            <img src={b4} className=""/>
            <img src={b5} className=""/>
          </div>
      </div>
      <div className="md:py-12 py-4 ">
        <div className="text-center">
        <p className=" text-prim py-2 px-4 rounded-full inline-block mb-4 text-md bg-[#f3f3f5] headings">About Us</p>
        <h1 className="md:text-6xl text-dark font-[900] md:mb-12 leading-tight text-3xl mb-8">Discover Our <br/> Restaurant Story</h1>
        <p className="leading-relaxed text-gray-600 md:text-lg text-sm">This is Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolore at aspernatur eveniet temporibus placeat voluptatum quaerat accusamus possimus cupiditate, quidem impedit sed libero id perspiciatis esse earum repellat quam. Dolore modi temporibus quae possimus accusantium, cum corrupti sed deserunt iusto at sapiente nihil sint iste similique soluta dolor! Quod.</p>
        </div>
        <div className="mt-8 mx-auto md:w-4/5 text-center w-full">
          <img src={img} className="rounded-3xl w-full"/>
        </div>
      </div>
      
    </div>
  )
}

export default About
