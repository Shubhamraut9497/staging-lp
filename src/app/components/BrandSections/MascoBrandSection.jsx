"use client"
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
register();

const MascoBrandSection = () => {

  const swiperElRef = useRef(null);


  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <>

      <div className="section-brand">
        <div className="jos">
          {/* Section Space */}
          <div className="py-[60px] md:py-20 lg:py-[100px]">
            {/* Section Container */}
            <div className="container-default mx-auto max-w-7xl px-4 sm:px-8 md:px-10 lg:px-8 xl:px-10 2xl:px-12">
              <div className="text-gray-700 mx-auto mb-10 max-w-[80%] text-center text-xl font-semibold leading-[1.4] opacity-70 md:mb-16 lg:mb-20 lg:max-w-2xl">
                From start-ups to Fortune 500, we partner with brands of all sizes
              </div>

              <swiper-container
                ref={swiperElRef}
                slides-per-view="4"
                navigation="false"
                pagination="false"
                speed="900"
                autoplay="true"
              >
                <swiper-slide ><img
                  src="/img/th-1/brand-1.png"
                  alt="brand-1"
                  width={186}
                  height={46}
                  className="h-auto w-fit"
                /></swiper-slide>
                <swiper-slide> <img
                  src="/img/th-1/brand-2.png"
                  alt="brand-2"
                  width={186}
                  height={46}
                  className="h-auto w-fit"
                /></swiper-slide>
                <swiper-slide><img
                  src="/img/th-1/brand-3.png"
                  alt="brand-3"
                  width={186}
                  height={46}
                  className="h-auto w-fit"
                /></swiper-slide>
                <swiper-slide><img
                  src="/img/th-1/brand-4.png"
                  alt="brand-3"
                  width={186}
                  height={46}
                  className="h-auto w-fit"
                /></swiper-slide>
                <swiper-slide><img
                  src="/img/th-1/brand-5.png"
                  alt="brand-3"
                  width={186}
                  height={46}
                  className="h-auto w-fit"
                /></swiper-slide>
                <swiper-slide><img
                  src="/img/th-1/brand-1.png"
                  alt="brand-3"
                  width={186}
                  height={46}
                  className="h-auto w-fit"
                /></swiper-slide>
              </swiper-container>

              




            </div>
            {/* Section Container */}
          </div>
          {/* Section Space */}
        </div>
      </div>

      {/* Horizontal Line Separator */}
      <div className="mx-auto max-w-screen-xl h-px w-full bg-opacity-10 bg-black" ></div>
      {/* Horizontal Line Separator */}

    </>

  )
}

export default MascoBrandSection