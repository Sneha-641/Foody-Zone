import React from 'react';
import A1 from '../assets/blog-pattern-bg.png';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.png';
import '../styles/Publications.css';

const Publications = () => {
  return (
    <div className="mx-auto px-28 py-8" style={{backgroundImage: `url(${A1})`}}>
      <div className="text-center p-2">
        <p className=" text-prim py-2 px-4 rounded-full inline-block mb-4 text-md bg-[#f3f3f5] headings">OUR BLOG</p>
        <h1 className="text-5xl text-dark font-[900]">Latest Publications</h1>
      </div>
      <div className="flex space-x-4 mt-12">
        <div className="flex flex-col space-y-8 p-4 border-2 border-gray-400 blog_card">
            <div>
                <img src={blog1} alt="" className="rounded-3xl w-full "/>
            </div>
            <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold text-dark">Energy Drink Which You Can Make At Home</h4>
                <p className="text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</p>
                <p className="bg-dark text-white inline-flex p-4 rounded-full justify-center items-center hover:bg-white hover:border-2 hover:border-dark hover:text-dark">READ MORE</p>
            </div>
        </div>
        <div className="flex flex-col space-y-8 p-4 border-2 border-gray-400 blog_card">
            <div>
                <img src={blog2} alt="" className="rounded-3xl w-full "/>
            </div>
            <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold text-dark">Fresh Veggie and rice combo for dinner.</h4>
                <p className="text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</p>
                <p className="bg-dark text-white inline-flex p-4 rounded-full justify-center items-center hover:bg-white hover:border-2 hover:border-dark hover:text-dark">READ MORE</p>
            </div>
        </div><div className="flex flex-col space-y-8 border-2 border-gray-400 blog_card">
            <div>
                <img src={blog3} alt="" className="rounded-3xl w-full "/>
            </div>
            <div className="flex flex-col space-y-4">
                <h4 className="text-lg font-bold text-dark">Chicken burger with double nuggets</h4>
                <p className="text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</p>
                <p className="bg-dark text-white inline-flex p-4 rounded-3xl justify-center items-center hover:bg-white hover:border-2 hover:border-dark hover:text-dark">READ MORE</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Publications
