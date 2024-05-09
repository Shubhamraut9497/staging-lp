import React from 'react'
import Counter03 from './../Counter/Counter03';

const GoloHealthHero = () => {
    return (
        <section className="section-hero">
            <div className="relative z-10 overflow-hidden bg-[#FAF9F5]">
                {/* Section Space */}
                <div className="pb-[60px] pt-28 md:pb-20 md:pt-36 lg:pb-[100px] lg:pt-[150px] xxl:pb-[120px] xxl:pt-[185px]">
                    {/* Section Container */}
                    <div className="container-custom mx-auto max-w-9xl px-4 sm:px-8 md:px-20 lg:px-24 xl:px-28 2xl:px-32 ">
                        {/* Hero Area */}
                        <div className="grid gap-10 lg:grid-cols-2 xxl:grid-cols-[1.1fr_minmax(0,_1fr)]">
                            {/* Hero Content Block */}
                            <div className="jos">
                                <div className={`has-container-custom flex flex-col justify-center text-center sm:text-left animate-fade-up animate-delay-300 animate-once`}>
                                    <p className='text-gray-600 mb-4 text-[18px]'>
                                        A SOURCE YOU CAN TRUST
                                    </p>
                                    <h1 className="mb-6 font-plus-jakarta-sans font-semibold  leading-overflow tracking-wide text-gray-900 text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl">Find a Doctor or Health Centers for your family</h1>

                                    <div className="mt-5 text-sm leading-6 md:justify-normal">

                                        <p className="text-gray-800 text-lg mb-8">We are leading health-care facility across the states and dedicated to providing expectational services for all patient</p>

                                        <a
                                            className={` bg-blue-700 text-white font-semibold border-2 border-blue-700 hover:bg-transparent hover:text-blue-700 rounded-full py-[16px] px-[36px] inline-block mb-8 tracking-wider cursor-pointer`}
                                        >
                                            <span>Get an Appointment</span>
                                        </a> 

                                        <Counter03 />



                                    </div>
                                </div>
                            </div>
                            {/* Hero Content Block */}
                            {/* Hero Image Block */}
                            <div className="jos">
                                <div className="relative flex items-center justify-center animate-fade-left animation-delay-300 animation-once">
                                    <img
                                        src="/img/cilinic/main-banner.png"
                                        alt="hero image"
                                        width={600}
                                        height={579}
                                        className="h-auto w-full"
                                    />

                                </div>
                            </div>
                            {/* Hero Image Block */}
                        </div>
                        {/* Hero Area */}
                    </div>
                    {/* Section Container */}
                </div>
                {/* Section Space */}
                {/* Hero Shape - 1 */}
                <div className="absolute left-0 top-0 -z-10">
                    <img
                        src="/img/elements/hero-1-shape-1.svg"
                        alt="hero-shape-1"
                        width={607}
                        height={792}
                        className=""
                    />
                </div>
                {/* Hero Shape - 2 */}
                <div className="absolute bottom-0 right-0 -z-[1]">
                    <img
                        src="/img/elements/hero-1-shape-2.svg"
                        alt="hero-shape-2"
                        width={607}
                        height={792}
                    />
                </div>
            </div>
        </section>

    )
}

export default GoloHealthHero