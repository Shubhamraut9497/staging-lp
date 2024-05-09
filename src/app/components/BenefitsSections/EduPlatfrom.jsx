import React from 'react'
import styles from './eduPlatform.module.css'

const EduPlatfrom = () => {
    return (
        <div className={`bg-[url('/img/all-img/section-bg-2.png')] bg-cover bg-no-repeat bg-center ${styles['section-padding']}`}>
            <div className={`${styles['container']}`}>
                <div className="lg:grid grid-cols-12 gap-[30px]">
                    <div className="xl:col-span-5 lg:col-span-6 col-span-12">
                        <div className={`${styles["mini-title"]}`}>Best Online Learning Platform</div>
                        <h4 className={`${styles["column-title "]} ${styles['heading4']}`}>
                            One Platfrom &amp; Many
                            <span className={`${styles["shape-bg"]}`}>Courses</span>
                            &nbsp;For You
                        </h4>
                        <div>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered.
                        </div>
                        <ul className=" space-y-2 pt-8">
                            <li className="flex flex-wrap">
                                <div className="flex-none mr-3">
                                    <div className="">
                                        <img src="/img/svg/ok.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className=" text-lg mb-1 font-semibold text-black">
                                        9/10 Average Satisfaction Rate
                                    </h4>
                                </div>
                            </li>
                            <li className="flex flex-wrap">
                                <div className="flex-none mr-3">
                                    <div className="">
                                        <img src="/img/svg/ok.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className=" text-lg mb-1 font-semibold text-black">
                                        96% Completitation Rate
                                    </h4>
                                </div>
                            </li>
                            <li className="flex flex-wrap">
                                <div className="flex-none mr-3">
                                    <div className="">
                                        <img src="/img/svg/ok.svg" alt="" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className=" text-lg mb-1 font-semibold text-black">
                                        Friendly Environment &amp; Expert Teacher
                                    </h4>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-8">
                            <a href="#" className={` ${styles['btn']} ${styles['btn-primary']} `}>
                                Explore Our Courses
                            </a>
                        </div>
                    </div>
                    <div className="xl:col-span-7 lg:col-span-6 col-span-12 lg:pt-0 md:pt-10 pt-6">
                        <img
                            src="/img/all-img/about2.png"
                            alt=""
                            className=" mx-auto block w-full"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EduPlatfrom