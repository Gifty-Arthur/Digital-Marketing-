import React from "react";
import Image from "next/image";

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
      </div>
    </div>
  );
};

export default Hero;
