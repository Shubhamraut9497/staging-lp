"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ViewsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
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
    <section className="portfolio py-20 bg-set " id="amenities">
      <div className="container px-4 mx-auto">
        <div className="section-heading mb-8 text-center">
          <h2 className="text-3xl font-bold">Amenities</h2>
        </div>
        <Slider {...settings}>
          <div className="portfolio-item rounded-lg px-2">
            <img
              src="img/real-estate/amenities/Indoor-520-630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-item rounded-lg  px-2">
            <img
              src="img/real-estate/amenities/Squash-Court--520-630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-item rounded-lg px-2">
            <img
              src="img/real-estate/amenities/Swimming-Pool-520 630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-item rounded-lg  px-2">
            <img
              src="img/real-estate/amenities/Table-tenis-520-630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-item rounded-lg px-2">
            <img
              src="img/real-estate/amenities/Toddler-Space-&-Playing-Deck--520-630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-item rounded-lg px-2 ">
            <img
              src="img/real-estate/amenities/Walking-Jogging-Track-Shuttle--520-630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-item rounded-lg px-2">
            <img
              src="img/real-estate/amenities/Yoga-520-630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
          <div className="portfolio-item rounded-lg px-2 ">
            <img
              src="img/real-estate/amenities/Walking-Jogging-Track-Shuttle--520-630.jpg"
              alt="Premium Luxury Villa Views"
              className="w-full h-auto"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ViewsCarousel;
