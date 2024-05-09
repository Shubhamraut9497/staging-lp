// // components/Feature.tsx
// import React from "react";

// // interface FeatureProps {
// //   title: string;
// //   description: string;
// // }

// const Grid = ({ heading, features, title,description,}) => {

//   const getColumnCount = () => {
//     // Logic to determine the number of columns based on the data length
//     const length = features.length;

//     if (length <= 2) return "repeat(2, 1fr)"; // 2 columns
//     if (length >= 3 && length <= 4) return "repeat(3, 1fr)"; // 2 columns
//     if (length > 4 && length <= 6) return "repeat(3, 1fr)"; // 3 columns
//     if(length>6 && length<=8)return "repeat(4, 1fr)"; //
//     return "1fr"; // 1 column for any other case
//   };
//   return (
//     <div className="container p-8 mx-auto xl: flex flex-col justify-center text-center py-40 bg-stone-100" >
//       <div className=" feature text-center">
//         <h2 className=" mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
//           {title}
//         </h2>
//         <h3 className="  py-4  text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300  mx-auto max-w-2xl">
//           {description}
//         </h3>
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: getColumnCount(),
//             gap: "1rem",
//           }}
//         >
//           {features?.map((feature, index) => (
//             <div
//               key={index}
//               className="flex-grow border p-8 rounded-lg shadow-md bg-white"
//             >
//               {/* <Image
//                   src={feature.image}
//                   alt={feature.title}
//                   className="w-full mb-4 rounded-lg"
//                 /> */}
//               <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
//               <p className="text-gray-700">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>

//   );
// };

// export default Grid;
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
    heading:
      "In Vitro Maturation of Oocytes (CAPA IVM)",
    imgUrl: " https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/3_0.svg",
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
  {
    heading:
      "Intrauterine Insemination (IUI)",
    imgUrl: "https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/3_0.svg",
    text: " Harmonious and safe treatment experience with a lesser number of injections to help you conceive despite cancer or PCOS. ",
  },
  {
    heading: "Fertility Preservation",
    imgUrl:
      "https://www.oasisindia.in/fertility-treatment-best-ivf-clinic-in-india/assets/img/icons/4_0.svg",
    text: " Cancer or any other medical condition need not put an end to your parenthood dream. Preserve your fertility potential for future pregnancy goals.",
  },
];

import React from "react";
import Image from "next/image";

const Grid = ({ heading, features, title, description }) => {
  const getColumnCount = () => {
    const length = features.length;

    if (length <= 2) return "repeat(1, minmax(0, 1fr))"; // 1 column for small screens
    if (length >= 3 && length <= 4) return "repeat(2, minmax(0, 1fr))"; // 2 columns for small screens
    if (length > 4 && length <= 6) return "repeat(3, minmax(0, 1fr))"; // 3 columns for small screens
    if (length > 6 && length <= 8) return "repeat(4, minmax(0, 1fr))"; // 4 columns for small screens
    return "repeat(1, minmax(0, 1fr))"; // Default to 1 column for small screens
  };

  return (
    <div className="p-8 mx-auto flex flex-col justify-center text-center py-20 bg-stone-100 ">
      <div className="feature text-center">
        <h2 className="mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl dark:text-white">
          {title}
        </h2>
        <h3 className="py-4 text-lg leading-normal text-gray-500 lg:text-xl dark:text-gray-300 mx-auto max-w-2xl">
          {description}
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
          {/* {features?.map((feature, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md bg-white"
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))} */}

          {dummyarray &&
            dummyarray.map((feature, index) => {
              return (
                <div
                  key={index}
                  className="group shadow-md rounded-lg hover:rotate-y-180 transform perspective-1000 relative h-60 bg-white flex justify-center items-center "
                >
                  <div className="front  rounded-lg p-4">
                    <center>
                      <Image
                        loading="lazy"
                        className="lazy-load"
                        src={feature.imgUrl} // Use feature.imgUrl as the src
                        alt="icons"
                        width="80"
                        height="100"
                      />
                    </center>
                    <h3 className="text-center">{feature.heading}</h3>
                  </div>

                  <div className="back bg-white rounded-lg p-4 absolute top-0 left-0 w-full h-full rotate-y-180 transition-transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center ">
                    <p className="text-black">{feature.text}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Grid;
