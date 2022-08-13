import Image from "next/image";
import React from "react";
import detailsImage from "../public/1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function DetailsSection() {
  return (
    <div className=" bg-Blue-light py-16">
      <div className=" container">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          loop={true}
          className="mySwiper bg-white aspect-square drop-shadow-md overflow-hidden"
        >
          <SwiperSlide className="object-contain object-center">
            <Image
              src={detailsImage}
              alt="image 1"
              className="object-contain object-center"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={detailsImage} alt="image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={detailsImage} alt="image 1" />
          </SwiperSlide>
        </Swiper>
        <div>
            <h2>Green Cactus plant with havy wood stand planter</h2>
        </div>
      </div>
    </div>
  );
}

export default DetailsSection;
