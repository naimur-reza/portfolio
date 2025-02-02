import { assets } from "@/assets";
import Image from "next/image";
import React from "react";

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
                height={350}
                width={320}
                alt="bio-white-image"
              />
            </div>
          </div>

          <div className=" max-w-xl text-white space-y-5">
            <h1 className="text-xl lg:text-3xl font-algem">
              Digital Designer + Creative Developer
            </h1>
            <p className="text-sm ">
              Naimur Reza is a skilled full stack developer specializing in
              building dynamic and responsive web applications. With expertise
              in modern JavaScript frameworks, he has earned a reputation for
              delivering high-quality, scalable solutions that enhance user
              experience. Naimur has worked with diverse clients globally,
              creating projects that stand out in performance and design,
              consistently exceeding client expectations.
            </p>
            <p>Based In Bangladesh</p>
          </div>
        </div>
        <div className="w-full flex z-10 justify-end flex-col  h-full col-span-2 lg:col-span-3 absolute bottom-0  ">
          <video
            loop
            autoPlay
            muted
            playsInline
            preload="false"
            src="/encryption.webm"
          />
        </div>
        {/* <div className="absolute inset-0 bg-black/20 -z-10 "></div> */}
      </div>
    </>
  );
};

export default Services;
