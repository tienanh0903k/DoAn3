import BreadCrumb from 'src/components/Breadcrumb'
import { Footer } from 'src/components/Footer'
import { Header } from 'src/components/Header'
import FilterCategory from 'src/components/SidebarFilter'

interface Props {
  children?: React.ReactNode
}

export const categories = [
  { id: 1, name: 'Thời trang' },
  { id: 2, name: 'Khẩu trang' },
  { id: 3, name: 'Làm đẹp' },
  { id: 4, name: 'Laptop' },
  { id: 5, name: 'Ổ cứng' },
  { id: 6, name: 'Điện thoại' }
]

const ProductLayout = ({ children }: Props) => {
  return (
    <div className='container bg-beat mx-auto max-w-7xl'>
      <Header />
      <div className='mx-auto grid grid-cols-5 w-[90%] my-[101px] max-h-100'>
        <div className='grid col-span-5'>
          <BreadCrumb />
        </div>
        <div className='grid col-span-1 bg-beat max-w-2xl overflow-hidden'>
          <FilterCategory categories={categories} />
        </div>
        <div className='grid col-span-3'>
          <div className='slider-wrapper max-h-[350px]'>{children}</div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductLayout
