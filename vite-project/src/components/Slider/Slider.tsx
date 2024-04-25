import { useState } from 'react'
import { FcNext, FcPrevious } from 'react-icons/fc'
/* eslint-disable */
const Slider = () => {
  const slides = [
    {
      url: 'https://cf.shopee.vn/file/vn-50009109-e0873c27e4bc5350371ae4e3b92ca0f3_xxhdpi'
    },
    {
      url: 'https://cf.shopee.vn/file/vn-50009109-0d7eb92f216877b1117065db1800011a_xxhdpi'
    },
    {
      url: 'https://cf.shopee.vn/file/vn-50009109-b2d2c6a183e793d4481086104f870f79_xxhdpi'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div className='max-w-[1400px] h-full w-full px-1 relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-cover duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FcPrevious onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FcNext onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide: Slider, slideIndex: number) => (
          <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-2xl cursor-pointer'></div>
        ))}
      </div>
    </div>
  )
}

interface Slider {
  url: string
}

export default Slider
