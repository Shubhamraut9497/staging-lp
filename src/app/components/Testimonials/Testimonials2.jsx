import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials2 = ({ testimonials }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-orange-100  dark:bg-gray-900 py-20">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
          What clients saying
        </h1>

        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="max-w-6xl mx-auto mt-16">
          <Slider {...settings}>
            {testimonials &&
              testimonials.map((testimonial, index) => (
                <div key={index} className="focus:outline-none">
                  <div>
                    <p className="flex items-center text-center text-gray-500 lg:mx-8">
                      {testimonial.testimonial}
                    </p>

                    <div className="flex flex-col items-center justify-center mt-8">
                      <img
                        className="object-cover rounded-full w-14 h-14"
                        src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                        alt=""
                      />

                      <div className="mt-4 text-center">
                        <h1 className="font-semibold text-gray-800 dark:text-white">
                          {testimonial.name}
                        </h1>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          Marketer
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials2;
