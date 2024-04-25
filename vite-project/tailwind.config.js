/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ee4d2d', // Xác định màu chính
        secondary: '#3399ff', // Xác định màu phụ
        beat: '#f8f8f8',
        // Thêm các màu tùy chỉnh khác nếu cần
      }
    }
  },
  plugins: []
}
