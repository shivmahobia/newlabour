"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Carousel() {
  return (
    <>
      <style jsx global>{`
        /* Customize Swiper pagination bullets */
        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.7);
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #00487c; /* Tailwind blue-600 */
        }
      `}</style>

      <div className="w-full mx-auto">
        <Swiper modules={[Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} loop className="shadow-lg">
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[441px]">
              <Image src="/Home/img1.png" alt="Slide 1" fill priority className="object-cover" />
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[441px]">
              <Image src="/Home/img1.png" alt="Slide 2" fill className="object-cover" />
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[441px]">
              <Image src="/Home/img1.png" alt="Slide 3" fill className="object-cover" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
