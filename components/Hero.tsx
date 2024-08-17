"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
            className=" flex sm:hidden  "
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
      <div className="bg-primary h-[281px]">
        <div className="container">
          <p className="text-white text-center py-10 font-bold">
            Trusted by thousand companies{" "}
          </p>
          {/* web device for companies */}
          <div className=" items-center justify-between hidden sm:flex py-10">
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
          {/* mobile device comapnies*/}
          <div className="   sm:hidden">
            <div className="flex items-center justify-between ">
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
            </div>
            <div className="flex items-center justify-between mt-8">
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
      {/* services */}
      <div className="bg-[#2F1C48] md:h-[580px]">
        <div className="container">
          <div className="text-center md:py-20 py-10">
            <h1 className="text-3xl  text-white roboto font-semibold">
              Services
            </h1>
            <p className="text-white text-md">
              Strategic services drive digital success with tailored,
              comprehensive approaches.
            </p>
          </div>
          <div className="md:flex md:items-center md:justify-between  ">
            <motion.div
              className="md:w-[260px] h-[280px] w-full bg-primary rounded-lg flex flex-col items-center justify-center md:mt-0 mt-10 "
              whileHover={{
                scale: 1.1,
                textShadow: "primary",
                boxShadow: "0px 0px 2px #AC6CFF",
              }}
            >
              <div className="">
                <Image
                  src="/images/s1.png"
                  alt="service"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
              <p className="text-white mt-6 font-semibold">SEO Marketing</p>
            </motion.div>
            <motion.div
              className="md:w-[260px] h-[280px] w-full bg-primary rounded-lg flex flex-col items-center justify-center md:mt-0 mt-10 "
              whileHover={{
                scale: 1.1,
                textShadow: "primary",
                boxShadow: "0px 0px 2px #AC6CFF",
              }}
            >
              <div className="">
                <Image
                  src="/images/s2.png"
                  alt="service"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
              <p className="text-white mt-6 font-semibold">
                Research Topic Trends
              </p>
            </motion.div>
            <motion.div
              className="md:w-[260px] h-[280px] w-full bg-primary rounded-lg flex flex-col items-center justify-center md:mt-0 mt-10"
              whileHover={{
                scale: 1.1,
                textShadow: "primary",
                boxShadow: "0px 0px 2px #AC6CFF",
              }}
            >
              <div className="">
                <Image
                  src="/images/s3.png"
                  alt="service"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
              <p className="text-white mt-6 font-semibold">Email Marketing</p>
            </motion.div>
            <motion.div
              className="md:w-[260px] h-[280px] w-full bg-primary rounded-lg flex flex-col items-center justify-center md:mt-0 mt-10"
              whileHover={{
                scale: 1.1,
                textShadow: "primary",
                boxShadow: "0px 0px 2px #AC6CFF",
              }}
            >
              <div className="">
                <Image
                  src="/images/s4.png"
                  alt="service"
                  width={50}
                  height={50}
                  className=""
                />
              </div>
              <p className="text-white mt-6 font-semibold">Google PPC</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="bg-[#2D2D2D]">
        <div className="container py-20 ">
          <div className="flex gap-4">
            <p className="text-white font-semibold text-4xl">Why Choose Us?</p>
            <div className="bg-white md:w-[200px] h-1 mt-6"></div>
          </div>
          {/* img */}
          <div className="py-10 md:flex flex-row md:space-x-80">
            <Image
              src="/images/w1.png"
              alt="why"
              width={380}
              height={500}
              className=""
            />
            <div className="flex flex-col md:py-0 py-10">
              <h1 className="text-white font-bold text-4xl">
                Solutions Tailored <br />
                Specifically to Your <br />
                Business Needs
              </h1>
              <p className="mt-4 text-[#F8F9FF] text-md">
                We provide customized solutions for your
                <br /> business needs, ensuring relevance and <br />
                success.
              </p>
              <Link href="/">
                <button className="bg-primary md:w-[179px] md:h-[64px] w-[98px] h-[52px] text-white rounded-lg transition-all ease-in-out duration-300 hover:bg-gray-600 md:mt-20 mt-6">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          {/* 2nd img */}
          <div className="py-4 md:py-20 md:flex flex-row md:space-x-36">
            <div className="flex flex-col md:py-0 py-10">
              <h1 className="text-white font-bold text-4xl">
                Creative Excellence Elevates Every Project
              </h1>
              <p className="mt-4 text-[#F8F9FF] text-md">
                Creative excellence drives our work. From
                <br /> concept to execution, we aim for exceptional
                <br /> results.
              </p>
              <Link href="/">
                <button className="bg-primary md:mt-20 mt-6 md:w-[179px] md:h-[64px] w-[98px] h-[52px] text-white rounded-lg transition-all ease-in-out duration-300 hover:bg-gray-600 ">
                  Learn More
                </button>
              </Link>
            </div>
            <Image
              src="/images/w2.png"
              alt="why"
              width={480}
              height={500}
              className=""
            />
          </div>
          {/* 3rd image */}
          <div className="py-20 md:flex flex-row md:space-x-80">
            <Image
              src="/images/w3.png"
              alt="why"
              width={580}
              height={500}
              className=""
            />
            <div className="flex flex-col md:py-0 py-10">
              <h1 className="text-white font-bold text-4xl">
                Client Satisfaction is Our Main Focus
              </h1>
              <p className="mt-4 text-[#F8F9FF] text-md">
                Our main goal is your satisfaction, and we <br />
                work tirelessly to ensure that you are pleased <br />
                with the results we achieve together.
              </p>
              <Link href="/">
                <button className="bg-primary md:w-[179px] md:h-[64px] w-[98px] h-[52px] text-white rounded-lg transition-all ease-in-out duration-300 hover:bg-gray-600 md:mt-20 mt-6">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
