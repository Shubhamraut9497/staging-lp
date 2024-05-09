import React, { useState } from "react";

const AppClassicFaq = ({ faqSection }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white dark:bg-gray-900 lg:py-20 px-20">
      <div className="container px-6 py-12 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white text-center ">
          Frequently asked questions
        </h1>

        <div className="mt-8 space-y-8 lg:mt-12">
          {faqSection &&
            faqSection.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800"
                >
                  <button
                    className="flex items-center justify-between w-full"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h1 className="font-semibold text-gray-700 dark:text-white">
                      {faq.question}
                    </h1>

                    <span className="bg-blue-500 text-white rounded-full p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-6 h-6 transform transition-transform ${
                          isOpen ? "rotate-90" : "rotate-180"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d={isOpen ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
                        />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default AppClassicFaq;
