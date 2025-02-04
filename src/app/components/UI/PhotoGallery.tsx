"use client";

import { myImages } from "@/constants";
import { fadeIn } from "@/utils/motions";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function PhotoGallery() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeIn("right", "spring", 0.75, 1)}
        className="w-[75%] lg:w-1/3"
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          {myImages.map((image, index) => (
            <SwiperSlide key={index}>
              <Image
                className="rounded-xl"
                src={image}
                alt={`image-${index}`}
                height={400}
                width={400}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </>
  );
}
