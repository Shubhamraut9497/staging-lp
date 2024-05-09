import React from 'react'
import Navigation3 from '../components/Navigation/Navigation3'
import EduHeroSection from '../components/HeroSection/EduHeroSection'
import styles from './education01.module.css'
import EduAbout from './../components/About/EduAbout';
import EduBrandSection from './../components/BrandSections/EduBrandSection';
import EduFeatureSection from './../components/Feature/EduFeatureSection';
import EduCourseSection from './../components/Course/EduCourseSection';
import EduPlatfrom from './../components/BenefitsSections/EduPlatfrom';
import EduNewsLetterSection from '../components/NewsLetter/EduNewsLetterSection';
import EduTopics from './../components/Topics/EduTopics';
import EduTestimonialsSection from './../components/Testimonials/EduTestimonialsSection';
import EduTeamMembersSection from './../components/TeamMembers/EduTeamMembersSection';
import EduBlogsSections from '../components/TeamMembers/EduBlogsSections';
import EduFooter from './../components/Footer/EduFooter';

const page = () => {
  
  return (
    <div className={` ${styles['font-medium']} ${styles['text-gray']} ${styles['text-lg']} leading-[27px]`}>  
      <Navigation3/>
      <EduHeroSection/>
      <EduAbout/>
      <EduBrandSection/>
      <EduFeatureSection/>
      <EduCourseSection/>
      <EduPlatfrom/>
      <EduNewsLetterSection/>
      <EduTopics/>
      <EduTestimonialsSection/>
      <EduTeamMembersSection/>
      <EduBlogsSections/>
      <EduFooter/>
    </div>
  )
}

export default page