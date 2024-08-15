import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/images/bg.png"
        alt="logo"
        width={1400}
        height={1400}
        className=""
      />
      <div></div>
    </div>
  );
};

export default Hero;
