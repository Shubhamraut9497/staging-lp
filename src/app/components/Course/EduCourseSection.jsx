import React from 'react'
import styles from './eduCourse.module.css';
const EduCourseSection = () => {
  return (
    <div className={`${styles["section-padding"]} `}>
  <div className={`${styles["container"]} `}>
    <div className="text-center">
      <div className={`${styles["mini-title"]} `}>Popular Courses</div>
      <div className={`${styles["column-title"]} `}>
        Choose Our Top&nbsp;
        <span className={`${styles["shape-bg"]}`}>Courses</span>
      </div>
    </div>
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[30px] pt-10">
      <a
        className={` bg-white ${styles['shadow-box2']} rounded-[8px] transition duration-100 ${styles['hover:shadow-sm']}`}
        href="#"
      >
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <img
            src="/img/all-img/c1.png"
            alt=""
            className=" w-full h-full object-cover rounded-t-[8px]"
          />
          <span className={`${styles['bg-secondary']} py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6`}>
            Art &amp; Design
          </span>
        </div>
        <div className="course-content p-8">
          <div className={`${styles['text-secondary']} font-bold text-2xl mb-3`}>$29.28</div>
          <h4 className=" text-xl mb-3 font-bold text-black">
            Basic Fundamentals of Interior &amp; Graphics Design
          </h4>
          <div className="flex justify-between  space-x-3">
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/file.svg" alt="" />
              <span>2 Lessons</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/clock.svg" alt="" />
              <span>4h 30m</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/star.svg" alt="" />
              <span>4.8</span>
            </span>
          </div>
        </div>
      </a>
      <a
        className={` bg-white ${styles['shadow-box2']} rounded-[8px] transition duration-100 ${styles['hover:shadow-sm']}`}
        href="#"
      >
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <img
            src="/img/all-img/c2.png"
            alt=""
            className=" w-full h-full object-cover rounded-t-[8px]"
          />
          <span className={`${styles['bg-secondary']} py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6`}>
            Developemet
          </span>
        </div>
        <div className="course-content p-8">
          <div className={`${styles['text-secondary']} font-bold text-2xl mb-3`}>Free</div>
          <h4 className=" text-xl mb-3 font-bold  text-black">
            Increasing Engagement with Instagram &amp; Facebook
          </h4>
          <div className="flex justify-between  space-x-3">
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/file.svg" alt="" />
              <span>2 Lessons</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/clock.svg" alt="" />
              <span>4h 30m</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/star.svg" alt="" />
              <span>4.8</span>
            </span>
          </div>
        </div>
      </a>
      <a
        className={` bg-white ${styles['shadow-box2']} rounded-[8px] transition duration-100 ${styles['hover:shadow-sm']}`}
        href="#"
      >
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <img
            src="/img/all-img/c3.png"
            alt=""
            className=" w-full h-full object-cover rounded-t-[8px]"
          />
          <span className={`${styles['bg-secondary']} py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6`}>
            Drawing
          </span>
        </div>
        <div className="course-content p-8">
          <div className={`${styles['text-secondary']} font-bold text-2xl mb-3`}>$72.39</div>
          <h4 className=" text-xl mb-3 font-bold text-black">
            Introduction to Color Theory &amp; Basic UI/UX
          </h4>
          <div className="flex justify-between  space-x-3">
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/file.svg" alt="" />
              <span>2 Lessons</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/clock.svg" alt="" />
              <span>4h 30m</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/star.svg" alt="" />
              <span>4.8</span>
            </span>
          </div>
        </div>
      </a>
      <a
        className={` bg-white ${styles['shadow-box2']} rounded-[8px] transition duration-100 ${styles['hover:shadow-sm']}`}
        href="#"
      >
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <img
            src="/img/all-img/c4.png"
            alt=""
            className=" w-full h-full object-cover rounded-t-[8px]"
          />
          <span className={`${styles['bg-secondary']} py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6`}>
            Technology
          </span>
        </div>
        <div className="course-content p-8">
          <div className={`${styles['text-secondary']} font-bold text-2xl mb-3`}>$72.39</div>
          <h4 className=" text-xl mb-3 font-bold text-black">
            Financial Security Thinking and Principles Theory
          </h4>
          <div className="flex justify-between  space-x-3">
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/file.svg" alt="" />
              <span>2 Lessons</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/clock.svg" alt="" />
              <span>4h 30m</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/star.svg" alt="" />
              <span>4.8</span>
            </span>
          </div>
        </div>
      </a>
      <a
        className={` bg-white ${styles['shadow-box2']} rounded-[8px] transition duration-100 ${styles['hover:shadow-sm']}`}
        href="#"
      >
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <img
            src="/img/all-img/c5.png"
            alt=""
            className=" w-full h-full object-cover rounded-t-[8px]"
          />
          <span className={`${styles['bg-secondary']} py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6`}>
            Data Science
          </span>
        </div>
        <div className="course-content p-8">
          <div className={`${styles['text-secondary']} font-bold text-2xl mb-3`}>Free</div>
          <h4 className=" text-xl mb-3 font-bold text-black">
            Logo Design: From Concept to Presentation
          </h4>
          <div className="flex justify-between  space-x-3">
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/file.svg" alt="" />
              <span>2 Lessons</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/clock.svg" alt="" />
              <span>4h 30m</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/star.svg" alt="" />
              <span>4.8</span>
            </span>
          </div>
        </div>
      </a>
      <a
        className={` bg-white ${styles['shadow-box2']} rounded-[8px] transition duration-100 ${styles['hover:shadow-sm']}`}
        href="#"
      >
        <div className="course-thumb h-[248px] rounded-t-[8px]  relative">
          <img
            src="/img/all-img/c6.png"
            alt=""
            className=" w-full h-full object-cover rounded-t-[8px]"
          />
          <span className={`${styles['bg-secondary']} py-1 px-3 text-lg font-semibold rounded text-white absolute left-6 top-6`}>
            Developemet
          </span>
        </div>
        <div className="course-content p-8">
          <div className={`${styles['text-secondary']} font-bold text-2xl mb-3`}>$29.82</div>
          <h4 className=" text-xl mb-3 font-bold text-black">
            Professional Ceramic Moulding for Beginners
          </h4>
          <div className="flex justify-between  space-x-3">
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/file.svg" alt="" />
              <span>2 Lessons</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/clock.svg" alt="" />
              <span>4h 30m</span>
            </span>
            <span className=" flex items-center space-x-2">
              <img src="/img/svg/star.svg" alt="" />
              <span>4.8</span>
            </span>
          </div>
        </div>
      </a>
    </div>
    <div className="text-center lg:pt-16 pt-10">
      <a href="#" className={`${styles['btn']} ${styles['btn-primary']}`}>
        View All Courses
      </a>
    </div>
  </div>
</div>

  )
}

export default EduCourseSection