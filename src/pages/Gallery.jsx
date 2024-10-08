import A2 from '../assets/mariana-medvedeva-iNwCO9ycBlc-unsplash.jpg';
import A1 from '../assets/Home.jpg';
import React from "react";
import Slider from "react-slick";
import "../styles/gallery.css";

const Gallery = () => {
  const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    className: "center",
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };

  const slides = [
    { id: 1, src: A1, alt: "Slide 1" },
    { id: 2, src: A2, alt: "Slide 2" },
    { id: 3, src: A1, alt: "Slide 3" },
    { id: 4, src: A2, alt: "Slide 4" }
  ];

  return (
    <div className="coverflow-slider-container lg:px-28 py-8 md:px-12 px-4" id="gallery">
     <div className="text-center">
      <p className=" text-prim py-2 px-4 rounded-full inline-block mb-4 text-md bg-[#f3f3f5] headings">Gallery</p>
      <h1 className="md:text-6xl text-3xl text-dark font-[900] mb-8">Our Gallery</h1>
     </div>
      <Slider {...settings} className="p-4">
        {slides.map(slide => (
          <div key={slide.id} className="coverflow-slide p-2">
            <img src={slide.src} alt={slide.alt} className="coverflow-slide-image shadow-lg rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
