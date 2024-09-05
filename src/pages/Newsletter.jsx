import React from 'react';
import A1 from '../assets/brooke-lark-V4MBq8kue3U-unsplash.jpg';
import A2 from '../assets/blog-pattern-bg.png';

const Newsletter = () => {
  return (
    <div className="mx-auto lg:px-28 py-12 md:px-12 px-4" style={{backgroundImage: `url(${A2})`}}>
      <div className="flex">
        <div className="w-1/2 relative overflow-hidden" style={{
        backgroundImage: `url(${A1})` , backgroundSize: 'cover', backgroundPosition: 'center', padding: '1rem'}}>
            {/* <img src={A1} className="object-cover w-full h-full absolute inset-0"/> */}
        </div>
        <div className="w-1/2 text-center p-8"  style={{
        backgroundImage: `url(${A1})`}}>
            <h3 className="text-3xl font-bold p-2">Subscribe to Our Newsletter</h3>
            <p className="p-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form className="flex flex-col p-4 space-y-4 text-center items-center">
                <input type="email" placeholder="Enter Your Email " className="pl-4 p-2 rounded-lg email_button"></input>
                <button type="submit" className="subs_button p-2 rounded-sm">Subscribe</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
