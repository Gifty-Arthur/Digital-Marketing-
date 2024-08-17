"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BiLocationPlus, BiPhoneCall } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-[#2C2E33] border-b ">
      <div className="container py-10">
        <div className="md:flex items-center justify-between">
          <div className="flex flex-col">
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
            <p className="text-white">
              Nusa Tech is a leading digital marketing agency <br />
              dedicated to driving success for businesses
              <br /> online. With expertise in SEO, PPC, social media, <br />
              content creation, and more, we offer tailored
              <br /> solutions to maximize ROI.
            </p>
          </div>

          {/* our services */}
          <div className="flex flex-col">
            <p className="text-primary font-bold">Our Services</p>
            <p className="text-white text-sm mt-4">SEO marketing</p>
            <p className="text-white text-sm mt-2">Research Topic Trends</p>
            <p className="text-white text-sm mt-2">Email Marketing</p>
            <p className="text-white text-sm mt-2">Google PPC</p>
          </div>

          {/* Explore More */}
          <div className="flex flex-col">
            <p className="text-primary font-bold">Explore More</p>
            <p className="text-white text-sm mt-2">About Us</p>
            <p className="text-white text-sm mt-2">Feature</p>
            <p className="text-white text-sm mt-2">Our Works</p>
            <p className="text-white text-sm mt-2">Resource</p>
            <p className="text-white text-sm mt-2">Privacy Policy</p>
          </div>
          {/* contact */}
          <div className="flex flex-col">
            <p className="text-primary font-bold">Contact Us</p>
            <div className="flex mt-4 gap-2">
              <div className="w-[30px] h-[30px] flex items-center mt-2 justify-center bg-white rounded-full">
                <BiLocationPlus className="text-primary " />
              </div>
              <p className="font-bold text-white">
                Jl. Medan Merdeka No. 35 <br />
                Jakarta Selatan
              </p>
            </div>

            {/* call */}
            <div className="flex mt-4 gap-2">
              <div className="w-[30px] h-[30px] flex items-center  justify-center bg-white rounded-full">
                <BiPhoneCall className="text-primary " />
              </div>
              <p className="font-bold text-white">(021)234567</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
