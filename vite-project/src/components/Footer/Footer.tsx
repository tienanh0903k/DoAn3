import React from 'react'

const Footer = () => {
  return (
    <footer className='py-16 border-t'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-3 gap-3'>
          <div className='col-span-1'>© 2024 Shopee. Tất cả các quyền được bảo lưu.</div>
          <div className='col-span-2'>
            Quốc gia & Khu vực: Singapore Indonesia Thái Lan Malaysia Việt Nam Philippines Brazil México Colombia Chile
            Đài Loan
          </div>
        </div>
        <div className='text-center text-sm mt-10'>
          <div className=''>Công ty TNHH Shopee</div>
          <div className='mt-6'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Nguyễn Đức Trí - Điện thoại liên hệ: 024 73081221 (ext 4678)
          </div>
          <div className='mt-6'>
            Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015
          </div>
          <div className='mt-6'>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
