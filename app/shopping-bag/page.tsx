import AddressLinks from '@/components/component/AddressLinks'
import Footer from '@/components/component/Footer'
import Header from '@/components/component/Header'
import ItemCarasoul from '@/components/component/ItemCarasoul'
import Bag from '@/pages/shopping-bag/Bag'
import React from 'react'

const page = () => {
  return (
    <>
        <Header/>
        <AddressLinks/>
        <Bag/>
        <ItemCarasoul/>
        <Footer/>
    </>
  )
}

export default page