import AddressLinks from '@/components/component/AddressLinks'
import Footer from '@/components/component/Footer'
import Header from '@/components/component/Header'
import ProductShowcase from '@/pages/product/ProductShowcase'
import React from 'react'

const page = () => {
  return (
    <>
        <Header/>
        <AddressLinks/>
        <ProductShowcase/>
        <Footer/>
    </>
  )
}

export default page