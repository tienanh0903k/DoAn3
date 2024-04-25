import Slider from 'src/components/Slider'
import React from 'react'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import Sidebar from 'src/components/Sidebar'
import Banner from 'src/components/Banner'

interface Props {
  children?: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <div className='container bg-beat mx-auto max-w-7xl'>
      <Header />
      <div className='mx-auto grid grid-cols-5 w-[90%] my-[101px] max-h-100'>
        <div className='grid col-span-1 bg-beat max-w-2xl overflow-hidden'>
          <Sidebar />
        </div>
        <div className='grid col-span-3'>
          <div className='slider-wrapper max-h-[350px]'>
            <Slider />
          </div>
        </div>
        <div className='grid col-span-1'>
          <Banner />
        </div>

        <div className='col-span-5 w-full py-5 mx-auto'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout
