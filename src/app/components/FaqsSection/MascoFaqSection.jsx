'use client'
import React from 'react'
import { useEffect, useRef, useState } from 'react';
const MascoFaqSection = () => {

  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      //const triggerPoint = windowHeight * 0.75; // Adjust as needed
      const triggerPoint = 598; // Adjust as needed
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
    <section className="section-faq">
  <div className="relative z-10 overflow-hidden">
    {/* Section Space */}
    <div className="section-space py-20">
      {/* Section Container */}
      <div className="container-default mx-auto max-w-7xl px-4 sm:px-8 md:px-10 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Content Wrapper */}
        <div className="jos mb-[60px] xl:mb-20">
          {/* Section Content Block */}
          <div className="mx-auto max-w-[625px]">
            <h2 className="text-center text-gray-900 mb-6 font-plus-jakarta-sans font-bold leading-overflow tracking-tight text-gray-900 text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-5xl">
              Frequently asked questions about our digital agency
            </h2>
          </div>
          {/* Section Content Block */}
        </div>
        {/* Section Content Wrapper */}
        {/* FAQ Area */}
        <div className="jos">
          {/* Accordion List */}
          <ul className="mx-auto max-w-[1076px] rounded-[10px] border border-gray-800 text-gray-800">
            {/* Accordion Item */}
            <li className="accordion-item active overflow-hidden border-b border-gray-800 p-[30px] last:border-b-0 ">
              {/* Accordion Header */}
              <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-gray-800">
                <button className="flex-1 text-left">
                  Q. What is a digital agency?
                </button>
                <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-blue-700">
                  <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                  <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                </div>
              </div>
              {/* Accordion Header */}
              {/* Accordion Body */}
              <div className="accordion-body max-w-[826px] opacity-80">
                <p className="pt-5 text-lg">
                  A digital agency is a company that leverages digital channels
                  to grow their clients’ brands online. ls and technologies such
                  as web design, digital marketing, creative design and app
                  development.
                </p>
              </div>
              {/* Accordion Body */}
            </li>
            {/* Accordion Item */}
            {/* Accordion Item */}
            <li className="accordion-item overflow-hidden border-b border-gray-800 p-[30px] last:border-b-0">
              {/* Accordion Header */}
              <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-gray-800">
                <button className="flex-1 text-left">
                  Q. What services does a digital agency provide?
                </button>
                <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-blue-700">
                  <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                  <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                </div>
              </div>
              {/* Accordion Header */}
              {/* Accordion Body */}
              <div className="accordion-body max-w-[826px] opacity-80">
                <p className="pt-5 text-lg">
                  A digital agency is a company that leverages digital channels
                  to grow their clients’ brands online. ls and technologies such
                  as web design, digital marketing, creative design and app
                  development.
                </p>
              </div>
              {/* Accordion Body */}
            </li>
            {/* Accordion Item */}
            {/* Accordion Item */}
            <li className="accordion-item overflow-hidden border-b border-gray-800 p-[30px] last:border-b-0">
              {/* Accordion Header */}
              <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-gray-800">
                <button className="flex-1 text-left">
                  Q. Hiring a digital agency vs hiring in-house: What is the
                  difference?
                </button>
                <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-blue-700">
                  <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                  <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                </div>
              </div>
              {/* Accordion Header */}
              {/* Accordion Body */}
              <div className="accordion-body max-w-[826px] opacity-80">
                <p className="pt-5 text-lg">
                  A digital agency is a company that leverages digital channels
                  to grow their clients’ brands online. ls and technologies such
                  as web design, digital marketing, creative design and app
                  development.
                </p>
              </div>
              {/* Accordion Body */}
            </li>
            {/* Accordion Item */}
            {/* Accordion Item */}
            <li className="accordion-item overflow-hidden border-b border-gray-800 p-[30px] last:border-b-0">
              {/* Accordion Header */}
              <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-gray-800">
                <button className="flex-1 text-left">
                  Q. What questions should you ask when interviewing a digital
                  agency?
                </button>
                <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-blue-700">
                  <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                  <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                </div>
              </div>
              {/* Accordion Header */}
              {/* Accordion Body */}
              <div className="accordion-body max-w-[826px] opacity-80">
                <p className="pt-5 text-lg">
                  A digital agency is a company that leverages digital channels
                  to grow their clients’ brands online. ls and technologies such
                  as web design, digital marketing, creative design and app
                  development.
                </p>
              </div>
              {/* Accordion Body */}
            </li>
            {/* Accordion Item */}
            {/* Accordion Item */}
            <li className="accordion-item overflow-hidden border-b border-gray-800 p-[30px] last:border-b-0">
              {/* Accordion Header */}
              <div className="accordion-header flex justify-between gap-6 text-xl font-semibold text-gray-800">
                <button className="flex-1 text-left">
                  Q. How do digital agencies charge for their services?
                </button>
                <div className="accordion-icon-1 relative flex h-5 w-5 items-center justify-center rounded-[50%] bg-blue-700">
                  <span className="inline-block h-0.5 w-[10px] rounded-sm bg-white" />
                  <span className="absolute inline-block h-[10px] w-0.5 rotate-0 rounded-sm bg-white" />
                </div>
              </div>
              {/* Accordion Header */}
              {/* Accordion Body */}
              <div className="accordion-body max-w-[826px] opacity-80">
                <p className="pt-5 text-lg">
                  A digital agency is a company that leverages digital channels
                  to grow their clients’ brands online. ls and technologies such
                  as web design, digital marketing, creative design and app
                  development.
                </p>
              </div>
              {/* Accordion Body */}
            </li>
            {/* Accordion Item */}
          </ul>
          {/* Accordion List */}
          <div className={`jos mt-[60px] flex justify-center xl:mt-20 animate-fade-up animate-play ${isInView ? "animate-play" : "animate-pause"}`}>
            <a
              href="contact.html"
              ref={ref}
              className={`btn is-blue is-rounded btn-animation is-large group btn bg-blue-700 text-white font-semibold border-2 border-blue-700 hover:bg-transparent hover:text-blue-700 rounded-full py-[16px] px-[36px]`} 
            >
              <span>Still, have any questions? Contact us</span>
            </a>
          </div>
        </div>
        {/* FAQ Area */}
      </div>
      {/* Section Container */}
    </div>
    {/* Section Space */}
    {/* FAQ Shape - 1 */}
    <div className="absolute left-0 top-0 -z-10">
      <img
        src="/img/elements/faq-1-shape-1.svg"
        alt="service-section-shape"
        width={390}
        height={507}
      />
    </div>
    {/* FAQ Shape - 2 */}
    <div className="absolute bottom-0 right-0 -z-10">
      <img
        src="/img/elements/faq-1-shape-2.svg"
        alt="service-section-shape"
        width={467}
        height={609}
      />
    </div>
  </div>
</section>

  )
}

export default MascoFaqSection