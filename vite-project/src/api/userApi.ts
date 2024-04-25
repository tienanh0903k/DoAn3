import axiosClient from './axiosClient'
import { LoginBody } from '../types/auth'

const userApi = {
  login: async (data: LoginBody) => {
    return await axiosClient.post('/api/user/login', data)
  },

  getCate: async () => {
    return await axiosClient.get('/getCate')
  }
  //register: (data) => axiosClient.post('/register', data)
}
export default userApi
