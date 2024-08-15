"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsList, BsX } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <nav className="">
        {/* desktop */}
        <div className="bg-black w-full shadow-2xl h-22 border-b ">
          <div className="container ">
            <div className=" flex items-center justify-between">
              <Link href="/">
                <div className="flex py-6">
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={40}
                    height={40}
                    className=""
                  />
                  <h1 className="text-white text-2xl roboto mt-1 ml-1 font-extrabold">
                    Flow Tech
                  </h1>
                </div>
              </Link>
              {/* desktop */}
              <div className="text-white hidden sm:flex ">
                <ul className="flex flex-row gap-12 text-md roboto ">
                  <li className="hover:underline hover:decoration-primary hover:text-primary">
                    <Link href="/">Home</Link>
                  </li>
                  <li className="hover:text-primary">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="hover:text-primary">
                    <Link href="/features">Features</Link>
                  </li>
                  <li className="hover:text-primary">
                    <Link href="/work">Our Works</Link>
                  </li>
                </ul>
              </div>
              <div className=" flex-row gap-6  hidden sm:flex">
                <Link href="/">
                  <h3 className="text-[#AC6CFF] mt-2 hover:text-gray-600 ">
                    Sign In
                  </h3>
                </Link>
                {/* button */}
                <Link href="/">
                  <button className="w-[101px] bg-primary rounded-md h-[38px] text-white roboto border-primary ease-in-out transition-all duration-300 hover:bg-gray-600">
                    Sign up
                  </button>
                </Link>
              </div>

              {/* mobile device */}
              <div
                className="sm:hidden cursor-pointer pl-24"
                onClick={toggleMenu}
              >
                {menuOpen ? (
                  <BsX className="h-8 w-8 text-primary" />
                ) : (
                  <BsList className="h-8 w-8 text-primary" />
                )}
              </div>
            </div>

            {/* mobile menu */}
            <div
              className={
                menuOpen
                  ? "fixed top-0 left-0 w-[55%] h-[65%] mt-20 sm:hidden bg-primary p-10 ease-in-out duration-500"
                  : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
              }
            >
              <div className="flex w-full items-center justify-end">
                <div className="cursor-pointer" onClick={toggleMenu}>
                  <BsX className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* mobile links */}
              <div className="flex flex-col py-4 -mt-10">
                <ul className="text-white roboto text-md">
                  <li
                    onClick={toggleMenu}
                    className="py-4 hover:underline hover:decoration-white"
                  >
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="py-4 hover:underline hover:decoration-white"
                  >
                    <Link href="/">About</Link>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="py-4 hover:underline hover:decoration-white"
                  >
                    <Link href="/">Features</Link>
                  </li>
                  <li
                    onClick={toggleMenu}
                    className="py-4 hover:underline hover:decoration-white"
                  >
                    <Link href="/">Our works</Link>
                  </li>
                </ul>

                <Link href="/">
                  <button className="w-[101px] bg-white rounded-md h-[38px] text-primary roboto border-primary ease-in-out transition-all duration-300 md:mt-0 mt-4 hover:bg-gray-600">
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
