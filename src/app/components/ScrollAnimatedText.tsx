"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

const ScrollAnimatedText = ({
  value,
  size,
}: {
  value: string;
  size: "sm" | "md" | "lg";
}) => {
  const textRef = useRef(null);
  const { scrollYProgress } = useScroll({
    offset: ["start 0.8", "end 0.20"], // Adjusted for half visibility
    target: textRef,
  });

  const words = value.split(" ");

  return (
    <motion.div className="mx-auto">
      <div
        ref={textRef}
        className="text-white font-semibold text-2xl tracking-tight"
      >
        <p
          className={`flex  flex-wrap justify-start gap-1 leading-6 text-start ${
            size === "sm"
              ? "text-[15px]"
              : size === "md"
              ? "text-lg"
              : size === "lg"
              ? "text-xl"
              : "text-base"
          }`}
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;

            return (
              <Word
                key={i}
                range={[start, end]}
                progress={scrollYProgress}
                word={word}
              />
            );
          })}
        </p>
      </div>
    </motion.div>
  );
};

export default ScrollAnimatedText;

const Word = ({
  range,
  progress,
  word,
}: {
  range: number[];
  progress: MotionValue<number>;
  word: string;
}) => {
  const character = word.split("");

  const amount = range[1] - range[0];
  const step = amount / word.length;

  return (
    <span>
      {character.map((item, i) => {
        const start = range[0] + step * i; // Adjusted for character reveal
        const end = range[0] + step * (i + 1);

        return (
          <Character key={i} range={[start, end]} progress={progress}>
            {item}
          </Character>
        );
      })}
    </span>
  );
};

const Character = ({
  children,
  range,
  progress,
}: {
  children: ReactNode;
  range: number[];
  progress: MotionValue<number>;
}) => {
  // Adjust opacity to start visible and then fade in
  const opacity = useTransform(progress, range, [0.2, 1]); // Start at half visibility

  return (
    <span className="relative">
      <span className="absolute opacity-[0.3]">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};
