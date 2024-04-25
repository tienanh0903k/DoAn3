import React from 'react'
import { Link } from 'react-router-dom'
import { CiStar } from 'react-icons/ci'

interface ICartItemProps {
  id: string
  title: string
  thumbnail: string
  price?: number | null
  discount: number | null
  onSale?: boolean
}

const CartItem: React.FC<ICartItemProps> = ({ id, title, thumbnail, price, discount }) => {
  return (
    <div className='w-[100%] inline-flex px-2 pb-4 min-w-[20%]'>
      <Link to={`/product/${id}`} className='relative bg-white inline-flex items-stretch w-full h-full p-0 box-border'>
        <div className='absolute top-[4px] right-[4px] w-[28px] h-[28px] text-center z-10 rounded-full'>
          <div>
            <span className='absolute top-[4px] right-[4px] w-[24px] h-[24px] text-center z-10 rounded-full bg-gray-200'>
              <div className='absolute top-0 left-0 right-0 bottom-0 m-auto'>
                <i className='fa-solid fa-heart'></i>
              </div>
            </span>
          </div>
        </div>
        <div className='relative shadow-md rounded-lg min-w-full flex flex-col'>
          <div className='relative'>
            <div className='relative h-0 rounded-t-lg pb-[100%] w-full bg-white text-ellipsis	overflow-hidden'>
              <div className='bg-no-repeat bg-cover inline-block my-0 mx-auto text-center w-full h-full absolute'>
                <img src={thumbnail} alt={title} />
              </div>
            </div>
          </div>

          <div className='relative p-2 box-border overflow-hidden grow'>
            <span className='text-gray-800 max-h-[38px] text-sm font-semibold leading-5 overflow-hidden whitespace-normal break-words'>
              {title}
            </span>
            <div className='mt-3 flex items-center'>
              <div className='truncate text-gray-500 line-through'>
                <span className='text-sm'>{price} </span>
                <span className='text-xs'>VNĐ</span>
              </div>
              <div className='ml-1 truncate text-orange'>
                <span className='text-sm'>{discount} </span>
                <span className='text-xs'>VNĐ</span>
              </div>
            </div>
            <div className='flex align-items-center justify-between text-xs leading-6 mx-0 my-1 text-gray-600'>
              iBox
            </div>
            <div className='min-h-[14px] text-xs flex justify-between'>
              <div className='flex align-items-center my-1 mx-0'>
                <CiStar color='yellow' />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </div>
              <span className='align-midle ml-1 text-gray-600'>View: 1294</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CartItem
