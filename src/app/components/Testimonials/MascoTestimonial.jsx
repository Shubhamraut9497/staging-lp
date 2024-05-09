'use client'
import React from 'react'
import { useEffect, useRef, useState } from 'react';

const MascoTestimonial = () => {

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      //const triggerPoint = windowHeight * 0.75; // Adjust as needed
      const triggerPoint = 559; // Adjust as needed
      console.log("triggerPoint", triggerPoint);
      console.log("rect.top", rect.top);

      // Check if the element is in the viewport
      if (rect.top <= triggerPoint ) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Call handleScroll on mount to check initial state
    handleScroll();

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section className="section-testimonial">
  {/* Section Background */}
  <div className=" bg-pink-50">
    {/* Section Space */}
    <div className="section-space py-20">
      {/* Section Container */}
      <div className="container-custom mx-auto max-w-9xl px-4 sm:px-8 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
        {/* Section Content Wrapper */}
        <div className="jos mb-[60px] xl:mb-20">
          {/* Section Content Block */}
          <div className="mx-auto max-w-[625px]">
            <h2 className="text-center text-gray-900 mb-6 font-plus-jakarta-sans font-bold leading-overflow tracking-tight text-gray-900 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
              Most of our satisfied clients leave their feedback
            </h2>
          </div>
          {/* Section Content Block */}
        </div>
        {/* Section Content Wrapper */}
        {/* Testimonial Area */}
        <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-20 xxl:grid-cols-[1.1fr_minmax(0,_1fr)] ">
          <img
            src="/img/th-1/testimonial-image-1.png"
            alt="testimonial-image-1"
            width={636}
            height={446}
            ref={ref}
            className={`jos h-auto w-full rounded-2xl animate-fade-right ${isInView ? 'animate-play' : 'animate-pause'}`}
            data-jos_animation="fade-right"
          />
          <div
            className="jos flex flex-col text-ColorBlack animate-fade-left"
            data-jos_animation="fade-left"
          >
            <img
              src="/img/icons/icon-blue-quote-right-reverse.svg"
              alt="icon-blue-quote-right-reverse"
              width={90}
              height={60}
              className="h-auto w-10 xl:w-[90px]"
            />
            <p className="my-[30px] text-xl font-semibold leading-[1.33] -tracking-[0.5px] lg:text-2xl text-gray-800">
              They’re probably one of the easiest vendors I’ve ever worked with
              in the digital space. They have our best interests in mind. The
              team went the extra mile in negotiating costs and delivering
              within a flexible scope. They’re customer focused and strong in
              terms of development quality.
            </p>
            <div className="mb-8 lg:mb-[50px]">
              <span className="block text-xl font-semibold text-gray-800">
                Dominika Drońska
              </span>
              <span className="block text-gray-800 text-lg">
                Senior Digital Marketing Manager, Abbey Road Studios
              </span>
            </div>
          </div>
        </div>
        {/* Testimonial Area */}
      </div>
      {/* Section Container */}
    </div>
    {/* Section Space */}
  </div>
  {/* Section Background */}
</section>

  )
}

export default MascoTestimonial