import { getTotal } from 'src/redux/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import noProduct from '../../assets/no-product.png'

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  dispatch(getTotal())
  // const { item } = cart.cartItems
  // console.log(cart.cartItems)
  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        {cart?.cartItems == 0 ? (
          <div className='text-center'>
            <img src={noProduct} alt='no purchase' className='mx-auto h-24 w-24' />
            <div className='mt-5 font-bold text-gray-400'>Giỏ hàng của bạn còn trống</div>
            <div className='mt-5 text-center'>
              <Link to='/' className='rounded-sm bg-sky-500 px-10 py-2 uppercase text-white transition-all'>
                Mua ngay
              </Link>
            </div>
          </div>
        ) : (
          <div className='overflow-auto'>
            <div className='min-w-[1000px]'>
              <div className='grid grid-cols-12 rounded-sm bg-white px-9 py-5 text-sm capitalize text-gray-500 shadow'>
                <div className='col-span-6'>
                  <div className='flex items-center'>
                    <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                      <input type='checkbox' className='h-5 w-5 accent-orange' />
                    </div>
                    <div className='flex-grow text-black'>Sản phẩm</div>
                  </div>
                </div>
                <div className='col-span-6'>
                  <div className='grid grid-cols-5 text-center'>
                    <div className='col-span-2'>Đơn giá</div>
                    <div className='col-span-1'>Số lượng</div>
                    <div className='col-span-1'>Số tiền</div>
                    <div className='col-span-1'>Thao tác</div>
                  </div>
                </div>
              </div>
              {cart.cartItems.length > 0 &&
                cart.cartItems.map((cartItem, index = 0) => (
                  <div
                    key={index}
                    className='mb-5 grid grid-cols-12 items-center rounded-sm border border-gray-200 bg-white px-4 py-5 text-center text-sm text-gray-500 first:mt-0'
                  >
                    <div className='col-span-6'>
                      <div className='flex'>
                        <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                          <input type='checkbox' className='h-5 w-5 accent-orange' />
                        </div>
                        <div className='flex-grow'>
                          <div className='flex'>
                            {/* <img alt={purchase.product.name} src={purchase.product.image} /> */}
                            <div className='flex-grow px-2 pb-2 pt-1'>Ao inter miami cua si dog oc cho</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='col-span-6'>
                      <div className='grid grid-cols-5 items-center'>
                        <div className='col-span-2'>
                          <div className='flex items-center justify-center'>
                            <span className='text-gray-300 line-through'>
                              {/* ₫{formatCurrency(purchase.product.price_before_discount)} */}
                            </span>
                            {/* <span className='ml-3'>₫{formatCurrency(purchase.product.price)}</span> */}
                          </div>
                        </div>
                        <div className='col-span-1'>
                          <div className='flex h-8 w-20 rounded-lg relative bg-transparent mt-1 ml-6'>
                            <button
                              className='border border-gray-300 text-gray-600 hover:text-gray-700 h-full w-10 rounded-l cursor-pointer outline-none'
                              data-action='decrement'
                            >
                              <span className='m-auto text-lg font-thin'>−</span>
                            </button>
                            <input
                              value='1'
                              className='border border-gray-300 outline-none text-center bg-transparent font-semibold text-md flex items-center text-gray-700 w-[50%]'
                              name='custom-input-number'
                              readOnly
                            />
                            <button
                              className='border border-gray-300 text-gray-600 hover:text-gray-700 h-full w-10 rounded-r cursor-pointer'
                              data-action='increment'
                            >
                              <span className='m-auto text-lg font-thin'>+</span>
                            </button>
                          </div>
                        </div>
                        <div className='col-span-1'>
                          <span className='text-orange'>
                            {/* ₫{formatCurrency(purchase.product.price * purchase.buy_count)} */}
                          </span>
                        </div>
                        <div className='col-span-1'>
                          <button
                            // onClick={handleDelete(index)}
                            className='bg-none text-black transition-colors hover:text-orange'
                          >
                            Xóa
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
