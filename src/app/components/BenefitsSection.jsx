// import React from 'react';
// import Image from "next/image";

// interface Benefit {
//   title: string;
//   description: string;
//   imageUrl: string;
// }

// interface BenefitsSectionProps {
//   benefits: Benefit[];
// }

// const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits }) => {
//   console.log(benefits)
//   return (
//     <section className="benefits-section text-center text-xl">
//       <h2 className="text-3xl font-bold mb-8">Benefits</h2>
//       <div className="benefits-list">
//         {benefits?.map((benefit, index) => (
//           <div className="benefit" key={index}>
//              <Image src={benefit.imageUrl} alt={benefit.title} />
//             <div className="benefit-content">
//               <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
//               <p className="text-lg">{benefit.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default BenefitsSection;

import React from "react";
import Image from "next/image";
import vectorImg from "../../../public/img/service-page.png";
const Benefits = ({ title, description, imageUrl }) => {
  return (
    <>
      <div className=" container flex flex-wrap mb-20 p-8 lg:gap-10 lg:flex-nowrap ">
        <div
          className={` p-8 flex flex-wrap items-center text-center w-full lg:w-1/2`}
        >
          <div>
            <div className="flex flex-col w-full text-left mt-4 ">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {description}
              </p>
            </div>

            <div className="w-full mt-5">
              {/* {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))} */}
            </div>
          </div>
        </div>
        <div className={`flex items-center justify-center w-full lg:w-1/2 `}>
          <div>
            <Image
              src={vectorImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      <div className="container flex flex-wrap mb-20 p-8 lg:gap-10 lg:flex-nowrap ">
      <div className={`flex items-center justify-center w-full lg:w-1/2 `}>
          <div>
            <Image
              src={vectorImg}
              width="521"
              height="auto"
              alt="Benefits"
              className={"object-cover"}
              placeholder="blur"
            />
          </div>
        </div>
        <div
          className={` p-8 flex flex-wrap items-center text-center w-full lg:w-1/2`}
        >
          <div>
            <div className="flex flex-col w-full text-left mt-4 ">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {description}
              </p>
            </div>

            <div className="w-full mt-5">
              {/* {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// function Benefit(props) {
//   return (
//     <>
//       <div className="flex items-start mt-8 space-x-3">
//         <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
//           {React.cloneElement(props.icon, {
//             className: "w-7 h-7 text-indigo-50",
//           })}
//         </div>
//         <div>
//           <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//             {props.title}
//           </h4>
//           <p className="mt-1 text-gray-500 dark:text-gray-400">
//             {props.children}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

export default Benefits;
