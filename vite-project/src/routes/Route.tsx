import { useRoutes } from 'react-router-dom'
import { Register } from '../Page/Register'
import RegisterLayout from 'src/Layout/RegisterLayout'
import HomeLayout from 'src/Layout/HomeLayout'
import Home from 'src/Page/Home'
import Login from 'src/Page/Login'
import ProductLayout from 'src/Layout/ProductLayout/ProductLayout'
import ErrorBoundary from 'src/components/ErrorBoundary'
import DetailProduct from 'src/Page/DetailProduct'
import MainLayout from 'src/Layout/MainLayout'

import Admin from 'src/Layout/AdminLayout/Admin'
import ProtectRoute from './ProtectRoute'
import Carts from 'src/Page/Carts'
import Products from 'src/Page/AdminPage/Products'
import Category from 'src/Page/AdminPage/Category'

// import {Login} from './Page/Login'

const Route = () => {
  const routesElement = useRoutes([
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    },
    {
      path: '/',
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/product',
      element: (
        <ProductLayout>
          <Products />
        </ProductLayout>
      )
    },
    {
      path: '/product/:id',
      element: (
        <MainLayout>
          <DetailProduct />
        </MainLayout>
      )
    },
    {
      path: '/cart',
      element: (
        <MainLayout>
          <Carts />
        </MainLayout>
      )
    },

    {
      // eslint-disable-next-line jsx-a11y/aria-role
      element: <ProtectRoute role='1' />,
      children: [
        {
          path: '/admin/product',
          element: (
            <Admin>
              <Products />
            </Admin>
          )
        },
        {
          path: '/admin/category',
          element: (
            <Admin>
              <Category />
            </Admin>
          )
        }
      ]
    },
    {
      path: '*',
      element: (
        <RegisterLayout>
          <ErrorBoundary />
        </RegisterLayout>
      )
    }
  ])

  return routesElement
}

export default Route
