import React from "react";

import Link from "next/link";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[540px] bg-[#DBD0CCCC] overflow-x-hidden flex max-w-screen xl:px-20 px-4">
      <div className="w-[50%] flex items-center">
        <Image
          className="hidden md:block"
          src={"/items/Sofa.png"}
          width={564}
          height={416}
          alt="Sofa Image"
        />
      </div>
      <div className="w-[50%] flex flex-col justify-center gap-6">
        <p className="font-bold text-xl text-[#323334]">HOT DEALS THIS WEEK</p>
        <p className="font-bold text-5xl text-[#A86A3D] w-[495px] h-[118px] leading-tight">
          SALE UP 50% MODERN FURNITURE
        </p>
        <Link
          href="/"
          className="flex justify-center items-center w-[124px] h-[48px] border border-[#323334] font-bold text-sm"
        >
          VIEW NOW
        </Link>
      </div>
    </div>
  );
};

export default Banner;
