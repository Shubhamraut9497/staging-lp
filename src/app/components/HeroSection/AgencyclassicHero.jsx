"use client";
import React, { useState } from "react";
import VideoModal from "../Modals/VideoModal";

const AgencyClassicHero = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="banner_section" className="py-16 bg-[#25252E] px-4 lg:px-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            We built to make your life easier & smarter
          </h1>
          <p className="text-lg lg:text-xl text-gray-100 mb-8">
            We are one-man design studio founded by Dash & Andri. We specialise
            in web design and development using Webflow & other CMS.
          </p>
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <button className="bg-primary text-black py-3 px-6 rounded-lg hover:bg-primary_hover transition duration-300 bg-green-300">
              Read our Story
            </button>
            <div className="relative">
              <button
                className="bg-transparent text-white hover:text-primary_hover border border-primary py-3 px-6 rounded-lg flex items-center space-x-2"
                onClick={() => setShowModal(true)}
              >
                <span class="material-icons">play_circle</span>
                <span>Our Interviews</span>
              </button>
              <VideoModal
                onClose={() => setShowModal(false)}
                visible={showModal}
              >
                <div className="">
                  <iframe
                    width="850"
                    height="505"
                    src="https://www.youtube.com/embed/hW98BFnVCm8"
                    title="Cartsy - Super Fast WooCommerce Theme"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </VideoModal>
            </div>
          </div>
        </div>
        <div className="max-w-lg mt-12 lg:mt-0">
          <img
            src="img/banner/heroImage.webp"
            alt="Banner"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default AgencyClassicHero;
