"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change Background
    window.addEventListener("scroll", changeBackground);
  });
  return (
    <>
      <div className="hidden md:block md:fixed w-full">
        <div
          className={
            navbar
              ? "mx-6 md:mx-12 mt-4  text-white rounded-full nav-scroll-active shadow-2xl"
              : "mx-6 md:mx-12 mt-4  text-white rounded-full "
          }>
          <div className="flex flex-row justify-between items-center py-5 px-8">
            <a href="#home">
              <h1 className="font-black text-black text-2xl uppercase">
                Rohan Reddy
              </h1>
            </a>
            <ul className="hidden md:flex flex-row justify-center items-center space-x-12 uppercase font-semibold text-lg text-black">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
