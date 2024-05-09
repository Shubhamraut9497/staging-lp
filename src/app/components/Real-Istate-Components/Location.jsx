"use client";
import React, { useState } from "react";

const Location = () => {
  const [activeTab, setActiveTab] = useState("pills-rent");

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="banner-four py-20 bg-set bg-class-location px-20">
      <div className="container mx-auto">
        <div className="banner-four__inner">
          <div className="container new-container">
            <div className="banner-four-content">
              <h3 className="text-3xl font-bold text-center">Location</h3>
              <p
                className="pt-3 pb-3 text-center text-color"
                style={{ color: "#0E2A2B" }}
              >
                Experience luxury living like never before with spacious and
                elegantly designed villas for sale near Kollur, Tellapur,
                Nallagundla, Mokila. Nestled amidst serene surroundings, this
                upcoming villa project, a pre-launch villa project, offers the
                perfect blend of tranquility and convenience. Don't miss the
                chance to be a part of this luxurious villa gated community.
                Discover your dream home in this sought-after enclave and
                elevate your living experience to new heights.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-5 mb-5">
                <div className="col-span-1">
                  <h3 className="text-center font-bold text-xl">Map View</h3>
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3804.838587557535!2d78.239052!3d17.515217000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDMwJzU0LjgiTiA3OMKwMTQnMjAuNiJF!5e0!3m2!1sen!2sin!4v1710340760547!5m2!1sen!2sin"
                      width="800"
                      height="400"
                      style={{ border: "0" }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className="col-span-1 lg:ml-40">
                  <h3 className="text-center font-bold text-xl">
                    Location View
                  </h3>
                  <div className="gallery-thumb">
                    <img
                      src="img/real-estate/maps/Resizes-March-14.jpg"
                      alt="Location View"
                    />
                    <a
                      href="img/real-estate/maps/Resizes-March-14.jpg"
                      className="gallery-thumb__link gallery-popup"
                    >
                      <i className="fas fa-expand-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="banner-four-content__tab">
                <ul
                  className="nav nav-pills flex justify-center"
                  id="pills-tab"
                >
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "pills-rent" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("pills-rent")}
                    >
                      <span className="text text-white px-4 py-4 bg-emerald-950 mx-4">
                        HOSPITALS
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "pills-buy" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("pills-buy")}
                    >
                      <span className="text text-white px-4 py-4 bg-emerald-950 mx-4">
                        IT/CORPORATES
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "pills-sell" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("pills-sell")}
                    >
                      <span className="text text-white px-4 py-4 bg-emerald-950 mx-4">
                        ENTERTAINMENT
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "pills-connectivity" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("pills-connectivity")}
                    >
                      <span className="text text-white px-4 py-4 bg-emerald-950 mx-4">
                        CONNECTIVITY
                      </span>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button
                      className={`nav-link ${
                        activeTab === "pills-education" ? "active" : ""
                      }`}
                      onClick={() => handleTabChange("pills-education")}
                    >
                      <span className="text text-white px-4 py-4 bg-emerald-950 mx-4">
                        EDUCATION
                      </span>
                    </button>
                  </li>
                </ul>
                <div
                  className="tab-content text-center pt-20"
                  id="pills-tabContent"
                >
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pills-rent" ? "show active" : ""
                    }`}
                    id="pills-rent"
                    role="tabpanel"
                    aria-labelledby="pills-rent-tab"
                    tabIndex="0"
                  >
                    <ul>
                      <li>Apollo - 10mins walkway</li>
                      <li>Continental hospital - 15mins walkway</li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pills-buy" ? "show active" : ""
                    }`}
                    id="pills-buy"
                    role="tabpanel"
                    aria-labelledby="pills-buy-tab"
                    tabIndex="0"
                  >
                    <ul>
                      <li>Genpact - 35 mins driveway</li>
                      <li>Cognizant - 37 mins driveway</li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pills-sell" ? "show active" : ""
                    }`}
                    id="pills-sell"
                    role="tabpanel"
                    aria-labelledby="pills-sell-tab"
                    tabIndex="0"
                  >
                    <ul>
                      <li>SR Game Zone - 5 mins walkway</li>
                      <li>Fun Park - 23 mins driveway</li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pills-connectivity" ? "show active" : ""
                    }`}
                    id="pills-connectivity"
                    role="tabpanel"
                    aria-labelledby="pills-connectivity-tab"
                    tabIndex="0"
                  >
                    <ul>
                      <li>ORR</li>
                      <li>Bus stop - 3 mins</li>
                    </ul>
                  </div>
                  <div
                    className={`tab-pane fade ${
                      activeTab === "pills-education" ? "show active" : ""
                    }`}
                    id="pills-education"
                    role="tabpanel"
                    aria-labelledby="pills-education-tab"
                    tabIndex="0"
                  >
                    <ul>
                      <li>The Gaudium School - 1 min walkway</li>
                      <li>Samashti Intl. School - 5 mins walkway</li>
                      <li>Indus International School - 5 mins walkway</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
