import React from "react";
import Image from "next/image";
const FeatureSection = ({ heading, subheading, features }) => {
  const dummyarray = [
    {
      heading: "In Vitro Fertilization (IVF)",
      imgUrl:
        "https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/1_0.svg",
      text: "Getting the best egg and the best sperm together through advanced technologies to make you realize your parenthood dream!",
    },
    {
      heading: "Intrauterine Insemination (IUI)",
      imgUrl:
        "https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/2_0.svg",
      text: " Selecting the best sperm through Microfluidics to make you happy parents.",
    },
    {
      heading: "In Vitro Maturation of Oocytes (CAPA IVM)",
      imgUrl:
        " https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/3_0.svg",
      text: " Harmonious and safe treatment experience with a lesser number of injections to help you conceive despite cancer or PCOS. ",
    },
    {
      heading: "Fertility Preservation",
      imgUrl:
        "https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/4_0.svg",
      text: " Cancer or any other medical condition need not put an end to your parenthood dream. Preserve your fertility potential for future pregnancy goals.",
    },
    {
      heading: "In Vitro Fertilization (IVF)",
      imgUrl:
        "https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/1_0.svg",
      text: "Getting the best egg and the best sperm together through advanced technologies to make you realize your parenthood dream!",
    },
    {
      heading: "Intrauterine Insemination (IUI)",
      imgUrl:
        "https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/2_0.svg",
      text: " Selecting the best sperm through Microfluidics to make you happy parents.",
    },
  ];

  return (
    <div
      id="featureSection"
      className="py-16 bg-white mx-auto px-8 sm:px-16 lg:px-40 py-20"
    >
      <div className="container mx-auto">
        <div className="mb-10 lg:mb-14 text-center">
          <span className="mt-3 mb-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl dark:text-white">
            {heading}
          </span>
          <h2 className="py-4 text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-300 mx-auto max-w-2xl">
            {subheading}
          </h2>
        </div>
        <div className="flex flex-wrap">
          {dummyarray?.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="w-full sm:w-1/2 lg:w-1/3 border-b border-l hover:shadow-xl"
            >
              <div className="p-4">
                <div className=" flex items-center justify-center">
                  <Image
                    src={feature.imgUrl}
                    alt={`feature-${index}`}
                    width={100}
                    height={100}

                  />
                </div>
                <h3 className="text-center mt-4 mb-2 text-lg">
                  {feature.heading}
                </h3>
                <p className="text-center text-gray-500 sm:w-full">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
