import { useEffect, useState } from 'react'
import CartList from 'src/components/CartList'
import axios from 'axios'
import { ICartItem } from '../../types/product'

interface Category {
  title: string
  products: ICartItem[]
}

interface ApiResponse {
  success: boolean
  message: string
  data: {
    bestSeller: Category
    latestProducts: Category
  }
}

const Home = () => {
  const [catBestSeller, setCatBestSeller] = useState<Category>({ title: '', products: [] })
  const [newproduct, setNewproduct] = useState<Category>({ title: '', products: [] })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>('http://localhost:3001/api/product/gethome')
        const data = response.data
        if (data.success) {
          setCatBestSeller(data.data.bestSeller)
          setNewproduct(data.data.latestProducts)
        } else {
          console.error('Lỗi:', data.message)
        }
      } catch (error) {
        console.error('Lỗi khi lấy sản phẩm:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <CartList title={catBestSeller.title} products={catBestSeller.products} />
      <CartList title={newproduct.title} products={newproduct.products} />
    </div>
  )
}

export default Home
