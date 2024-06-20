
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number,
  title: string,
  price: number,
  category: string,
  color: string,
  size: string,
  image: string
}

interface CartState {
    items: CartItem[]
}

const initialState: CartState ={
    items: [],
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push({...action.payload})
    },
    removeItem: (state, action: PayloadAction<{id: number}>) => {
      state.items = state.items.filter((item) => item.id != action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions

const cartReducer = cartSlice.reducer

export default cartReducer