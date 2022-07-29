import React from "react";
import Image from "next/image";
import hero from "../public/hero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function HeroSection() {
  return (
    <div>
      {/* Swiper start */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={true}
        pagination={true}
        modules={[Pagination]}
        className="bg-Blue-light w-screen mySwiper"
      >
        {/* Slide one. for dynamic data read use map function from there and delete the last SwiperSlide tag*/}
        <SwiperSlide>
          {/* for dynamic data read just change the data part.*/}
          <div className="container flex flex-1 justify-between items-center flex-col md:flex-row  py-16 gap-12 ">
            <div>
              <h2 className=" font-light text-xl pb-3 md:pb-6 md:text-3xl text-Gray-2">
                New Arrivals
              </h2>
              <h1 className="leading-12 text-3xl md:text-5xl pb-6 md:pb-12 font-bold">
                Clean &#38; classic{" "}
                <span className="whitespace-nowrap">interior decoration</span>
              </h1>
              <button className="px-8 py-3 bg-Secondary-dark tracking-wider text-white text-xs font-medium">
                Shop Now
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src={hero} alt="hero" />
            </div>
          </div>
        </SwiperSlide>
        {/* slide 2. for dynamic data read delete this one */}
        <SwiperSlide>
          <div className="container flex flex-1 justify-between items-center flex-col md:flex-row  py-16 gap-12 ">
            <div>
              <h2 className=" font-light text-xl pb-3 md:pb-6 md:text-3xl text-Gray-2">
                New Arrivals
              </h2>
              <h1 className="leading-12 text-3xl md:text-5xl pb-6 md:pb-12 font-bold">
                Clean &#38; classic{" "}
                <span className="whitespace-nowrap">interior decoration</span>
              </h1>
              <button className="px-8 py-3 bg-Secondary-dark tracking-wider text-white text-xs font-medium">
                Shop Now
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src={hero} alt="hero" />
            </div>
          </div>{" "}
        </SwiperSlide>
        {/* slide 3. for dynamic data read delete this one */}
        <SwiperSlide>
          <div className="container flex flex-1 justify-between items-center flex-col md:flex-row  py-16 gap-12 ">
            <div>
              <h2 className=" font-light text-xl pb-3 md:pb-6 md:text-3xl text-Gray-2">
                New Arrivals
              </h2>
              <h1 className="leading-12 text-3xl md:text-5xl pb-6 md:pb-12 font-bold">
                Clean &#38; classic{" "}
                <span className="whitespace-nowrap">interior decoration</span>
              </h1>
              <button className="px-8 py-3 bg-Secondary-dark tracking-wider text-white text-xs font-medium">
                Shop Now
              </button>
            </div>
            <div className="w-full lg:w-1/2">
              <Image src={hero} alt="hero" />
            </div>
          </div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSection;
