"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ViewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="portfolio py-20 bg-set bg-lime-100" id="amenities">
      <div className="container px-4 mx-auto">
        <div className="section-heading mb-8 text-center">
          <h2 className="text-3xl font-bold">Villa Views</h2>
        </div>
        <Slider {...settings}>
          <div className="portfolio-item rounded-lg  px-2">
            <img src="img/real-estate/villas/Villa-1.jpg" alt="Premium Luxury Villa Views" className="w-full h-auto" />
          </div>
          <div className="portfolio-item rounded-lg  px-2">
            <img src="img/real-estate/villas/Villa-2.jpg" alt="Premium Luxury Villa Views" className="w-full h-auto" />
          </div>
          <div className="portfolio-item rounded-lg  px-2">
            <img src="img/real-estate/villas/Villa-3.jpg" alt="Premium Luxury Villa Views" className="w-full h-auto" />
          </div>
          <div className="portfolio-item rounded-lg  px-2">
            <img src="img/real-estate/villas/Villa-4.jpg" alt="Premium Luxury Villa Views" className="w-full h-auto" />
          </div>
          <div className="portfolio-item rounded-lg  px-2">
            <img src="img/real-estate/villas/Villa-5.jpg" alt="Premium Luxury Villa Views" className="w-full h-auto" />
          </div>
          <div className="portfolio-item rounded-lg ">
            <img src="img/real-estate/villas/Villa-6.jpg" alt="Premium Luxury Villa Views" className="w-full h-auto" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ViewsCarousel;
