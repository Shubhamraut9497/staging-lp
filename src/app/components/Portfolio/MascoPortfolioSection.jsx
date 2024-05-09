"use client";
import React from 'react'
import { useEffect, useRef, useState } from 'react';

const MascoPortfolioSection = () => {

    const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      //const triggerPoint = windowHeight * 0.75; // Adjust as needed
      const triggerPoint = 640; // Adjust as needed
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
        <section className="section-portfolio">
            <div className="relative z-10 overflow-hidden">
                {/* Section Space */}
                <div className="section-space py-20">
                    {/* Section Container */}
                    <div className="container-default mx-auto max-w-7xl px-4 sm:px-8 md:px-10 lg:px-8 xl:px-10 2xl:px-12">
                        {/* Section Wrapper */}
                        <div className="jos mb-[60px] flex flex-wrap items-end justify-between gap-8 xl:mb-20">
                            {/* Section Block */}
                            <div className="max-w-[550px]">
                                <h2 className='text-gray-900 mb-6 font-plus-jakarta-sans font-bold leading-overflow tracking-tight text-gray-900 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl'>We create world-class web design, &amp; branding</h2>
                            </div>
                            {/* Section Block */}
                            <a
                                href="portfolio.html"
                                ref={ref}
                                className={`btn is-blue animate-fade-up is-rounded btn-animation is-large group btn bg-blue-700 text-white font-semibold border-2 border-blue-700 hover:bg-transparent hover:text-blue-700 rounded-full py-[16px] px-[36px] ${isInView ? 'animate-play' : 'animate-pause'}`}
                            >
                                <span>See more works</span>
                            </a>
                        </div>
                        {/* Section Wrapper */}
                        {/* Portfolio List */}
                        <div className="grid gap-8 md:grid-cols-2 lg:gap-10 xl:gap-[60px]">
                            {/* Portfolio Item */}
                            <div className={`jos animate-fade-up ${isInView ? 'animate-play' : 'animate-pause'}`} ref={ref} data-jos_delay={0}>
                                <div className="group">
                                    <div className="overflow-hidden rounded-[10px]">
                                        <img
                                            src="/img/th-1/portfolio-img-1.png"
                                            alt="portfolio-img-1"
                                            width={617}
                                            height={450}
                                            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-5 flex flex-wrap justify-between gap-5 text-ColorBlack lg:flex-nowrap xl:mb-7">
                                            <a
                                                href="portfolio-details.html"
                                                className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-gray-800 group-hover:text-blue-700 xl:text-2xl "
                                            >
                                                App — The power of communication
                                            </a>
                                            <a href="#" className="text-gray-800 hover:text-blue-700 text-lg">
                                                UI/UX Design
                                            </a>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item */}
                            {/* Portfolio Item */}
                            <div className={`jos animate-fade-up ${isInView ? 'animate-play' : 'animate-pause'}`} ref={ref} data-jos_delay="0.3">
                                <div className="group">
                                    <div className="overflow-hidden rounded-[10px]">
                                        <img
                                            src="/img/th-1/portfolio-img-2.png"
                                            alt="portfolio-img-2"
                                            width={617}
                                            height={450}
                                            className="h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="mt-6">
                                        <div className="mb-5 flex flex-wrap justify-between gap-5 text-ColorBlack lg:flex-nowrap xl:mb-7">
                                            <a
                                                href="portfolio-details.html"
                                                className="text-xl font-semibold leading-[1.33] -tracking-[0.5px] text-gray-800 group-hover:text-blue-700 xl:text-2xl"
                                            >
                                                Website — The future lifestyle platform.
                                            </a>
                                            <a href="#" className="text-gray-800 hover:text-blue-700 text-lg">
                                                Branding
                                            </a>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* Portfolio Item */}
                        </div>
                        {/* Portfolio List */}
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Space */}
                {/* Portfolio Shape - 2 */}
                <div className="absolute right-0 top-0 -z-10">
                    <img
                        src="/img/elements/portfolio-1-shape-1.svg"
                        alt="portfolio-1-shape-1"
                        width={467}
                        height={609}
                    />
                </div>
            </div>
        </section>

    )
}

export default MascoPortfolioSection