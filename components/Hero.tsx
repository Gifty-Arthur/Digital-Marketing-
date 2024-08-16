"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-screen ">
        <Image
          src="/images/bg.png"
          alt="logo"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />
        <div className="relative z-10 container md:py-20 py-4">
          <Image
            src="/images/home.png"
            alt="home"
            width={500}
            height={500}
            className=" flex sm:hidden  
"
          />
          <div className="flex justify-between items-center">
            <div className="md:mt-0 mt-8">
              <h1 className="text-primary md:text-5xl text-3xl roboto font-bold">
                Boost{" "}
                <span className="text-white">
                  Your brand with <br />
                  Innovative{" "}
                  <span className="text-primary">
                    Digital
                    <br />
                    Marketing
                  </span>
                </span>{" "}
              </h1>
              <p className="text-white  text-md md:mt-8 mt-2">
                Drive Engagement and Conversions with Advanced Digital Marketing
                Strategies.
              </p>
              <div className="flex gap-6 md:mt-8 ">
                <Link href="/">
                  <button className="bg-primary md:w-[179px] md:h-[64px] w-[98px] h-[52px] text-white rounded-lg mt-4 transition-all ease-in-out duration-300 hover:bg-gray-600">
                    Start Now
                  </button>
                </Link>
                <Link href="/">
                  <button className="bg-[#EADAFF] md:w-[179px] md:h-[64px] w-[120px] h-[52px] text-primary rounded-lg mt-4 transition-all ease-in-out duration-300 hover:bg-gray-600">
                    Watch Demo
                  </button>
                </Link>
              </div>
            </div>
            <Image
              src="/images/home.png"
              alt="home"
              width={500}
              height={500}
              className=" hidden sm:flex  
"
            />
          </div>
        </div>
      </div>

      {/* comapnies */}
      <div className="bg-primary">
        <div className="container">
          <div className=" md:flex items-center justify-between">
            <Image
              src="/images/company/f1.png"
              alt="company"
              width={50}
              height={50}
            />
            <Image
              src="/images/company/f2.png"
              alt="company"
              width={50}
              height={50}
            />
            <Image
              src="/images/company/f4.png"
              alt="company"
              width={50}
              height={50}
            />
            <Image
              src="/images/company/f5.png"
              alt="company"
              width={50}
              height={50}
            />
            <Image
              src="/images/company/f6.png"
              alt="company"
              width={50}
              height={50}
            />
            <Image
              src="/images/company/f7.png"
              alt="company"
              width={50}
              height={50}
            />
            <Image
              src="/images/company/f8.png"
              alt="company"
              width={50}
              height={50}
            />
            <Image
              src="/images/company/f9.png"
              alt="company"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
