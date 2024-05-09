"use client"
import React from "react";
import Image from "next/image";

const NewsLetter = ({ cta_button}) => {
  return (
    <div className=" ">
      <div
        className="container px-0 lg:px-72 py-20"
        style={{ backgroundColor: "#30BEAD" }}
      >
        <div className="lg:flex lg:items-center lg:space-x-[70px]">
          <div className=" flex-none">
            <div className="flex items-center space-x-8 text-white max-w-[327px] mx-auto lg:mb-0 md:mb-10 mb-5">
              <div className=" flex-none ">
                <Image
                  src={"/img/svg/big-mail.svg"}
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex-1 lg:text-[33px] lg:leading-[51px] md:text-3xl text-2xl font-bold">
                Subscribe to My Newsletter
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <div className="md:flex items-center  relative md:space-x-6 md:space-y-0  space-y-4   ">
              <div className="flex-1 relative">
                <span className="absolute left-0 top-1/2 -translate-y-1/2">
                  <Image
                    src={"/img/svg/mail-white.svg"}
                    alt=""
                    width={18}
                    height={18}
                  />
                </span>
                <input
                  type="text"
                  placeholder="Enter your mail address"
                  className="border-b border-t-0 border-l-0 border-r-0 border-[#B2E2DF] ring-0 focus:ring-0 bg-transparent text-white
                  placeholder:text-[#B2E2DF] focus:outline-0 focus:border-[#B2E2DF] transition pl-8 text-lg w-full "
                  // Adjust the width using the 'w-full' class or set a specific width using 'md:w-auto'
                />
              </div>

              <div className="flex-none">
                <button className="btn bg-white p-4 rounded text-secondary md:w-auto w-full">
                 { cta_button}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
