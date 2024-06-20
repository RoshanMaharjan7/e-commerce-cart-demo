import Link from "next/link";
import React from "react";

const SecondBanner = () => {
  return (
    <div className="bg-[url('/items/bedroomBanner.png')] h-[510px] bg-cover my-28 relative flex items-center">
      <span className="bg-[#FFFFFFE5] h-[338px] w-[545px] ml-36 hidden md:flex flex-col px-28 justify-center gap-6">
        <h2 className="text-[#323334] font-bold text-3xl">BEDSHEETS SETS</h2>
        <div className="flex items-center gap-8">
          <p className="text-[#7B5136] font-bold text-3xl">$50.00</p>
          <p className="text-[#7B5136] font-bold text-[16px] line-through">
            $220.00
          </p>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
        <Link
          href="/"
          className="flex justify-center items-center w-[124px] h-[48px] border border-[#323334] font-bold text-sm"
        >
          VIEW Details
        </Link>
      </span>
    </div>
  );
};

export default SecondBanner;
