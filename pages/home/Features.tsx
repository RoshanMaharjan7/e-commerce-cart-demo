import React from "react";

import Link from "next/link";
import { FaTruck } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { SlEarphonesAlt } from "react-icons/sl";

const Features = () => {
  return (
    <div className="flex max-w-screen xl:px-[185px] px-4 justify-between py-5">
      <Link href="/" className="flex items-center font-bold">
        <FaTruck className="text-[#F2C94C] h-[20px] w-[28px]" />{" "}
        <p className="text-[10px] text-[#00000080]">FREE SHIPPING</p>
      </Link>
      <Link href="/" className="flex items-center font-bold">
        <FaMoneyBillTrendUp className="text-[#F2C94C] h-[20px] w-[28px]" />
        <p className="text-[10px] text-[#00000080]">100% MONEY BACK</p>
      </Link>
      <Link href="/" className="flex items-center font-bold">
        <SlEarphonesAlt className="text-[#F2C94C] h-[20px] w-[28px] font-bold" />
        <p className="text-[10px] text-[#00000080]">SUPORT 24/7</p>
      </Link>
    </div>
  );
};

export default Features;
