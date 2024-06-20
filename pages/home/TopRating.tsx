"use client";
import TopRatingCard from "@/components/component/TopRatingCard";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const TopRating = () => {
  const [numItems, setNumItems] = useState(6);

  const TopRatingItems = [
    {
      id: 10,
      title: "Tray with Foot",
      price: 30,
      imageLink: "/items/Tray with Foot.png",
      ratings: 4,
    },
    {
      id: 11,
      title: "Twill Seat Cushion",
      price: 30,
      imageLink: "/items/Twill Seat Cushion.png",
      ratings: 4,
    },
    {
      id: 12,
      title: "Fluted Beverage Glass",
      price: 30,
      imageLink: "/items/Fluted Beverage Glass.png",
      ratings: 4,
    },
    {
      id: 13,
      title: "Ceramic Egg Cup",
      price: 30,
      imageLink: "/items/Ceramic Egg Cup.png",
      ratings: 4,
    },
    {
      id: 14,
      title: "Small Bamboo Box",
      price: 30,
      imageLink: "/items/Small Bamboo Box.png",
      ratings: 4,
    },
    {
      id: 15,
      title: "Metal Cutlery Basket",
      price: 30,
      imageLink: "/items/Metal Cutlery Basket.png",
      ratings: 4,
    },
    {
      id: 16,
      title: "4-pack Ceramic Cups",
      price: 30,
      imageLink: "/items/4-pack Ceramic Cups.png",
      ratings: 4,
    },
    {
      id: 17,
      title: "2-pack Linen Napkins",
      price: 30,
      imageLink: "/items/2-pack Linen Napkins.png",
      ratings: 4,
    },
    {
      id: 18,
      title: "Glazed Stoneware Plate",
      price: 30,
      imageLink: "/items/Glazed Stoneware Plate.png",
      ratings: 4,
    },
  ];
  return (
    <div className="max-w-screen xl:px-16 px-4">
      <h2 className="text-[#323334] font-bold text-[34px]">TOP RATING</h2>
      <div className="flex flex-wrap gap-y-8 gap-x-4 xl:gap-x-28 pt-10">
        {TopRatingItems.slice(0, numItems).map(
          ({ id, title, price, imageLink, ratings }) => (
            <TopRatingCard
            productId={id}
            productTitle={title}
            productPrice={price}
            productCategory="bedroom"
            productColor="red"
            productImg={imageLink}
            productRatings={ratings}
            />
          )
        )}
        <Button
          onClick={() => setNumItems((n) => n + 3)}
          className="rounded-none w-[371px] py-[25px] bg-[#323334] text-[16px] font-bold xl:col-span-3 md:col-span-2 col-span-1 mx-auto mt-12"
        >
          LOAD MORE PRODUCTS
        </Button>
      </div>
    </div>
  );
};

export default TopRating;
