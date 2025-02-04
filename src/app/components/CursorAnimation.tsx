"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function CursorAnimation() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      });

      gsap.to(follower, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
      });
    };

    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-1 h-1 bg-white/60 rounded-full pointer-events-none z-90"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white/80 rounded-full pointer-events-none z-90"
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
