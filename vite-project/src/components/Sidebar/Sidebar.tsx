import React from 'react'
import './Sidebar.css'

interface SubCategory {
  id: number
  name: string
  href: string
}

interface Category {
  id: number
  name: string
  href: string
  children?: SubCategory[]
}

const categories: Category[] = [
  {
    id: 1,
    name: 'Category 1',
    href: '#'
  },
  {
    id: 2,
    name: 'Category 2',
    href: '#'
  },
  {
    id: 2,
    name: 'Category 2',
    href: '#'
  },
  {
    id: 2,
    name: 'Category 2',
    href: '#'
  },
  {
    id: 2,
    name: 'Category 2',
    href: '#'
  },
  {
    id: 2,
    name: 'Category 2',
    href: '#'
  }
]

const Sidebar = () => {
  return (
    <div className='bg-beat text-black h-full w-full'>
      <ul id='mega_menu' className='block w-full'>
        {categories.map((category, index) => (
          <li key={index} className='w-full flex gap-2 ml-2'>
            <img
              width='18'
              height='24'
              src='https://cellphones.webdaitin.com/wp-content/uploads/2020/12/icons_menubar-11_20-18x24.png'
              className='menu-image menu-image-title-after'
              alt=''
              loading='lazy'
            ></img>
            <a href={category.href} className='text-sm py-3'>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
