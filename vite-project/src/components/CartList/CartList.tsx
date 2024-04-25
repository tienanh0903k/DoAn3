import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import CartItem from 'src/components/CartItem'
import CartTop from './CartTop'
import { ICartItem } from '../../types/product'

interface CartListProps {
  title: string
  products: ICartItem[]
}
/* eslint-disable */
function SampleNextArrow(props: any) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block', background: 'red' }} onClick={onClick} />
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props
  return <div className={className} style={{ ...style, display: 'block', background: 'green' }} onClick={onClick} />
}

export const CartList = ({ title, products }: CartListProps) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  }

  return (
    <div className='w-full bg-beat'>
      <CartTop title={title} />
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className='grid md:w-1/4 lg:w-1/4'>
            <CartItem {...product} />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CartList
