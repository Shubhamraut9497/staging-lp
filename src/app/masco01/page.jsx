import React from "react"
import MascoHeroSection from './../components/HeroSection/MascoHeroSection';
import MascoBrandSection from './../components/BrandSections/MascoBrandSection';
import MascoService from './../components/Feature/MascoService';
import MascoContent from './../components/BenefitsSections/MascoContent';
import MascoPortfolioSection from './../components/Portfolio/MascoPortfolioSection';
import MascoTestimonial from './../components/Testimonials/MascoTestimonial';
import MascoFaqSection from './../components/FaqsSection/MascoFaqSection';

const page = () => {
   return (
      <>
         <main class="main-wrapper relative overflow-hidden">
            <MascoHeroSection />
            <MascoBrandSection />
            <MascoService />
            <MascoContent />
            <MascoPortfolioSection />
            <MascoTestimonial />
            <MascoFaqSection />
         </main>
      </>
   )
}

export default page