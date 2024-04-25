import { createSlice } from '@reduxjs/toolkit'
const headerReducer = createSlice({
  name: 'header',
  initialState: {
    value: 'vi'
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { changeLanguage } = headerReducer.actions

export default headerReducer.reducer