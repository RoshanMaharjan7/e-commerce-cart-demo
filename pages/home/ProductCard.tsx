'use client'
import { addItem } from '@/app/lib/cartSlice';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import React from 'react'
import { CiStar } from 'react-icons/ci'
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { useDispatch } from 'react-redux';

type products = {
    productId: number,
    productTitle: string,
    productPrice: number,
    productCategory: string,
    productColor: string,
    productImg: string,
    productRatings: number,
}

const ProductCard = ({productId,productTitle, productPrice, productCategory, productColor, productImg, productRatings}:products) => {
    const dispatch = useDispatch()
  return (
    <div key={productId} className='h-[566px] w-[306px] flex flex-col gap-4 relative'>
        <Image src={productImg} width={306} height={422} alt={productTitle}/>
        <p className='font-bold text-lg text-[#323334]'>{productTitle}</p>
        <div className='flex gap-1'>
            <CiStar className={productRatings>=1 ? 'text-[#F2C94C]' : ''}/>
            <CiStar className={productRatings>=2 ? 'text-[#F2C94C]' : ''}/>
            <CiStar className={productRatings>=3 ? 'text-[#F2C94C]' : ''}/>
            <CiStar className={productRatings>=4 ? 'text-[#F2C94C]' : ''}/>
            <CiStar className={productRatings>=5 ? 'text-[#F2C94C]' : ''}/>
        </div>
        <p className='font-bold text-2xl'>{productPrice}$</p>
        <span className='absolute w-[100%] h-[422px] top-0 left-0 cursor-pointer flex opacity-0 hover:opacity-100 justify-center items-center'>
            <div className='w-[232px] h-[56px] grid grid-cols-2 divide-x-2 items-center bg-[#FFFFFF]  rounded-full px-20'>
                <Button onClick={() => dispatch(addItem({id: productId, title: productTitle, price: productPrice, category: productCategory, color: productColor, size: '24*24', image: productImg }))} className='bg-transparent p-0 hover:bg-transparent'><Image src={'/icons/Cart.svg'} width={18} height={18} alt='cart'/></Button>
                <CiHeart className='h-[28px] w-[28px] pl-'/>
            </div>
        </span>
    </div>
  )
}

export default ProductCard