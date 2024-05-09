"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";

const Navigation3 = () => {
    return (

        <>

            <header className={`site-header ${styles['home-one-header']} top-0 w-full z-[999] ${styles['rt-sticky']}`}>
                <div className={`main-header py-6 font-gilroy font-medium ${styles['text-gray']} text-lg leading-[27px]`}>
                    <div className={`${styles['container']}`}>
                        <div className=" flex items-center justify-between">
                            <a
                                href="index.html"
                                className="brand-logo flex-none lg:mr-10 md:w-auto max-w-[120px] "
                            >
                                <img src="/img/logo/logo.svg" alt="" />
                            </a>
                            <div className="flex items-center flex-1">
                                <div className={`flex-1 ${styles['main-menu']} relative mr-[74px]`}>
                                    <ul className={`${styles["menu-active-classes"]}`}>
                                        <li className={`${styles['menu-item-has-children']}`} style={{color:"gray"}}>
                                            <a href="#" >Home</a>
                                            <ul className={`${styles['sub-menu']}`}>
                                                <li>
                                                    <a href="index.html">Home One</a>
                                                </li>
                                                <li>
                                                    <a href="index2.html">Home Two</a>
                                                </li>
                                                <li>
                                                    <a href="index3.html">Home Three</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`${styles['menu-item-has-children']}`}>
                                            <a href="#">Pages</a>
                                            <ul className={`${styles['sub-menu']}`}>
                                                <li>
                                                    <a href="about.html">About 1</a>
                                                </li>
                                                <li>
                                                    <a href="about2.html">About 2</a>
                                                </li>
                                                <li>
                                                    <a href="instructor.html">instructor 1</a>
                                                </li>
                                                <li>
                                                    <a href="instructor2.html">instructor 2</a>
                                                </li>
                                                <li>
                                                    <a href="instructor-details.html">instructor Single</a>
                                                </li>
                                                <li>
                                                    <a href="event.html">Event</a>
                                                </li>
                                                <li>
                                                    <a href="event-single.html">Event single</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`${styles['menu-item-has-children']}`}>
                                            <a href="#">Courses</a>
                                            <ul className={`${styles['sub-menu']}`}>
                                                <li>
                                                    <a href="courses.html">courses</a>
                                                </li>
                                                <li>
                                                    <a href="courses-sidebar.html">courses Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="single-course.html">Single-course</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={`${styles['menu-item-has-children']}`}>
                                            <a href="#">Blog</a>
                                            <ul className={`${styles['sub-menu']}`}>
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-full.html">Full Width</a>
                                                </li>
                                                <li>
                                                    <a href="blog-standard.html">Blog Standard</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Single Blog</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contacts</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex-none flex space-x-[18px]">
                                    <div className=" hidden lg:block">
                                        <a href="#" className={`${styles['btn']} ${styles['btn-primary']} py-[15px] px-8`}>
                                            Start Free Trial
                                        </a>
                                    </div>
                                    <div className=" block lg:hidden">
                                        <button
                                            type="button"
                                            className=" text-3xl md:w-[56px] h-10 w-10 md:h-[56px] rounded bg-[#F8F8F8] flex flex-col items-center justify-center
                                  menu-click"
                                        >
                                            <iconify-icon icon="cil:hamburger-menu" rotate="180deg" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>



        </>

    )
}

export default Navigation3;