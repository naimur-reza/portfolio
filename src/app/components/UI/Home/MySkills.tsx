"use client";

import { styles } from "@/app/styles/styles";
import { mySkills } from "@/constants";
import Image from "next/image";

const MySkills = () => {
  return (
    <div className="container mt-20 relative">
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Superpowers.</h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3   ">
        {mySkills.map((item, index) => (
          <div
            key={index}
            className="m-1 md:md-4 z-20"
            style={{ transform: "none", opacity: 1 }}
          >
            <div
              className="   rounded-[4rem] overflow-hidden
          bg-linear-to-bl from-slate-900/50 to-stone-900/60
          w-full block p-7 border border-gray-800/20 shadow-lg"
            >
              <div className="pl-4 mb-4 flex cursor-pointer md:cursor-default justify-between items-center">
                <div className=" flex space-x-5 items-center rounded-3xl w-11/12 text-gray-400 text-[18px] tracking-wide text-muted font-medium">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    className="h-10"
                    height={40}
                    width={40}
                  />
                  <h1>{item.name}</h1>
                </div>
              </div>
              <div className="flex flex-wrap">
                {item.techs.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-teal-900 bg-opacity-40 my-2 px-4 py-2 text-teal-400 font-bold z-20 rounded-3xl mx-2 flex items-center gap-2 justify-center "
                  >
                    {tech.icon && (
                      <Image
                        src={tech.icon}
                        width={25}
                        height={25}
                        alt={tech.name}
                      />
                    )}
                    {tech.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  );
};

export default MySkills;
