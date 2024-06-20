
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface EmailState {
  email: String
}

const initialState: EmailState = {
  email: "",
}

export const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    setEmail: (state, action: PayloadAction<String>) => {
      state.email = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmail } = emailSlice.actions

const emailReducer = emailSlice.reducer

export default emailReducer