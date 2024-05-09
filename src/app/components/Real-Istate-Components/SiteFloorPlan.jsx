import React from "react";

const SiteFloorPlan = () => {
  return (
    <section className="about py-20 bg-set bg-lime-100" id="site-plan">
      <div className="container container-two px-4 md:px-0">
        <h3 className="text-3xl font-bold text-center mb-8">
          Site & Floor Plan
        </h3>
        <div className="flex justify-center">
          <div className="w-80 md:w-auto md:mx-10">
            <h4 className="text-xl font-semibold text-center mb-4">
              Master Plan
            </h4>
            <img
              src="img/real-estate/1 (2).png"
              alt="Site & Floor Plan"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteFloorPlan;
