import React from "react";
import Image from "next/image";

const AgencyModern = ({ title, description }) => {
  return (
    <div className="py-16 bg-white px-20 py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-tight mb-4 ">
              {title}
            </h2>
            <p className="text-base lg:text-lg text-gray-700 mb-6">
              {description}
            </p>
            <ul className="grid grid-cols-1 gap-4 mb-6">
              {/* {data.WorkHardList.map((item) => (
                <li className="flex items-center" key={item.id}>
                  <img
                    src={checkIcon?.src}
                    alt="tick icon"
                    className="w-5 h-5 mr-2"
                  />
                  <span>{item.title}</span>
                </li>
              ))} */}
            </ul>
            <a href="#" className="text-primary flex items-center">
              Explore more
              <span class="material-icons">chevron_right</span>
            </a>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              src={"img/benefits-section/work-hard-illustration.webp"}
              alt="Illustration"
              height="auto"
              className="object-cover"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyModern;
