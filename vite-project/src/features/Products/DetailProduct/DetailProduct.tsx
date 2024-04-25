import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productApi from 'src/api/productApi'
import { Star } from 'src/components/Svg'
import { formatPrice } from '../../../utils/index'
import { useDispatch } from 'react-redux'
import { addToCart } from 'src/redux/cartSlice'
// import BtnColor from 'src/components/Buttons/Colors'

interface IProductType {
  title: string
  price: number
  thumbnail: string
  image: string
  description: string
  rating: number
  id: number
  discount: number
  DetailProducts: IDetailProduct[]
}

interface IDetailProduct {
  thumbnail: string
  color: string
}

const DetailProduct = () => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)
  const [product, setProduct] = useState<IProductType | null>(null)
  const [selectedColor, setSelectedColor] = useState<IDetailProduct | null>(null)
  const [currentImage, setCurrentImage] = useState<string | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await productApi.getProductById(id)
        //console.log(response.data)
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    fetch()
  }, [])

  useEffect(() => {
    if (selectedColor) {
      setCurrentImage(selectedColor.thumbnail)
    } else {
      setCurrentImage(product?.thumbnail || '')
    }
  }, [selectedColor])

  const handleColorChange = (color: IDetailProduct) => {
    setSelectedColor(color)
    console.log(selectedColor)
  }

  const handldeUpQuantity = () => {
    setQuantity((prev) => {
      return prev + 1
    })
  }
  const handldeDownQuantity = () => {
    setQuantity((prev) => {
      if (prev === 0) return 0
      return prev - 1
    })
  }

  //xu ly them gio hang
  const handleAddToCart = () => {
    //console.log("Add to cart", product)
    dispatch(
      addToCart({
        item: product,
        quantity: quantity
      })
    )
  }

  return (
    <div className='container'>
      <div className='bg-white p-4 shadow'>
        <div className='grid grid-cols-12 gap-9'>
          <div className='col-span-5'>
            <div className='relative w-full pt-[100%] shadow'>
              <img
                src={currentImage || product?.thumbnail}
                alt={product?.title}
                className='absolute top-0 left-0 h-full w-full object-cover'
              />
            </div>
            <div className='relative mt-4 grid grid-cols-5 gap-1'>
              <button className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
                </svg>
              </button>
              {product?.DetailProducts.map((detail, index) => {
                // const isActive = index === 0
                return (
                  <div key={index} className='relative w-full pt-[100%]'>
                    <img
                      src={detail.thumbnail}
                      alt={product?.title}
                      className='absolute top-0 left-0 h-full w-full object-cover'
                    />
                    {/* {isActive && <div className='absolute bg-transparent border-2 border-orange' />} */}
                  </div>
                )
              })}
            </div>
          </div>
          <div className='col-span-7'>
            <h1 className='text-xl font-medium uppercase'>{product?.title}</h1>
            <div className='mt-4 flex items-center'>
              <div className='flex items-center'>
                <span className='border-b'>4.5</span>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className='mx-4 h-4 w-[1px] bg-gray-300'></div>
              <div>
                <span>132</span>
                <span className='ml-1 text-gray-500'>Đã bán</span>
              </div>
            </div>
            <div className='mt-4 flex items-center px-5 py-4'>
              {product && (
                <>
                  <div className='text-gray-500 line-through'>₫{formatPrice(product.price)}</div>
                  <div className='ml-3 text-3xl font-medium text-orange'>₫{formatPrice(product.discount)}</div>
                  <div className='ml-4 rounded-sm bg-sky-500 px-1 py-[2px] text-xs font-semibold uppercase text-white'>
                    20% giảm
                  </div>
                </>
              )}
            </div>
            <div className='mt-6 flex items-center'>
              <div className='capitalize text-gray-400'>Số lượng: </div>
              <div className='flex h-8 w-40 rounded-lg relative bg-transparent mt-1 ml-6'>
                <button
                  onClick={handldeDownQuantity}
                  className='border border-gray-300 text-gray-600 hover:text-gray-700 h-full w-20 rounded-l cursor-pointer outline-none'
                  data-action='decrement'
                >
                  <span className='m-auto text-lg font-thin'>−</span>
                </button>
                <input
                  value={quantity}
                  className='border border-gray-300 outline-none text-center bg-transparent font-semibold text-md flex items-center text-gray-700 w-full'
                  name='custom-input-number'
                  readOnly
                />
                <button
                  onClick={handldeUpQuantity}
                  className='border border-gray-300 text-gray-600 hover:text-gray-700 h-full w-20 rounded-r cursor-pointer'
                  data-action='increment'
                >
                  <span className='m-auto text-lg font-thin'>+</span>
                </button>
              </div>
            </div>
            <div className='mt-4 flex items-center'>
              <button
                onClick={handleAddToCart}
                className='flex h-12 items-center justify-center rounded-sm border border-sky-400 px-5 bg-cyan-100 capitalize text-slate-900 shadow-sm hover:bg-transparent'
              >
                <svg
                  enableBackground='new 0 0 15 15'
                  viewBox='0 0 15 15'
                  x={0}
                  y={0}
                  className='mr-[10px] h-5 w-5 fill-current stroke-orange text-orange'
                >
                  <g>
                    <g>
                      <polyline
                        fill='none'
                        points='.5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeMiterlimit={10}
                      />
                      <circle cx={6} cy='13.5' r={1} stroke='none' />
                      <circle cx='11.5' cy='13.5' r={1} stroke='none' />
                    </g>
                    <line fill='none' strokeLinecap='round' strokeMiterlimit={10} x1='7.5' x2='10.5' y1={7} y2={7} />
                    <line fill='none' strokeLinecap='round' strokeMiterlimit={10} x1={9} x2={9} y1='8.5' y2='5.5' />
                  </g>
                </svg>
                Thêm vào giỏ hàng
              </button>
              <button className='flex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-sky-500 px-5 capitalize text-white shadow-sm outline-none'>
                Mua ngay
              </button>
            </div>
            <div className='mt-4 flex items-center'>
              <span className='capitalize text-gray-400'>Màu sắc: </span>
              <div className='flex h-8 w-40 rounded-lg relative bg-transparent mt-1 ml-6'>
                {/* <button className='rounded-full w-8 h-8 mr-2 border-2 border-black' />
                <button className='rounded-full w-8 h-8 mr-2 border-2 bg-red-700 border-red-500' /> */}
                {/* <BtnColor /> */}
                {product?.DetailProducts.map((detail, index) => {
                  const isActive = index === 0
                  return (
                    <button
                      key={index}
                      className={`rounded-full w-8 h-8 mr-2 bg-${detail.color}-500 ${isActive ? 'border-2 bg-transparent border-orange' : 'border-2 border-gray-300'}`}
                      onClick={() => handleColorChange(detail)}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <div className='container'>
          <div className='bg-white p-4 shadow'>
            <div className='rounded p-4 text-lg capitalize text-slate-700'>Mô tả sản phẩm</div>
            <div className='mx-4 mb-4 mt-6 text-sm leading-loose'>
              <div
                dangerouslySetInnerHTML={{
                  __html: product?.description
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProduct
