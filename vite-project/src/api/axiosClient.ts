import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    // 'Content-Type': 'application/json',
    'Content-Type': 'multipart/form-data'
  }
})

// Interceptors request
axiosClient.interceptors.request.use(
  function (config) {
    // Thực hiện bất kỳ xử lý nào trước khi gửi request
    // Ví dụ: Thêm các headers hoặc thực hiện xác thực
    return config
  },
  function (error) {
    // Xử lý lỗi trong quá trình gửi request
    return Promise.reject(error)
  }
)

// Interceptors response
axiosClient.interceptors.response.use(
  function (response) {
    // Thực hiện bất kỳ xử lý nào sau khi nhận được phản hồi
    // Ví dụ: Kiểm tra các mã lỗi hoặc cập nhật trạng thái ứng dụng
    return response
  },
  function (error) {
    // Xử lý lỗi trong quá trình nhận phản hồi
    return Promise.reject(error)
  }
)

export default axiosClient
