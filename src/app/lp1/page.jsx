"use client"
import React, { useState, useEffect } from "react";
import Navigation2 from "../components/Navigation/Navigation2";
import AgencyclassicHero from '../components/HeroSection/AgencyclassicHero'
import FeaturesAgency from "../components/Feature/FeatureAgency";
import Testimonials2 from "../components/Testimonials/Testimonials2";
import AppClassicFaq from "../components/FaqsSection/AppClassicFaq";
// import Footer from "../components/Footer/Footer";
import BenefitsSection from "../components/BenefitsSections/AgencyModern";
import NewsLetter from "../components/NewsLetter/Newsletter";
import AgencyClassicFooter from '../components/Footer/AgencyClassicFooter'

const Page = () => {
  const [datas, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [dummyData, setDummy] = useState(false);
  const dummyArray = [
    {
      id: 1,
      name: "Item 1",
      showComponents: false,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/data`);
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const val = await res.json();
        console.log("Fetched data:", val);
        setData(val);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err); // Log the error
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navigation2
        wpNumber={datas ? datas.whatsapp_number : <></>}
        logo={datas ? datas.logo : "hello"}
      />
      <AgencyclassicHero />
      <FeaturesAgency
        heading={datas ? datas.usp_section_heading : <></>}
        subheading={datas ? datas.usp_section_sub_heading : <></>}
        features={datas ? datas.highlights : []}
      />
      <BenefitsSection
        title={datas ? datas.services_section_heading : <></>}
        description={datas ? datas.services_section_sub_heading : <></>}
        imageUrl={"#random"}
      />
      <Testimonials2 testimonials={datas ? datas.testimonials : []} />
      <AppClassicFaq faqSection={datas ? datas.faqs : []} />
      <NewsLetter cta_button={datas ? datas.cta_button : <></>} />
      {/* <Footer
        wpNumber={datas ? datas.whatsapp_number : <></>}
        copyright_text={datas ? datas.copyright_text : <></>}
        footerLinks={datas ? datas.links : []}
      /> */}
      <AgencyClassicFooter  
        logo={datas ? datas.logo : "hello"}
        copyright_text={datas ? datas.copyright_text : <></>}
        footerLinks={datas ? datas.links : []}/>
    </div>
  );
};

export default Page;
