import { styles } from "@/app/styles/styles";

import { assets } from "@/assets";
import Image from "next/image";
import { default as SplitText } from "../../BlurText";

const HeroSection = () => {
  return (
    <div className=" mt-[64px]">
      <div className="container">
        <div className="min-h-screen py-[100px]  ">
          <div className="flex justify-between items-center relative z-30">
            <div>
              <SplitText
                text="Hello, I'm Naimur"
                className={styles.heroHeadText}
                delay={150}
                animationFrom={{
                  opacity: 0,
                  transform: "translate3d(0,50px,0)",
                }}
                animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
                threshold={0.2}
                rootMargin="-50px"
              />
              <div className="text-white/80 text-sm lg:text-lg font-medium pl-1 flex items-center gap-2 font-Michroma mt-3">
                Design
                <Image
                  src={
                    "https://cdn.prod.website-files.com/615d64939fac622a8fc9824e/664d9b44d2905d1b523be92d_spacerix.svg"
                  }
                  alt="spacerix"
                  height={10}
                  width={10}
                />
                Development
                <Image
                  src={
                    "https://cdn.prod.website-files.com/615d64939fac622a8fc9824e/664d9b44d2905d1b523be92d_spacerix.svg"
                  }
                  alt="spacerix"
                  height={10}
                  width={10}
                />{" "}
                Branding
              </div>
            </div>
          </div>
          <Image
            className="hidden lg:block absolute bottom-5 right-5 z-2 w-14"
            src={assets.heroElRight}
            alt="logo"
            height={200}
            width={200}
          />
          <Image
            className="absolute bottom-5 left-5 z-2 w-40"
            src={assets.heroElLeft}
            alt="logo"
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
