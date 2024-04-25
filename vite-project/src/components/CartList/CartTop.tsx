const CartTop = ({title}) => {
  return (
    <div className='flex items-center justify-between py-2 bg-beat'>
      <span className='text-lg mr-4 font-bold'>{title}</span>
      <ul className='flex'>
        <li className='mr-4'>
          <a
            href='index.html'
            className='py-1 px-3 bg-white border border-gray-300 rounded-lg shadow-sm text-sm text-gray-600 hover:bg-gray-100 hover:text-black'
          >
            Apple
          </a>
        </li>
        <li className='mr-4'>Apple</li>
        <li className='mr-4'>Apple</li>
        <li className='mr-4'>Apple</li>
      </ul>
      <button className='bg-blue-500 text-white px-4 py-2 rounded'>Xem tất cả</button>
    </div>
  )
}

export default CartTop
