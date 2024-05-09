import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Topics = ({ testimonials }) => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default slides to show for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Breakpoint for mobile screens
        settings: {
          slidesToShow: 1, // Show only one item for mobile screens
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <section className="bg-stone-100">
      <div className="px-4 py-12 lg:w-[1460px] sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className=" items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
            Testimonials
          </h2>
          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={handlePrevClick}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              onClick={handleNextClick}
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="-mx-6  mt-8 lg:col-span-2 lg:mx-0 ">
          <Slider ref={sliderRef} {...settings}>
            {testimonials &&
              testimonials.map((testimonial, index) => (
                <div key={index} className="px-3 sm:px-4 lg:px-6">
                  <blockquote className="flex flex-col justify-center bg-white p-4 sm:p-6 lg:p-8 shadow-sm h-96">
                    <div>
                      <div className="flex gap-0.5 text-green-500">
                        {/* Your rating stars SVGs */}
                      </div>
                      <div className="mt-4">
                        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-rose-600">
                          {testimonial.name}
                        </p>
                        <p className="mt-2 text-sm sm:text-base text-gray-700">
                          {testimonial.testimonial}
                        </p>
                      </div>
                    </div>
                    <footer className="mt-4 text-xs sm:text-sm font-medium text-gray-700">
                      &mdash; Michael Scott
                    </footer>
                  </blockquote>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Topics;
