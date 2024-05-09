"use client";
import React from "react";
import CTAForm01 from "../Form/CTAForm01";
import Image from "next/image";

const HeroSection01 = ({ title, subtitle, banner }) => {
  const orig = "https://app.shootorder.com/assets/";
  const imgFormat = ".jpg";
  return (
    <div className="herobanner bg-black bg-opacity-20">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-7/12 mb-10">
          <div className="container mx-auto h-full sm:p-10">
            <nav className="flex px-4 justify-between items-center">
              <div className="text-4xl font-bold">
                Plant<span className="text-green-700">.</span>
              </div>
              <div>
                <img
                  src="https://image.flaticon.com/icons/svg/497/497348.svg"
                  alt=""
                  className="w-8"
                />
              </div>
            </nav>
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full animate-fade-up animate-delay-300 animate-once">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  {/* Find your <span className="text-green-700">greeny</span> stuff for
                                    your room */}
                  {title}
                </h1>
                <div className="w-20 h-2 bg-green-700 my-4" />
                <p className="text-xl mb-10">{subtitle}</p>
                <button className="bg-green-500 text-white text-2xl font-medium px-4 py-2 rounded shadow">
                  Learn More
                </button>
              </div>
            </header>
          </div>
        </div>
        <div className="w-full h-48 object-cover sm:h-screen sm:w-5/12 align-middle">
          <CTAForm01 />
        </div>
      </div>
      <div>
        <Image
          className="zmin5 object-cover"
          src={`${orig + banner + imgFormat}`}
          fill={true}
          alt="Banner"
        />
      </div>
    </div>
  );
};

export default HeroSection01;
