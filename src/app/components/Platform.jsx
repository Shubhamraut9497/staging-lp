/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Platform = () => {
  return (
    <div className=" bg-cover bg-no-repeat bg-center section-padding py-20">
      <div className="container px-16">
        <div className="lg:grid grid-cols-12 gap-[30px]">
          <div className="xl:col-span-5 lg:col-span-6 col-span-12">
            <div className="mini-title text-rose-400">Best Online Learning Platform</div>
            <h4 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white ">
              One Platfrom & Many
              <span className="shape-bg">Courses</span> For You
            </h4>
            <div className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered.
            </div>
            <ul className=" space-y-2 pt-8">
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={"/img/svg/ok.svg"} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    9/10 Average Satisfaction Rate
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={"/img/svg/ok.svg"} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    96% Completitation Rate
                  </h4>
                </div>
              </li>
              <li className="flex flex-wrap">
                <div className="flex-none mr-3">
                  <div className="">
                    <img src={"/img/svg/ok.svg"} alt="" />
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className=" text-lg mb-1 font-semibold">
                    Friendly Environment & Expert Teacher
                  </h4>
                </div>
              </li>
            </ul>
            <div className="pt-8">
              <a href="#" className=" btn btn-primary bg-rose-400 py-4 px-4 rounded-lg text-white">
                Explore Our Courses
              </a>
            </div>
          </div>
          <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-0 md:pt-10 pt-6">
            <img src={"/img/all-img/about2.png"} alt="" className=" mx-auto block w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
