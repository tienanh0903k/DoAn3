import axiosClient from './axiosClient'

const categoryApi = {
  getAll() {
    return axiosClient.get('/api/category')
  }

  // getId(id) {

  // },

  // add()
}

export default categoryApi
