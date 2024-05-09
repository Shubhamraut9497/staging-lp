// components/Feature.tsx
import React from "react";



const Feature = ({ heading, subheading, features }) => {
 
  return (
    <div className="container p-8 mx-auto xl: flex flex-col justify-center text-center py-20  max-w-2xl " >
      <div className=" feature text-center">
        <h2 className=" mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {heading}
        </h2>
        <h3 className="  py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300  mx-auto max-w-2xl">{subheading}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:flex justify-center items-center mt-3 mb-3 " >
          {features?.map((feature, index) => (
            <div
              key={index}
              className="flex-grow border p-4 rounded-lg shadow-md"
            >
                {/* <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full mb-4 rounded-lg"
                /> */}
              <h3 className="text-xl font-semibold mb-2">
                {feature.highlight}
              </h3>
              <p className="text-gray-700">{feature.highlight_description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
