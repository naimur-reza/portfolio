"use client";

<<<<<<< HEAD
<<<<<<< HEAD
import gsap from "gsap";
import { useEffect, useRef } from "react";
=======
import { useEffect, useRef } from "react";
import gsap from "gsap";
>>>>>>> 035f867 (Updated projects)
=======
import gsap from "gsap";
import { useEffect, useRef } from "react";
>>>>>>> 46c8752 (Add GitHub API integration and enhance UI components)

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
<<<<<<< HEAD
<<<<<<< HEAD
        className="fixed top-0 left-0 w-1 h-1 bg-white/60 rounded-full pointer-events-none z-50"
=======
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-50"
>>>>>>> 035f867 (Updated projects)
=======
        className="fixed top-0 left-0 w-1 h-1 bg-white/60 rounded-full pointer-events-none z-50"
>>>>>>> 46c8752 (Add GitHub API integration and enhance UI components)
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={followerRef}
<<<<<<< HEAD
<<<<<<< HEAD
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white/80 rounded-full pointer-events-none z-40"
=======
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white rounded-full pointer-events-none z-40"
>>>>>>> 035f867 (Updated projects)
=======
        className="fixed top-0 left-0 w-8 h-8 border-2 border-white/80 rounded-full pointer-events-none z-40"
>>>>>>> 46c8752 (Add GitHub API integration and enhance UI components)
        style={{ transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
}
