import React from "react";

const RealEstateHeroSection = () => {
  return (
    <section className="banner-video h-screen relative">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/img/real-estate/Interiors/1 (2).jpg"
          className="w-full h-full object-cover"
          alt="Premium Luxury Triplex Villa"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center text-white z-10">
          <p className="text-lg font-semibold  w-full">
          <span className="bg-emerald-950 p-2 mb-3">Premium Luxury Triplex Villa</span>
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 mt-3 ">
            Near Kollur Exit 2 & 3<br/> Hyderabad
          </h1>
          <div className="mb-8"></div>
          <div className="flex justify-center">
            <div className="text-base text-white">
              <p>
                <b>Total area:</b><br></br> 18 Acres
              </p>
              <p>
                <b>Total units:</b><br></br> 150 Villas
              </p>
            </div>
            <div className="text-base text-white ml-12">
              <p>
                <b>Plot size:</b><br></br> 325 & 360 SQ Yards
              </p>
              <p>
                <b>Built up area:</b><br></br> 5,000 & 5,700 sqft East & West Facing
                Villas
              </p>
            </div>
          </div>
          <p className="text-base py-4 text-xl font-bold">
            Starting Price at 4.2cr
          </p>
        </div>
      </div>
    </section>
  );
};

export default RealEstateHeroSection;
