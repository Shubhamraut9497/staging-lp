import React from 'react';

const MascoHeroSection = () => {

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
                  <h1 className="mb-6 font-plus-jakarta-sans font-bold leading-overflow tracking-tighter text-gray-900 text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl">We focus on growing your brand online</h1>
                  <p className='text-gray-600 mb-8 text-[18px]'>
                    Build world-class digital products with a team of design,
                    development &amp; strategy experts. All in one place. We can
                    provide your business with a variety of digital solutions.
                  </p>
                  <form
                    action="#"
                    method="post"
                    className="relative mx-auto flex w-full items-center sm:w-[80%] lg:mx-0 lg:mt-5 lg:max-w-md"
                  >
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-[50px] border border-gray-600 bg-white px-5 py-[15px] pr-40 text-base font-semibold text-opacity-50 outline-none"
                    />
                    <button
                      type="submit"
                      className="btn bg-blue-700 text-white font-semibold border-2 border-blue-700 hover:bg-transparent hover:text-blue-700 rounded-full absolute right-[5px] py-[10px] px-[32px]"
                    >
                      Subscribe
                    </button>
                  </form>
                  <div className="mt-5 text-sm leading-6 md:justify-normal flex justify-center">
                    <span className="mr-2 inline-block text-lg text-blue-700 material-icons">
                    verified
                    </span>
                      
                    <span className="opacity-50 text-gray-800">
                      No credit card is required. You can cancel anytime
                    </span>
                  </div>
                </div>
              </div>
              {/* Hero Content Block */}
              {/* Hero Image Block */}
              <div className="jos">
                <div className="relative flex items-center justify-center animate-fade-left animation-delay-300 animation-once">
                  <img
                    src="/img/th-1/hero-img.png"
                    alt="hero image"
                    width={600}
                    height={579}
                    className="h-auto w-full"
                  />
                  <a
                    data-fslightbox="gallery"
                    href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                    className="group group absolute flex h-[100px] w-[100px] items-center justify-center rounded-[50%] bg-white text-ColorBlue"
                    aria-label="video-play"
                  >
                    <span className="text-3xl text-blue-700 transition-all duration-300 ease-linear group-hover:scale-110 material-icons">
                      {/* <i className="fa-solid fa-play" /> */}
                      play_arrow
                    </span>
                  </a>
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

export default MascoHeroSection