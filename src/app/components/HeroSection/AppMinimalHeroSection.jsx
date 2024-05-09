import React from 'react';
import Link from 'next/link';
import { Icon } from 'react-icons-kit';
import { androidArrowForward } from 'react-icons-kit/ionicons/androidArrowForward';
import { BannerData } from 'common/data/AppMinimal';

const AppMinimalHeroSection = () => {
  const { title, text, button, image, tagline } = BannerData;
  return (
    <div id="banner_section" className="relative">
      <img src={image?.src} className="bannerMoc" alt="banner image" />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white">{title}</h2>
          <p className="text-lg text-white mt-4">{text}</p>
          <div className="mt-6">
            <Link href={button.link}>
              <a className="inline-block py-2 px-4 bg-blue-500 text-white rounded-md flex items-center">
                {button.label}
                <Icon size={18} icon={androidArrowForward} className="ml-2" />
              </a>
            </Link>
            <span className="text-white block mt-2">{tagline}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMinimalHeroSection;
