import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='hidden md:flex justify-between py-5 px-[120px]'>
        <Link href='/' className='font-bold text-sm'>HOME</Link>
        <Link href='/' className='font-bold text-sm'>STORE</Link>
        <Link href='/' className='font-bold text-sm'>ACCESSORIES</Link>
        <Link href='/' className='font-bold text-sm'>BRAND</Link>
        <Link href='/' className='font-bold text-sm'>PAGES</Link>
        <Link href='/' className='font-bold text-sm'>ABOUT US</Link>
        <Link href='/' className='font-bold text-sm'>NEWS</Link>
        <Link href='/' className='font-bold text-sm'>CONTACT US</Link>
    </nav>
  )
}

export default Navbar