/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { teamData } from "../../constant/dummyData";
import Image from "next/image";

const Team = () => {
  return (
    <div className=" section-padding py-40 px-16">
      <div className="container">
        <div className="text-center">
          <div className=" mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
            Team Member
          </div>
          <div className="column-title py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300  mx-auto max-w-2xl ">
            Our Expert <span className="shape-bg">Instructors</span>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-[30px] ">
          {teamData.map((item, index) => (
            <div
              className=" bg-stone-100 shadow-gray-100 rounded-[8px] transition-all  duration-100 pt-10 pb-[28px] px-6 text-center  hover:border-t-4 border-indigo-500 "
              key={index}
            >
              <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
                <Image
                  src={item.img}
                  alt=""
                  className=" w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="course-content">
                <h4 className=" lg:text-2xl text-1xl mb-1 font-bold">
                  {item.name}
                </h4>
                <div>{item.title}</div>
                <ul className="space-x-4 flex justify-center pt-6">
                  <li>
                    <a
                      href="#"
                      className="h-10 w-10 rounded bg-red-paste text-primary flex flex-col justify-center items-center text-2xl transition hover:bg-danger hover:text-white"
                    >
                      <i className="material-icons">facebook</i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="h-10 w-10 rounded bg-green-paste text-secondary flex flex-col justify-center items-center text-2xl transition hover:bg-danger hover:text-gray"
                    >
                      <i className="material-icons">map</i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition hover:bg-[#8861DB] hover:text-white"
                    >
                      <i className="material-icons">login</i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
