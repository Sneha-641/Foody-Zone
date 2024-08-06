import A2 from '../assets/mariana-medvedeva-iNwCO9ycBlc-unsplash.jpg';
import A1 from '../assets/Home.jpg';
import React from "react";
import Slider from "react-slick";
import "../styles/coverflow.css";

const CoverflowSlider = () => {
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
    <div className="coverflow-slider-container px-28 py-8">
     <div><h1 className="text-3xl font-bold text-center mb-8">Our Gallery</h1></div>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className="coverflow-slide p-4">
            <img src={slide.src} alt={slide.alt} className="coverflow-slide-image shadow-lg rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CoverflowSlider;
