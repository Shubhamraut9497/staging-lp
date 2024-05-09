"use client"
import React from 'react'
import styles from './eduTeamMemers.module.css';
import { Icon, InlineIcon } from '@iconify/react';
import facebookIcon from '@iconify-icons/bxl/facebook';
import twitterIcon from '@iconify-icons/bxl/twitter';
import linkedin from '@iconify-icons/bxl/linkedin';

const EduTeamMembersSection = () => {
  return (
    <div className={` ${styles['section-padding']}`}>
  <div className={`${styles['container']}`}>
    <div className="text-center">
      <div className={`${styles["mini-title"]}`}>Team Member</div>
      <div className={`${styles["column-title"]}`}>
        Our Expert&nbsp;
        <span className={`${styles["shape-bg"]}`}>Instructors</span>
      </div>
    </div>
    <div className="grid xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
      <div
        className={` bg-white ${styles['shadow-box3']} rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center ${styles['hover:shadow-box4']}
      border-t-4 border-transparent ${styles['hover:border-secondary']} `}
      >
        <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
          <img
            src="/img/all-img/team1.png"
            alt=""
            className=" w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="course-content">
          <h4 className=" lg:text-2xl text-1xl mb-1 font-bold text-black">Erics Widget</h4>
          <div>UI/UX Designer</div>
          <ul className="space-x-4 flex justify-center pt-6">
            <li>
              <a
                href="#"
                className={` h-10 w-10 rounded ${styles['bg-red-paste']} ${styles['text-primary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-primary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:facebook" /> */}
                <Icon icon={facebookIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`h-10 w-10 rounded ${styles['bg-green-paste']} ${styles['text-secondary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-secondary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:twitter" /> */}
                <Icon icon={twitterIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                          hover:bg-[#8861DB] hover:text-white"
              >
                {/* <iconify-icon icon="bxl:linkedin" /> */}
                <Icon icon={linkedin}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={` bg-white ${styles['shadow-box3']} rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center  ${styles['hover:shadow-box4']}
        border-t-4 border-transparent ${styles['hover:border-secondary']} `}
      >
        <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
          <img
            src="/img/all-img/team2.png"
            alt=""
            className=" w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="course-content">
          <h4 className=" lg:text-2xl text-1xl mb-1 font-bold text-black">
            Daniel Steven
          </h4>
          <div>UI/UX Designer</div>
          <ul className="space-x-4 flex justify-center pt-6">
            <li>
              <a
                href="#"
                className={` h-10 w-10 rounded ${styles['bg-red-paste']} ${styles['text-primary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-primary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:facebook" /> */}
                <Icon icon={facebookIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`h-10 w-10 rounded ${styles['bg-green-paste']} ${styles['text-secondary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-secondary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:twitter" /> */}
                <Icon icon={twitterIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                          hover:bg-[#8861DB] hover:text-white"
              >
                {/* <iconify-icon icon="bxl:linkedin" /> */}
                <Icon icon={linkedin}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={` bg-white ${styles['shadow-box3']} rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center  ${styles['hover:shadow-box4']}
        border-t-4 border-transparent ${styles['hover:border-secondary']} `}
      >
        <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
          <img
            src="/img/all-img/team3.png"
            alt=""
            className=" w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="course-content">
          <h4 className=" lg:text-2xl text-1xl mb-1 font-bold text-black">
            Nelson Decosta
          </h4>
          <div>UI/UX Designer</div>
          <ul className="space-x-4 flex justify-center pt-6">
            <li>
              <a
                href="#"
                className={` h-10 w-10 rounded ${styles['bg-red-paste']} ${styles['text-primary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-primary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:facebook" /> */}
                <Icon icon={facebookIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`h-10 w-10 rounded ${styles['bg-green-paste']} ${styles['text-secondary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-secondary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:twitter" /> */}
                <Icon icon={twitterIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                          hover:bg-[#8861DB] hover:text-white"
              >
                {/* <iconify-icon icon="bxl:linkedin" /> */}
                <Icon icon={linkedin}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={` bg-white ${styles['shadow-box3']} rounded-[8px] transition-all duration-100 pt-10 pb-[28px] px-6 text-center  ${styles['hover:shadow-box4']}
        border-t-4 border-transparent ${styles['hover:border-secondary']} `}
      >
        <div className="w-[170px] h-[170px] rounded-full  relative mx-auto mb-8">
          <img
            src="/img/all-img/team4.png"
            alt=""
            className=" w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="course-content">
          <h4 className=" lg:text-2xl text-1xl mb-1 font-bold text-black">Selina Gomez</h4>
          <div>UI/UX Designer</div>
          <ul className="space-x-4 flex justify-center pt-6">
            <li>
              <a
                href="#"
                className={` h-10 w-10 rounded ${styles['bg-red-paste']} ${styles['text-primary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-primary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:facebook" /> */}
                <Icon icon={facebookIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`h-10 w-10 rounded ${styles['bg-green-paste']} ${styles['text-secondary']} flex flex-col justify-center items-center text-2xl transition
                          ${styles['hover:bg-secondary']} hover:text-white`}
              >
                {/* <iconify-icon icon="bxl:twitter" /> */}
                <Icon icon={twitterIcon}/>
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" h-10 w-10 rounded bg-[#EEE8FF] text-#8861DB flex flex-col justify-center items-center text-2xl transition
                          hover:bg-[#8861DB] hover:text-white"
              >
                {/* <iconify-icon icon="bxl:linkedin" /> */}
                <Icon icon={linkedin}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default EduTeamMembersSection