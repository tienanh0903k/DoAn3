import React from 'react'
import BreadCrumb from 'src/components/Breadcrumb'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'

interface Props {
  children?: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className='container bg-beat mx-auto max-w-7xl'>
      <Header />
      <div className='mx-auto grid grid-cols-5 w-[90%] my-[101px] max-h-100'>
        <BreadCrumb />
        <div className='col-span-5 w-full mx-auto'>{children}</div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
