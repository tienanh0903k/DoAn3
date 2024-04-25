import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const placeholders = ['Nhập thông tin sản phẩm tìm kiếm', 'Khuyen mai 50% san pham ', 'Giay bong da moi nhat Nike...']

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length)
    }, 3000) 

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return (
    <div className='input_wrapper relative w-full flex justify-between items-center'>
      <input className='px-4 py-2 w-full h-[30px]' placeholder={placeholders[placeholderIndex]} type='text' />
      <button className='h-[80%] bg-sky-600 px-5 py-1 ml-2 absolute right-1'>
        <FaSearch />
      </button>
    </div>
  )
}

export default Search
