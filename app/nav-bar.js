"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [open, setClose] = useState(false);

  function handelMenu() {
    if (open === true) {
      setClose(false);
    } else {
      setClose(true);
    }
    console.log(open);
  }

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
    <div className="fixed w-full">
      <nav
        className={
          navbar
            ? "absolute flex flex-row justify-between items-center py-12 lg:py-6 w-full px-12 nav-scroll-active"
            : "absolute flex flex-row justify-between items-center py-12 lg:py-6 w-full px-12"
        }>
        <div>
          <Link href="/">
            <h1 className="font-black text-6xl lg:text-2xl uppercase">
              Rohan Reddy{" "}
            </h1>
          </Link>
        </div>
        <ul className="hidden lg:flex flex-row justify-center items-center space-x-12 uppercase font-bold text-lg">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
