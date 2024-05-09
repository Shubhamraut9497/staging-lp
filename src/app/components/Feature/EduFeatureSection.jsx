"use client"
import React from 'react'
import styles from './eduFeature.module.css'
import { Icon, InlineIcon } from '@iconify/react';

const EduFeatureSection = () => {
    return (
        <div className={`feature-area bg-[url('/img/all-img/section-bg-1.png')] bg-cover bg-no-repeat bg-center ${styles['section-padding']}`}>
            <div className={`${styles['container']}`}>
                <div className="text-center">
                    <div className={`${styles["mini-title"]}`}>Core Features</div>
                    <div className={`${styles["column-title"]}`}>
                        Why&nbsp;
                        <span className={`${styles["shape-bg"]}`}>Choose</span>&nbsp;Edumim
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
                    <div className={`bg-white ${styles['shadow-box']} rounded-[8px]  p-10 group ${styles['hover:bg-primary']}  transition duration-150 hover:-translate-y-1`}>
                        <div
                            className={`h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center ${styles['text-secondary']} ${styles['bg-green-paste']} mb-8
          text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150`}
                        >
                            <span className="material-icons text-3xl">
                                language
                            </span>
                        </div>
                        <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white font-bold text-black">
                            Learn More Anywhere
                        </h4>
                        <div className="transition duration-150 group-hover:text-white">
                            Learn from anywhere in world on desktop, mobile or tablet with an
                            Internet connection.{"}"}
                        </div>
                    </div>
                    <div className={`bg-white ${styles['shadow-box']} rounded-[8px]  p-10 group ${styles['hover:bg-primary']}  transition duration-150 hover:-translate-y-1`}>
                        <div
                            className={`h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center ${styles['text-secondary']} ${styles['bg-green-paste']} mb-8
          text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150`}
                        >
                            <Icon icon="healthicons:i-training-class-outline" />
                        </div>
                        <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white font-bold text-black">
                            Expert Instructor
                        </h4>
                        <div className="transition duration-150 group-hover:text-white">
                            Learn from anywhere in world on desktop, mobile or tablet with an
                            Internet connection.{"}"}
                        </div>
                    </div>
                    <div className={`bg-white ${styles['shadow-box']} rounded-[8px]  p-10 group ${styles['hover:bg-primary']}  transition duration-150 hover:-translate-y-1`}>
                        <div
                            className={`h-[72px] w-[72px] rounded-full flex flex-col items-center justify-center ${styles['text-secondary']} ${styles['bg-green-paste']} mb-8
                            text-5xl group-hover:bg-black group-hover:bg-opacity-[0.1] group-hover:text-white transition duration-150`}
                        >
                            <Icon icon="fluent:handshake-32-regular" />
                        </div>
                        <h4 className=" lg:text-2xl text-[22px] leading-[30px] mb-4 transition duration-150 group-hover:text-white font-bold text-black">
                            24/7 Strong Support
                        </h4>
                        <div className="transition duration-150 group-hover:text-white">
                            Learn from anywhere in world on desktop, mobile or tablet with an
                            Internet connection.{"}"}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EduFeatureSection