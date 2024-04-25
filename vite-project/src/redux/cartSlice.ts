import { createSlice, current } from '@reduxjs/toolkit'

const cartItemsFromLocalStorage: string | null = localStorage.getItem('cartItems')
const cartItems = cartItemsFromLocalStorage ? JSON.parse(cartItemsFromLocalStorage) : []
// localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
const initialState = {
  cartItems: cartItems,
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cartItems } = current(state)
      const itemIndex: number = cartItems.findIndex((index: { item: { id: number } }) => {
        //console.log(current(state))
        //console.log(index.item.id, action.payload.item.id) // Kiểm tra xem item có tồn tại không
        return index.item.id === action.payload.item.id
      })
      //console.log(action.payload)
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity++
      } else {
        state.cartItems.push({ ...action.payload, quantity: action.payload.quantity })
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
    },
    getTotal(state, action) {
      // const { quantity } = current(state).cartItems.quantity
      // // const { price } = current(state).cartItems.item.price
      console.log(current(state))
    }
  }
})

const { reducer } = cartSlice
export const { addToCart, getTotal } = cartSlice.actions
export default reducer
