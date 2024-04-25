import { MdNavigateNext } from 'react-icons/md'

const BreadCrumb = () => {
  return (
    <div className='w-[300px] my-2 pb-2'>
      <div className='text-sm'>
        <nav className='text-sm flex items-center'>
          <a href='https://cellphones.webdaitin.com'>Trang chủ</a>
          <span className='divider'>
            <MdNavigateNext />
          </span>
          Sản phẩm
        </nav>
      </div>
    </div>
  )
}

export default BreadCrumb
