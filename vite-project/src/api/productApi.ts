import axiosClient from './axiosClient'

const productApi = {
  getProductById: async (param: string) => {
    return await axiosClient.get(`/api/product/getById/${param}`)
  },
  getProduct: async (data) => {
    return await axiosClient.post(`/api/product`, data)
  },
  //Them san pham Admin
  postProduct: async (data) => {
    return await axiosClient.post(`/api/product/create`, data)
  }
}
export default productApi
