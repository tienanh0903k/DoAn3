 // <div classNameName='border border-gray-300 w-full rounded overflow-hidden shadow-md mb-4'>
    //   <div classNameName='box-image'>
    //     <img src={imageUrl} alt={name} classNameName='w-full h-auto' />
    //     {onSale && (
    //       <div classNameName='badge-inner on-sale bg-gradient-to-r from-red-500 to-yellow-400 text-white font-bold text-xs py-1 px-2 absolute top-2 left-2 rounded'>
    //         HOT SALE
    //       </div>
    //     )}
    //   </div>
    //   <div classNameName='box-text p-4'>
    //     <div classNameName='title-wrapper mb-2'>
    //       <p classNameName='name text-lg font-semibold'>{name}</p>
    //     </div>
    //     <div classNameName='price-wrapper'>
    //       <p classNameName='price'>
    //         {oldPrice && <del classNameName='mr-2 text-gray-500'>{oldPrice.toLocaleString()}₫</del>}
    //         <span classNameName='text-orange-500 font-semibold'>{newPrice.toLocaleString()}₫</span>
    //       </p>
    //     </div>
    //   </div>
    // </div>




    home

    import { useEffect, useState } from 'react'
import CartList from 'src/components/CartList'
import axios from 'axios'

interface Product {
  id: number
  name: string
  price: number
  description: string
  imageUrl: string
  newPrice: string
}

interface Category {
  title: string
  products: Product[]
}

interface ApiResponse {
  success: boolean
  message: string
  data: {
    bestSeller: Category
    latestProducts: Category
  }
}
//eslint-disable-line no-console 
type CartItem = any

const Home = () => {
  const [catBestSeller, setCatBestSeller] = useState<Category>({ title: '', products: [] })
  const [newproduct, setNewproduct] = useState<Category>({ title: '', products: [] })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:3000/getCate')
        const data = response.data
        if (data.success) {
          setCatBestSeller(data.data.bestSeller)
          setNewproduct(data.data.latestProducts)
        } else {
          console.error('Error:', data.message)
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchData()
  }, [])

  const bestSellerItems: CartItem[] = catBestSeller.products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl
  }))

  const latestItems: CartItem[] = newproduct.products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl
  }))

  return (
    <div>
      {/* Type 'Product[]' is not assignable to type 'CartItem[]'.ts(2322)
CartList.tsx(29, 3): The expected type comes from property 'products' which is declared here on type 'IntrinsicAttributes & CartListProps'
(property) CartListProps.products: CartItem[] */}
      <CartList title={catBestSeller.title} products={bestSellerItems} />
      <CartList title={newproduct.title} products={latestItems} />
    </div>
  )
}

export default Home
