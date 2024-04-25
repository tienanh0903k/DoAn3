import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import userApi from 'src/api/userApi'
import { LoginBody, ResponseValue } from 'src/types/auth'

interface UserState {
  currentUser: ResponseValue | null
}

const initialState: UserState = {
  currentUser: {
    user: JSON.parse(localStorage.getItem('user') || 'null'),
    token: JSON.parse(localStorage.getItem('access_token') || 'null')
  }
}

export const fetchLogin = createAsyncThunk('user/login', async (data: LoginBody, { rejectWithValue }) => {
  try {
    const response = await userApi.login(data)

    const responseData: ResponseValue = response.data.data

    localStorage.setItem('access_token', JSON.stringify(responseData.token))
    localStorage.setItem('user', JSON.stringify(responseData.user))
    //console.log(responseData)
    return responseData
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage = error.response.data.error
    return rejectWithValue(errorMessage)
  }
})

// export const fetchLogin = createAsyncThunk('user/login', async (data: LoginBody, { rejectWithValue }) => {
//   try {
//     const response = await userApi.login(data)
//     const responseData: ResponseValue = response.data
//     console.log(responseData);
//     localStorage.setItem('access_token', JSON.stringify(responseData.token))
//     localStorage.setItem('user', JSON.stringify(responseData.user))

//     console.log(responseData) // Log dữ liệu nhận được từ máy chủ

//     return responseData
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   } catch (error: any) {
//     const errorMessage = error.response.data.error
//     return rejectWithValue(errorMessage)
//   }
// })

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      //console.log(state.currentUser)
      state.currentUser = action.payload
    })
  }
})

export const selectUserRole = createSelector(
  [(state: { user: UserState }) => state.user.currentUser],
  (currentUser) => currentUser?.user?.role_id
)

const { reducer } = userSlice
export default reducer
