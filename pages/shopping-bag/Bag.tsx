"use client";
import React, { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/app/lib/store'
import { removeItem } from "@/app/lib/cartSlice";


const Bag = () => {

  const dispatch = useDispatch()
  const bagItems = useSelector((state: RootState) => state.cart.items)


  let totalPrice = 0

  
 
  bagItems.map((item)=> {
    totalPrice += item.price
  })


  
  // const bagItems = [
  //   {
  //     id: 20,
  //     title: "Checked Duvet Cover Set",
  //     price: 39.99,
  //     color: "Mint",
  //     size: "21*45",
  //     total: 42.99,
  //   },
  //   {
  //     id: 21,
  //     title: "Checked Duvet Cover Set",
  //     price: 39.99,
  //     color: "Mint",
  //     size: "21*45",
  //     total: 42.99,
  //   },
  // ];
  return (
    <div className="max-w-screen xl:px-16 px-4">
      <h2 className="font-medium text-[34px] text-[#323334] w-full text-center">
        SHOPPING BAG
      </h2>

      <div className="flex justify-between flex-wrap gap-10 py-10">
        <div className="flex flex-col gap-5 flex-grow ">
          {bagItems.map(({ id, title, price, color, size, image }) => (
            <div key={id} className="flex  justify-between">
              <div className="flex gap-4 ">
                <Image
                  src={image}
                  width={130}
                  height={180}
                  alt="item"
                />
                <div className="flex flex-col justify-between">
                  <h3 className="font-medium text-[16px] text-[#323334]">
                    {title}
                  </h3>
                  <p className="font-medium text-[18px] text-[#323334]">
                    {price} $
                  </p>
                  <span className="grid grid-cols-2 gap-x-20">
                    <p className="font-light text-sm text-[#323334]">
                      Art No.: {id}
                    </p>
                    <p className="font-light text-sm text-[#323334]">
                      Size: {size}
                    </p>
                    <p className="font-light text-sm text-[#323334]">
                      Color: {color}
                    </p>
                    <p className="font-light text-sm text-[#323334]">
                      Total: {price}
                    </p>
                  </span>

                  <span className="flex">
                    <Button className="rounded-none w-[31px] h-[31px] bg-[#FFFFFF] text-black ">
                      <CiHeart className="text-black" />
                    </Button>
                  </span>
                </div>
              </div>

              <Button onClick={() => dispatch(removeItem({id: id}))} className="text-black bg-[#FFFFFF]  h-0 hover:bg-transparent"><RxCross1 /></Button>
            </div>
          ))}

          <div className="w-full">
            <p className="font-medium text-[18px] text-[#323334] w-full flex justify-end">Total</p>
            <hr className="border-[#323334]"/>
            <p className="font-medium text-[18px] text-[#323334]  w-full flex justify-end">{totalPrice} $</p>
          </div>
        </div>

        <div className="w-[510px] h-[507px] bg-[#ECEBE9B2] flex flex-col px-10 py-16 justify-between">
          <form>
            <FormItem>
              <Label className="font-light text-[#323334] text-[18px]">
                ADD A DISCOUNT CODE
              </Label>
              <div className="flex">
                <Input
                  className="h-[54px] rounded-none border border-[#323334] bg-[#FFFFFF] font-normal text-[16px] text-[#323334]"
                  placeholder=""
                />
                <Button
                  type="submit"
                  className="rounded-none w-[85px] h-[54px]"
                >
                  ADD
                </Button>
              </div>
            </FormItem>
          </form>

          <div className="flex flex-col gap-2 ">
            <p className="font-light text-[#323334] text-[18px]">
              Log in to use your member offers.
            </p>
            <Link
              href="/login"
              className="flex justify-center items-center w-full h-[54px] border border-[#323334] bg-[#FFFFFF] font-bold text-sm"
            >
              LOG IN
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col">
              <span className="flex justify-between">
                <p className="text-[#323334] text-sm font-medium">
                  Order value
                </p>
                <p className="text-[#323334] text-sm font-medium">{totalPrice} $</p>
              </span>

              <span className="flex justify-between">
                <p className="text-[#323334] text-sm font-medium">Shipping</p>
                <p className="text-[#323334] text-sm font-medium">0.0 $</p>
              </span>
            </div>

            <span className="flex justify-between">
              <p className="text-[#323334] text-sm font-medium">Total</p>
              <p className="text-[#323334] text-sm font-medium">{totalPrice} $</p>
            </span>
          </div>

          <Link
            href="/"
            className="flex justify-center items-center rounded-none w-full h-[54px] bg-[#323334] text-[#FFFFFF] font-bold text-sm"
          >
            CONTINUE TO CHECKOUT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bag;
