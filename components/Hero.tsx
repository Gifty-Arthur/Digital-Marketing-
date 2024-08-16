"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/bg.png"
        alt="logo"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="relative z-10 container py-20">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-primary text-4xl roboto font-bold">
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
            <p className="text-white roboto text-md mt-4">
              Drive Engagement and Conversions with Advanced Digital <br />
              Marketing Strategies.
            </p>
            <Link href="/">
              <button className="">Start Now</button>
            </Link>
          </div>

          <Image src="/images/home.png" alt="home" width={500} height={500} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
