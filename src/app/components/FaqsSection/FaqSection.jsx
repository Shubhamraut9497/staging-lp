import React from "react";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const FaqSection= ({faqSection}) => {

  return (
    <div className=" !p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl py-20">
        <h2 className=" mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white text-center mb-3">FAQs</h2>
        <h3 className="  py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300  mx-auto max-w-2xl text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod perferendis consectetur officia rerum dolorum iure. </h3>
        {faqSection?.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-center text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon   
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
};

// const faqdata = [
//   {
//     question: "Is this template completely free to use?",
//     answer: "Yes, this template is completely free to use.",
//   },
//   {
//     question: "Can I use it in a commercial project?",
//     answer: "Yes, this you can.",
//   },
//   {
//     question: "What is your refund policy? ",
//     answer:
//       "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
//   },
//   {
//     question: "Do you offer technical support? ",
//     answer:
//       "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support.",
//   },
// ];

export default FaqSection;
