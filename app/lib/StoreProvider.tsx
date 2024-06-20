'use client'

import { store } from "@/app/lib/store"
import React,{ ReactNode} from 'react'
import { Provider } from "react-redux"

const StoreProvider = ({children}: {children: ReactNode}) => {
  return (
    <Provider store={store}> {children}</Provider>
  )
}

export default StoreProvider