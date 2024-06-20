import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const ProductShowcase = () => {
  return (
    <div className="max-w-screen xl:px-16 px-4 grid grid-cols-3 gap-y-12">
      <Image src={'/items/CheckedDuvetCoverSet1.png'} width={416} height={572} alt="image"/>
      <Image src={'/items/CheckedDuvetCoverSet2.png'} width={416} height={572} alt="image"/>
      <div className="flex flex-col gap-7">
        <h2 className="font-medium text-[28px] text-[#323334]">
          Checked Duvet Cover Set
        </h2>
        <p className="text-[24px] text-[#323334] font-medium">32.99 $</p>

        <span className="flex flex-col gap-4">
          <p className="font-light text-[18px]">
            Light khaki green/white checks
          </p>
          <Image
            className="border-black border"
            src={"/items/RoundJutePlacemat.png"}
            width={53}
            height={72}
            alt="image"
          />
        </span>

        <p className="font-normal text-[16px]">Not available in stores</p>
        <Button  className="rounded-none w-full h-[54px] bg-[#323334]">
          ADD TO SHOPPING BAG
        </Button>
      </div>
      <Image className=" col-span-2" src={'/items/CheckedDuvetCoverSet3.png'} width={880} height={586} alt="image"/>
      
    </div>
  );
};

export default ProductShowcase;
