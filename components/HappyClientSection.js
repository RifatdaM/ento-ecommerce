import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import ClientCard from "./ClientCard";
import dp2 from "../public/dp2.jpg";
import dp1 from "../public/dp1.jpg";

function HappyClientSection() {
  return (
    <div className=" bg-Primary-light py-16">
      <div className=" container">
        <div className="pb-8">
          <h2 className=" text-2xl text-center pb-6">Happy clients</h2>
          <p className=" text-sm text-center text-Gray-3">
            Lorem Ipsum is simply dummy text of the
          </p>
        </div>
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
                spaceBetween: 20,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1000: {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 4,
            },
          }}
          spaceBetween={20}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp2}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp1}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp2}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp1}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp2}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp1}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp2}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp1}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp2}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp1}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp2}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white p-8">
              <ClientCard
                rating="4.2"
                title="Great quality"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,"
                image={dp1}
                name="Rakibul Hasan"
                company="Wear N Adorn"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HappyClientSection;
