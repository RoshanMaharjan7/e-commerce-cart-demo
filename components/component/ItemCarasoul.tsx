import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ItemCarasoul = () => {
  return (
    <div>
      <h3 className="text-[24px] font-medium text-[#323334] max-w-screen xl:px-16 px-4 ">
        Also You May Like
      </h3>
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ItemCarasoul;
