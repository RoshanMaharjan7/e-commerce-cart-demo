import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='text-[#FFFFFF]'>
        <div className='max-w-screen px-16 flex flex-wrap bg-[#323334] gap-36 py-12 pb-20'>
            <div className='flex flex-col gap-10 w-[314px]'>
                <h2 className='font-bold text-[28px]'>URBAN OUTFITTERS</h2>
                <p className='font-normal text-[16px] text-[#FFFFFF80]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <span className='flex flex-col gap-1'>
                    <p className='font-bold text-[16px]'>121 king street, Melbourne 3000</p>
                    <p className='font-bold text-[16px]'>+61 3 8376 6284</p>
                    <p className='font-bold text-[16px]'>contact@urbanoutfitters.com</p>
                </span>

                <span className='flex justify-between'>
                    <FaFacebookF/>
                    <FaTwitter/>
                    <FaInstagram/>
                    <FaYoutube/>
                </span>
            </div>

            <div className='flex flex-col gap-10'>
                <h2 className='font-bold text-[16px]'>SHOPPING</h2>
                <span className='flex flex-col gap-2'>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Your cart</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Your orders</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Compared items</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Wishlist items</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Shipping details</Link>
                </span>
            </div>

            <div className='flex flex-col gap-10'>
                <h2 className='font-bold text-[16px]'>MORE LINK</h2>
                <span className='flex flex-col gap-2'>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Blog</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Gift Center</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Buying Guides</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>New Arrivals</Link>
                    <Link className='font-light text-sm text-[#FFFFFF80]' href={'/'}>Clearance</Link>
                </span>
            </div>

            <div className='flex flex-col gap-10'>
                <h2 className='font-bold text-[16px]'>FROM THE BLOG</h2>
                <div className='text-[#FFFFFF80] font-normal flex flex-col gap-1'>
                 <p className='text-[24px]'>26<span className='text-sm'> May</span></p>
                 <p className='text[16px] font-light text-[#FFFFFF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <p>3 comments</p>
                </div>

                <hr className='text-[#FFFFFF80]'/>

                <div className='text-[#FFFFFF80] font-normal flex flex-col gap-1'>
                 <p className='text-[24px]'>27<span className='text-sm'> May</span></p>
                 <p className='text[16px] font-light text-[#FFFFFF]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 <p>3 comments</p>
                </div>
                
            </div>

        </div>
        <p className='max-w-screen text-center py-2 bg-[#222222] font-light text-sm '>Urban Outfitters © – All rights reserved </p>
    </footer>
  )
}

export default Footer