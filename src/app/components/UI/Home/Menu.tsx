"use client";

import { assets } from "@/assets";
import navItems from "@/constants/navItems";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex backdrop-blur-sm items-center  fixed w-full  bg-black/20 z-100 font-Michroma  justify-between px-5 md:px-4   h-16 ">
      <div className="w-10 z-50 h-10 rounded-full overflow-hidden relative">
        <Image
          className="object-cover hover:scale-125 duration-200 transition"
          src={assets.logo}
          alt="logo"
          height={64}
          width={64}
        />
      </div>

      <div className="flex z-50 lg:hidden">
        <button
          onClick={toggleMenu}
          type="button"
          className=" text-gray-200  hover:text-gray-400 focus:outline-hidden  focus:text-gray-400"
          aria-label="toggle menu"
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 8h16M4 16h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>

      <ul
        className={`absolute lg:relative  mt-10 px-5 py-10  md:mt-0  lg:p-0 transition-all duration-500 ease-initial  lg:flex gap-7  space-y-6 lg:space-y-0 inset-x-0  bg-black/90 lg:bg-transparent z-10  items-center text-gray-200  ${
          isOpen ? "top-0" : "-top-96 lg:top-0"
        }`}
      >
        {navItems.map((item, idx) => (
          <li
            key={idx}
            className="hover:shadow-2xl hover:shadow-[#56ccf2] duration-400 transition-colors  hover:text-[#56ccf2] nav-items"
          >
            <Link
              className="inline-flex items-center gap-2 text-[14px] "
              href={item.href}
            >
              <item.icon size={22} /> {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
