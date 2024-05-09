"use client";
// page.tsx
import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection/HeroSection";

import Feature from "./components/Feature/Feature";
import FaqSection from "./components/FaqsSection/FaqSection";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Grid from "./components/GridSection/Grid";
import Newsletter from "./components/NewsLetter/Newsletter";
import Testimonials from "./components/Testimonials/Testimonials";
import Platform from "./components/Platform";
import TeamMember from "./components/TeamMembers/TeamMember";

const HomePage = () => {
  const [datas, setData] = useState({});
  const [isLoading, setLoading] = useState(false);
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
  console.log(datas);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Navigation
            wpNumber={datas ? datas.whatsapp_number : <></>}
            logo={datas ? datas.logo : "hello"}
          />

          <HeroSection
            title={datas ? datas?.heading : <></>}
            subtitle={datas ? datas?.description : <></>}
            banner={datas ? datas?.banner : <></>}
          />
          <Feature
            heading={datas ? datas.usp_section_heading : <></>}
            subheading={datas ? datas.usp_section_sub_heading : <></>}
            features={datas ? datas.highlights : []}
          />

          <Grid
            data={datas ? datas.services : <></>}
            features={datas ? datas?.services : []}
            title={datas ? datas.services_section_heading : <></>}
            description={datas ? datas.services_section_sub_heading : <></>}
          />
          <Platform />
          {dummyArray &&
            dummyArray.map((dummy) => {
              return <>{dummy.showComponents ? <TeamMember /> : <></>}</>;
            })}
          <Testimonials testimonials={datas ? datas.testimonials : []} />
          <FaqSection faqSection={datas ? datas.faqs : []} />
          <Newsletter cta_button={datas ? datas.cta_button : <></>} />
          <Footer
            wpNumber={datas ? datas.whatsapp_number : <></>}
            copyright_text={datas ? datas.copyright_text : <></>}
            footerLinks={datas ? datas.links : []}
          />
        </>
      )}
    </>
  );
};
export default HomePage;
