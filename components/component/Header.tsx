'use client'
import React from "react";
import { CgProfile } from "react-icons/cg";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import Navbar from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import type { RootState } from '@/app/lib/store'
import { useSelector, useDispatch } from 'react-redux'


const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  

  const cartlength = cartItems.length
  return (
    <header className="max-w-screen px-16">
      <div className="flex items-center justify-between py-5">
        <h1 className="font-bold text-2xl">MOODY STUDIO</h1>
        <div className="flex w-[13%] items-center justify-between">
          <Link href={"/"}>
            <Image
              src={"/icons/Search.svg"}
              width={20}
              height={20}
              alt="search"
            />
          </Link>
          <Link href={"/login"}>
            <Image
              src={"/icons/profile.svg"}
              width={20}
              height={20}
              alt="profile"
            />
          </Link>
          <span className="relative">
            <Link href={"/shopping-bag"}>
              <Image
                src={"/icons/Cart.svg"}
                width={20}
                height={20}
                alt="cart"
              />
            </Link>
            <span className="flex items-center justify-center absolute h-4 w-4 bg-[#F2994A] rounded-full -bottom-2 -right-1 font-bold text-[#FFFFFF] text-[10px] ">{cartlength}</span>
          </span>

          <Link href={"/"}>
            <CiHeart className="h-[27px] w-[27px] font-bold" />
          </Link>
        </div>
      </div>
      <hr className="border border-black" />
      <Navbar />
      <hr className="border border-black" />
    </header>
  );
};

export default Header;
