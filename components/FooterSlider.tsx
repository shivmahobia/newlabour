"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FooterSlider = () => {
  return (
    <div className="py-10 sm:py-15 bg-[#f6f6f6] mt-1 relative overflow-hidden">
      {/* Left Smoky Overlay - Wider */}
      <div
        className="absolute left-0 top-0 h-full pointer-events-none z-10"
        style={{
          width: 200,
          background: "linear-gradient(to right, rgba(246, 246, 246, 1) 0%, rgba(246, 246, 246, 0.8) 30%, rgba(246, 246, 246, 0.4) 60%, rgba(246, 246, 246, 0) 100%)",
          backdropFilter: "blur(10px)",
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)"
        }}
      />

      {/* Right Smoky Overlay - Wider */}
      <div
        className="absolute right-0 top-0 h-full pointer-events-none z-10"
        style={{
          width: 200,
          background: "linear-gradient(to left, rgba(246, 246, 246, 1) 0%, rgba(246, 246, 246, 0.8) 30%, rgba(246, 246, 246, 0.4) 60%, rgba(246, 246, 246, 0) 100%)",
          backdropFilter: "blur(10px)",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)"
        }}
      />

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 1, // very small delay for smooth continuous scroll
          disableOnInteraction: false
        }}
        speed={5000}
        breakpoints={{
          480: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 }
        }}
      >
        {[
          { src: "/Footer_Slider/Data-gov.svg", alt: "Data Gov Logo" },
          { src: "/Footer_Slider/Digital-India.svg", alt: "Digital India Logo" },
          { src: "/Footer_Slider/Ganhri.svg", alt: "Ganhri Logo" },
          { src: "/Footer_Slider/Goidirectory.svg", alt: "GOI Directory Logo" },
          { src: "/Footer_Slider/Incredible-India.svg", alt: "Incredible India Logo" },
          { src: "/Footer_Slider/India-Gov.svg", alt: "India Gov Logo" }
        ].map(({ src, alt }, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-24">
              <motion.img
                src={src}
                alt={alt}
                className="w-[200px] h-[150px] object-contain"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.2 // staggered fade-in
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FooterSlider;
