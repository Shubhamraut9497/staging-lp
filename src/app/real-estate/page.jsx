import React from "react";
import RealIstateNavigation from "../components/Navigation/RealIstateNavigation";
import RealIstateHeroSection from '../components/HeroSection/RealIstateHeroSection'
import ProjectDetails from '../components/Real-Istate-Components/ProjectDetails'
import SiteFloorPlan from '../components/Real-Istate-Components/SiteFloorPlan'
import EastWestFacing from '../components/Real-Istate-Components/EastWestFacing'
import ViewsCarousel from '../components/Real-Istate-Components/ViewsCarousel'
import Amenities from '../components/Real-Istate-Components/Amenities'
import Gallery from '../components/Real-Istate-Components/Gallery'
import Location from '../components/Real-Istate-Components/Location'
import AgencyClassicFooter from "../components/Footer/AgencyClassicFooter"

const page = () => {
  return (
    <>
      <RealIstateNavigation />
      <RealIstateHeroSection/>
      <ProjectDetails/>
      <SiteFloorPlan/>
      <EastWestFacing/>
      <ViewsCarousel/>
      <Amenities/>
      <Gallery/>
      <Location/>
      <AgencyClassicFooter/>
    </>
  );
};

export default page;
