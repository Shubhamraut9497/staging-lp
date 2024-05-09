import React from 'react'
import styles from './eduBrandSection.module.css'

const EduBrandSection = () => {
    return (
        <div className={`brands-area ${styles['section-padding-bottom']} `}>
           <div className={`${styles['container']}`}>
                <div className="text-center text-black text-2xl font-medium mb-[50px]">
                    Trusted By 1k+ Company Arround The World!
                </div>
                <ul className="flex flex-wrap items-center lg:justify-between justify-center  ">
                    <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150 grayscale-[80] hover:grayscale-0 ">
                        <a href="#" className=" block">
                            <img src="/img/all-img/brands/1.svg" alt="" />
                        </a>
                    </li>
                    <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150 grayscale-[80] hover:grayscale-0 ">
                        <a href="#" className=" block">
                            <img src="/img/all-img/brands/2.svg" alt="" />
                        </a>
                    </li>
                    <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150 grayscale-[80] hover:grayscale-0 ">
                        <a href="#" className=" block">
                            <img src="/img/all-img/brands/3.svg" alt="" />
                        </a>
                    </li>
                    <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150 grayscale-[80] hover:grayscale-0 ">
                        <a href="#" className=" block">
                            <img src="/img/all-img/brands/4.svg" alt="" />
                        </a>
                    </li>
                    <li className=" mb-6 last:mb-0 mr-6 last:mr-0  transition duration-150 grayscale-[80] hover:grayscale-0 ">
                        <a href="#" className=" block">
                            <img src="/img/all-img/brands/5.svg" alt="" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default EduBrandSection