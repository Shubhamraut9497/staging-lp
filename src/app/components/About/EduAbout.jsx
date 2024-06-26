import React from 'react'
import styles from './eduAbout.module.css';

const EduAbout = () => {
    return (
        <div className={`about-area ${styles['section-padding']}`}>
            <div className={`${styles['container']}`}>
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
                    <div>
                        <img
                            src="/img/all-img/about1.png"
                            alt=""
                            className="mx-auto"
                        />
                    </div>
                    <div>
                        <div className={`${styles["mini-title"]} `}>About Edumim</div>
                        <h4 className={`${styles["column-title"]} ${styles['heading4']} `}>
                            The Place Where You Can
                            <span className={`${styles["shape-bg"]} `}>Achieve</span>
                        </h4>
                        <div>
                            There are many variations of passages of Lorem Ipsum available, but
                            the majority have suffered.
                        </div>
                        <ul className=" list-item space-y-6 pt-8">
                            <li className="flex">
                                <div className="flex-none mr-6">
                                    <div className="h-[72px] w-[72px] rounded-full">
                                        <img
                                            src="/img/svg/light.svg"
                                            alt=""
                                            className=" w-full h-full object-cover rounded-full block"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className=" text-xl mb-1 text-black">Our Mission</h4>
                                    <div>
                                        There are many variations of passages of the Lorem Ipsum
                                        available.
                                    </div>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-none mr-6">
                                    <div className="h-[72px] w-[72px] rounded-full">
                                        <img
                                            src="/img/svg/target.svg"
                                            alt=""
                                            className=" w-full h-full object-cover rounded-full block"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className=" text-xl mb-1 text-black">Our Vision</h4>
                                    <div>
                                        There are many variations of passages of the Lorem Ipsum
                                        available.
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="pt-8">
                            <a href="#" className={`${styles["btn"]}  ${styles['btn-primary']}`}>
                                Read More Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default EduAbout