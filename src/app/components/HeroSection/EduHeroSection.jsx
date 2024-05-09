import React from 'react'
import styles from './eduHeroSection.module.css';

const EduHeroSection = () => {
    return (
        <section className=" xl:min-h-screen bg-[url('/img/banner/1.png')] bg-cover bg-no-repeat bg-center overflow-hidden">
            <div className={`${styles['container']} relative`}>
                <div className="max-w-[570px] xl:pt-[297px] md:pt-20 md:pb-20 pt-28 pb-14 xl:pb-40 space-y-8">
                    <h1 className={`${styles['heading1']}`}>
                        Classical
                        <span className={` ${styles['text-secondary']} inline-block bg-[url('/img/banner/shape.svg')] text-emerald-300  bg-no-repeat bg-bottom`}>
                            Education 
                        </span>
                        &nbsp;For The Future
                    </h1>
                    <div className={` ${styles['plain-text']} text-gray leading-[30px]`}>
                        It is long established fact that reader distracted by the readable
                        content.
                    </div>
                    <div className={`bg-white ${styles['md:flex']} rounded-md ${styles['shadow-e1']} items-center py-[10px] relative lg:pr-[10px] lg:pl-[38px] pl-4 pr-4`}>
                        <div className="flex-1 flex items-center lg:mb-0 mb-2">
                            <div className="flex-none mr-3">
                                <span className=" ">
                                    <img src="/img/icon/mail.svg" alt="" />
                                </span>
                            </div>
                            <div className="flex-1" >
                                <input
                                    type="text"
                                    placeholder="Enter your mail"
                                    className={`border-none focus:outline-none focus:ring-0`}
                                    
                                    
                                />
                            </div>
                        </div>
                        <div className="flex-none">
                            <button className={`${styles['btn']} ${styles['btn-primary']} w-full lg:w-auto`}>
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="imge-box absolute xl:right-[-260px]  hidden xl:block   bottom-0  ">
                    <img src="/img/banner/man1.png" alt="" />
                </div>
            </div>
        </section>

    )
}

export default EduHeroSection