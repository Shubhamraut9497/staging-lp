"use client";
import React from 'react'
import { useEffect, useRef, useState } from 'react';

const MascoContent = () => {

  

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      //const triggerPoint = windowHeight * 0.75; // Adjust as needed
      const triggerPoint = 1157; // Adjust as needed
      console.log("triggerPoint", triggerPoint);
      console.log("rect.top", rect.top);

      // Check if the element is in the viewport
      // if (rect.top >= 0 && rect.bottom <= windowHeight) {
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
    <section className="section-content">
    {/* Section Background */}
    <div className="bg-ColorOffWhite bg-pink-50">
      {/* Section Spacer */}
      <div className="section-space py-20">
        {/* Section Container */}
        <div className="container-custom mx-auto max-w-9xl px-4 sm:px-8 md:px-20 lg:px-24 xl:px-28 2xl:px-32">
          <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
            {/* Content Area Single */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1.2fr_minmax(0,_1fr)] xl:gap-[135px]">
              {/* Content Block Left */}
              <div className={`jos animate-fade-right ${isInView ? 'animate-play' : 'animate-pause'}`} data-jos_animation="fade-right" ref={ref}>
                {/* Section Wrapper */}
                <div>
                  {/* Section Block */}
                  <div className="mb-5">
                    <h2 className='text-gray-900 mb-6 font-plus-jakarta-sans font-bold leading-overflow tracking-tight text-gray-900 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>
                      Boost the effectiveness of your promotions as well as polish
                      your branding
                    </h2>
                  </div>
                  {/* Section Block */}
                </div>
                {/* Section Wrapper */}
                <p className='text-gray-800 mb-8 text-lg'>
                  SINCE 1998, we transform bold business ideas into exceptional
                  digital products. We ideate, design, and develop data-driven
                  digital products made to answer business challenges.
                </p>
                <p className='text-gray-800 text-lg'>
                  We offer 360° services to smoothly guide you on your way to
                  creating a seamless digital masterpiece projects on budget and
                  on time.
                </p>
              </div>
              {/* Content Block Left */}
              {/* Content Block Right */}
              <div className={`jos relative animate-fade-left ${isInView ? 'animate-play' : 'animate-pause'}`} ref={ref} data-jos_animation="fade-left">
                <div className="rounded-[10px] bg-[#FCEDCF] p-[30px] lg:p-10 xl:p-[50px]">
                  {/* Content Image */}
                  <img
                    src="/img/th-1/content-img-1.png"
                    alt="content-img-1"
                    width={426}
                    height={398}
                    className="h-auto w-full rounded-[10px]"
                  />
                </div>
                {/* Content Shape */}
                <img
                  src="/img/elements/content-shape-1.svg"
                  alt="content-shape-1"
                  width={168}
                  height={61}
                  className="absolute -right-16 -top-16"
                />
              </div>
              {/* Content Block Right */}
            </div>
            {/* Content Area Single */}
            {/* Content Area Single */}
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1fr_minmax(0,_1.2fr)] xl:gap-[135px]">
              {/* Content Block Left */}
              <div className={`jos lg:order-2 animate-fade-left ${isInView ? 'animate-play' : 'animate-pause' }`} ref={ref} data-jos_animation="fade-left">
                {/* Section Wrapper */}
                <div>
                  {/* Section Block */}
                  <div className="mb-5">
                    <h2 className='text-gray-900 mb-6 font-plus-jakarta-sans font-bold leading-overflow tracking-tight text-gray-900 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>
                      Discover the latest digital strategies &amp; emerging ideas
                      for business growth
                    </h2>
                  </div>
                  {/* Section Block */}
                </div>
                {/* Section Wrapper */}
                <p className='text-gray-800 mb-8 text-lg'>
                  Our brand tenders and marketing mixologists always serve up
                  unique, design-forward websites coded with today’s modern
                  technologies
                </p>
                <ul className="flex flex-col gap-5 font-semibold text-gray-800 text-lg">
                  <li className='flex align-center'>
                  <span className="mr-2 inline-block text-lg text-blue-700 material-icons">
                    verified
                    </span>
                    Reach new business opportunities or test your product ideas.
                  </li>
                  <li className='flex align-center'>
                  <span className="mr-2 inline-block text-lg text-blue-700 material-icons">
                    verified
                    </span>
                    Automate your processes and get data-driven business insights.
                  </li>
                  <li className='flex align-center'> 
                  <span className="mr-2 inline-block text-lg text-blue-700 material-icons">
                    verified
                    </span>
                    Create lightweight, scalable, and easly accessible cloud
                    solution.
                  </li>
                </ul>
              </div>
              {/* Content Block Left */}
              {/* Content Block Right */}
              <div
                className={`jos relative lg:order-1 animate-fade-right ${isInView ? 'animate-play' : 'animate-pause' }`}
                ref={ref}
                data-jos_animation="fade-right"
              >
                <div className="rounded-[10px] bg-[#BEF8FC] p-[30px] lg:p-10 xl:p-[50px]">
                  {/* Content Image */}
                  <img
                    src="/img/th-1/content-img-2.png"
                    alt="content-img-1"
                    width={426}
                    height={398}
                    className="h-auto w-full rounded-[10px]"
                  />
                </div>
                {/* Content Shape */}
                <img
                  src="/img/elements/content-shape-2.svg"
                  alt="content-shape-1"
                  width={107}
                  height={105}
                  className="absolute -bottom-1 -left-1"
                />
              </div>
              {/* Content Block Right */}
            </div>
            {/* Content Area Single */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </div>
    {/* Section Background */}
  </section>
  
  )
}

export default MascoContent