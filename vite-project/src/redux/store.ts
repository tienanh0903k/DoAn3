import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import cartReducer from './cartSlice'

// import { persistReducer, persistStore } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage
// }

// const persistedReducer = persistReducer(persistConfig, cartReducer)

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
})

export default store
// export const persistor = persistStore(store)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
