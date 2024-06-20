import React from "react";

import Link from "next/link";
import Image from "next/image";

import ProductCard from "@/pages/home/ProductCard";

const FeaturedProducts = () => {

    const items = [
        {
          id: 1,
          title: "Linen Beach Towel",
          price: 30,
          imageLink: "/items/LinenBeachTowel.png",
          ratings: 4,
        },
        {
          id: 2,
          title: "Square Clear Glass Box",
          price: 30,
          imageLink: "/items/SquareClearGlassBox.png",
          ratings: 4,
        },
        {
          id: 3,
          title: "4-pack Small Ceramic Plates",
          price: 30,
          imageLink: "/items/4-packSmallCeramicPlates.png",
          ratings: 4,
        },
        {
          id: 4,
          title: "Large Clear Glass Box",
          price: 30,
          imageLink: "/items/LargeClearGlassBox.png",
          ratings: 4,
        },
        {
          id: 5,
          title: "Round Jute Placemat",
          price: 30,
          imageLink: "/items/RoundJutePlacemat.png",
          ratings: 4,
        },
        {
          id: 6,
          title: "Metal Wire Basket",
          price: 30,
          imageLink: "/items/MetalWireBasket.png",
          ratings: 4,
        },
      ];

  return (
    <>
      {/* Two Items */}
      <div className="max-w-screen xl:px-16 px-4 py-6 grid xl:grid-cols-2 grid-cols-1 gap-4">
        <div className=" bg-[#fafafa] h-[368px] flex items-center">
          <Image
            src={"/items/chair.png"}
            width={353}
            height={353}
            alt="Chair Image"
          />
          <div className="flex flex-col gap-8">
            <p className="font-bold text-2xl">INY VINTAGE CHAIR</p>
            <Link
              href="/"
              className="flex justify-center items-center w-[124px] h-[48px] border border-[#323334] font-bold text-sm"
            >
              VIEW NOW
            </Link>
          </div>
        </div>
        <div className=" bg-[#EAE9E7] h-[368px] flex items-center">
          <Image
            src={"/items/vase.png"}
            width={246}
            height={368}
            alt="Chair Image"
          />
          <div className="flex flex-col gap-8">
            <p className="font-bold text-2xl w-[250px]">LARGE TERRACOTA VASE</p>
            <Link
              href="/"
              className="flex justify-center items-center w-[124px] h-[48px] border border-[#323334] font-bold text-sm"
            >
              VIEW NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Items */}
      {/* grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 */}
      <div className="max-w-screen px-16 py-6 flex flex-wrap gap-y-0 md:gap-y-10 gap-x-[55px]">
        <div className="relative w-[306px] h-[566px]">
          <Image src="/items/Decor.png" alt="Decor" width={306} height={566} />
          <span className="absolute w-[100%] h-[100%] flex flex-col justify-center top-0 left-0 px-8 gap-8">
            <h2 className="font-bold text-[28px] text-[#FFFFFF]">Decor</h2>
            <p className="font-bold text-[16px] text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="/"
              className="flex justify-center items-center w-[124px] h-[48px] border border-[#FFFFFF] font-bold text-sm text-[#FFFFFF]"
            >
              VIEW NOW
            </Link>
          </span>
        </div>

        {items.map(({ id, title, price, imageLink, ratings }) => (
          <ProductCard
            productId={id}
            productTitle={title}
            productPrice={price}
            productCategory="bedroom"
            productColor="red"
            productImg={imageLink}
            productRatings={ratings}
          />
        ))}

        <div className="relative   w-[306px] h-[566px]">
          <Image
            src="/items/BohoChic.png"
            alt="BohoChic"
            width={306}
            height={566}
          />
          <span className="absolute w-[100%] h-[100%] flex flex-col justify-center top-0 left-0 px-8 gap-8">
            <h2 className="font-bold text-[28px] text-[#FFFFFF]">BOHO CHIC</h2>
            <p className="font-bold text-[16px] text-[#FFFFFF]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link
              href="/"
              className="flex justify-center items-center w-[124px] h-[48px] border border-[#FFFFFF] font-bold text-sm text-[#FFFFFF]"
            >
              VIEW NOW
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
