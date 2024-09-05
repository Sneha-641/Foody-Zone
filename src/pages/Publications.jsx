// import React from 'react';
// import A1 from '../assets/blog-pattern-bg.png';
// import blog1 from '../assets/blog1.jpg';
// import blog2 from '../assets/blog2.jpg';
// import blog3 from '../assets/blog3.png';
// import '../styles/Publications.css';

// const Publications = () => {
//   return (
//     <div className="mx-auto px-28 py-8 lg:px-12" style={{backgroundImage: `url(${A1})`}}>
//       <div className="text-center p-2">
//         <p className=" text-prim py-2 px-4 rounded-full inline-block mb-4 text-md bg-[#f3f3f5] headings">OUR BLOG</p>
//         <h1 className="text-5xl text-dark font-[900]">Latest Publications</h1>
//       </div>
//       <div className="flex space-x-4 mt-12">
//         <div className="flex flex-col space-y-8 p-4 border-2 border-gray-400 blog_card">
//             <div>
//                 <img src={blog1} alt="" className="rounded-3xl w-full "/>
//             </div>
//             <div className="flex flex-col space-y-4">
//                 <h4 className="text-lg font-bold text-dark lg:text-md">Drink Which You Can Make At Home</h4>
//                 <p className="text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</p>
//                 <p className="bg-dark text-white inline-flex p-4 rounded-full justify-center items-center hover:bg-white hover:border-2 hover:border-dark hover:text-dark">READ MORE</p>
//             </div>
//         </div>
//         <div className="flex flex-col space-y-8 p-4 border-2 border-gray-400 blog_card">
//             <div>
//                 <img src={blog2} alt="" className="rounded-3xl w-full "/>
//             </div>
//             <div className="flex flex-col space-y-4">
//                 <h4 className="text-lg font-bold text-dark">Fresh Veggie and rice combo for dinner.</h4>
//                 <p className="text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</p>
//                 <p className="bg-dark text-white inline-flex p-4 rounded-full justify-center items-center hover:bg-white hover:border-2 hover:border-dark hover:text-dark">READ MORE</p>
//             </div>
//         </div><div className="flex flex-col space-y-8 border-2 border-gray-400 blog_card">
//             <div>
//                 <img src={blog3} alt="" className="rounded-3xl w-full "/>
//             </div>
//             <div className="flex flex-col space-y-4">
//                 <h4 className="text-lg font-bold text-dark">Chicken burger with double nuggets</h4>
//                 <p className="text-md text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.</p>
//                 <p className="bg-dark text-white inline-flex p-4 rounded-3xl justify-center items-center hover:bg-white hover:border-2 hover:border-dark hover:text-dark">READ MORE</p>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Publications


import React from 'react';
import A1 from '../assets/blog-pattern-bg.png';
import blog1 from '../assets/blog1.jpg';
import blog2 from '../assets/blog2.jpg';
import blog3 from '../assets/blog3.png';
import '../styles/Publications.css';

// BlogCard Component
const BlogCard = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col space-y-8 p-4 border-2 border-gray-400 blog_card">
      <div>
        <img src={imgSrc} alt={title} className="rounded-3xl w-full" />
      </div>
      <div className="flex flex-col space-y-4">
        <h4 className="text-lg font-bold text-dark">{title}</h4>
        <p className="text-md text-justify">{description}</p>
        <p className="bg-dark text-white inline-flex p-4 rounded-full justify-center items-center hover:bg-white hover:border-2 hover:border-dark hover:text-dark">
          READ MORE
        </p>
      </div>
    </div>
  );
};

// Publications Component
const Publications = () => {
  const publications = [
    {
      imgSrc: blog1,
      title: "Drink Which You Can Make At Home",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
    },
    {
      imgSrc: blog2,
      title: "Fresh Veggie and rice combo for dinner.",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
    },
    {
      imgSrc: blog3,
      title: "Chicken burger with double nuggets",
      description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
    },
  ];

  return (
    <div className="mx-auto lg:px-28 py-8 md:px-12 px-4" style={{ backgroundImage: `url(${A1})` }}>
      <div className="text-center p-2">
        <p className="text-prim py-2 px-4 rounded-full inline-block mb-4 text-md bg-[#f3f3f5] headings">OUR BLOG</p>
        <h1 className="md:text-6xl text-3xl text-dark font-[900]">Latest Publications</h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 space-x-4 mt-12">
        {publications.map((pub, index) => (
          <BlogCard
            key={index}
            imgSrc={pub.imgSrc}
            title={pub.title}
            description={pub.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Publications;
