import { assets } from "@/assets";
import Image from "next/image";
import React from "react";
import ScrollAnimatedText from "../../ScrollAnimatedText";

const Services = () => {
  return (
    <>
      <div
        id="services"
        className=" container min-h-screen flex items-center relative z-30"
      >
        <div className="flex flex-col lg:flex-row items-center  gap-8 z-30 ">
          <div className="relative">
            <div className="border rounded-2xl border-gray-800 bg-linear-45 from-white/20 backdrop-blur-sm to-stone-900/60 overflow-hidden">
              <Image
                className="brightness-99"
                src={assets.anik}
                height={400}
                width={360}
                alt="bio-white-image"
              />
            </div>
          </div>

          <div className=" max-w-xl text-white space-y-5">
            <ScrollAnimatedText
              size="sm"
              value="Naimur Reza is a skilled full stack developer specializing in
              building dynamic and responsive web applications. With expertise
              in modern JavaScript frameworks, he has earned a reputation for
              delivering high-quality, scalable solutions that enhance user
              experience. Naimur has worked with diverse clients globally,
              creating projects that stand out in performance and design,
              consistently exceeding client expectations."
            />
            <p>Based In Bangladesh</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
