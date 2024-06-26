"use client"
import React from 'react'
import styles from './eduFooter.module.css';
import { Icon, InlineIcon } from '@iconify/react';
import facebookIcon from '@iconify-icons/bxl/facebook';
import twitterIcon from '@iconify-icons/bxl/twitter';
import linkedinIcon from '@iconify-icons/bxl/linkedin';
import instagramIcon from '@iconify-icons/bxl/instagram';

const EduFooter = () => {
  return (
    <footer className="bg-black bg-[url('/img/all-img/footer-bg-1.png')] bg-cover bg-center bg-no-repeat">
    <div className={`${styles['section-padding']} ${styles.container}`}>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        <div className="single-footer">
          <div className="lg:max-w-[270px]">
            <a href="#" className="mb-10 block">
              <img src="/img/logo/footer-logo.svg" alt="" />
            </a>
            <p>
              Lorem ipsum amet, consectetur adipiscing elit. Suspendis varius enim
              eros elementum tristique. Duis cursus.
            </p>
            <ul className="flex space-x-4 pt-8">
              <li>
                <a
                  href="#"
                  className={`flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
              transition ${styles['hover:bg-primary']} hover:text-white`}
                >
                  <Icon icon={facebookIcon}/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition ${styles['hover:bg-primary']} hover:text-white`}
                >
                  <Icon icon={twitterIcon}/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition ${styles['hover:bg-primary']} hover:text-white`}
                >
                  <Icon icon={linkedinIcon}/>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`flex h-12 w-12 flex-col items-center justify-center rounded bg-white bg-opacity-[0.08] text-2xl text-white
                  transition ${styles['hover:bg-primary']} hover:text-white`}
                >
                  <Icon icon={instagramIcon}/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="single-footer">
          <div className="flex space-x-[80px]">
            <div className="flex-1 lg:flex-none">
              <h4 className="mb-8 text-2xl font-bold text-white">Links</h4>
              <ul className="list-item space-y-5">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Courses</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
            <div className="flex-1 lg:flex-none">
              <h4 className="mb-8 text-2xl font-bold text-white">Legal</h4>
              <ul className="list-item space-y-5">
                <li>
                  <a href="#">Legal</a>
                </li>
                <li>
                  <a href="#">Tearms of Use</a>
                </li>
                <li>
                  <a href="#">Tearm &amp; Condition</a>
                </li>
                <li>
                  <a href="#">Payment Method</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="single-footer">
          <h4 className="mb-8 text-2xl font-bold text-white">Newsletter</h4>
          <div className="mb-8">
            Join over&nbsp; 
            <span className={`${styles['text-primary']} underline`}>68,000</span>&nbsp;people getting our emails Lorem ipsum dolor sit amet consectet
          </div>
          <div className={`mb-4 flex items-center rounded-md bg-white py-[10px] pr-[10px] pl-6 ${styles['shadow-e1']}`}>
            <div className="flex-none">
              <span className=" ">
                <img src="/img/icon/mail.svg" alt="" />
              </span>
            </div>
            <div className="flex-1">
              <input
                type="text"
                placeholder="Enter your mail"
                className={`border-none focus:ring-0 ${styles['edu-footer-input']}`}

              />
            </div>
          </div>
          <button className={`${styles.btn} ${styles['btn-primary']} block w-full text-center`}>
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
    <div className={`${styles.container} border-t border-white border-opacity-[0.1] py-8 text-center text-base`}>
      © Copyright 2022 | Edumim Template | All Rights Reserved
    </div>
  </footer>
  
  )
}

export default EduFooter