///import { Link } from 'react-router-dom'
import { MdArrowDropDown } from 'react-icons/md'
import Logo from '../../assets/Logo/nta.png'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../Search'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
const Header = () => {
  const info = useSelector((state: RootState) => {
    return state.user.currentUser
  })
  //console.log(info)
  return (
    <div className='fixed z-30 right-0 top-0 w-full bg-sky-600 px-16 h-[100px]'>
      <div className='navbar_top flex justify-between py-1'>
        <div className='nav_top-right flex gap-4'>
          <p className='text-sm text-cyan-50'>Kênh người bán</p>
          <p className='text-sm text-cyan-50'>Trở thành người bán</p>
        </div>
        <div className='nav_top-left flex gap-4'>
          <Link to='/' className='text-sm text-cyan-50 flex items-center'>
            <span>
              <MdArrowDropDown />
            </span>
            Language
          </Link>
          {info?.user ? (
            <div className='flex gap-4'>
              <p className='text-sm text-cyan-50'>
                <Link to='/profile'>{info.user.fullname}</Link>
              </p>
            </div>
          ) : (
            <div className='flex gap-4'>
              <p className='text-sm text-cyan-50'>
                <Link to='/register'>Register</Link>
              </p>
              <p className='text-sm text-cyan-50'>
                <Link to='/login'>Login</Link>
              </p>
            </div>
          )}
        </div>
      </div>

      <div className='navbar_body flex justify-between py-4 gap-12'>
        <div className='logo'>
          <img src={Logo} alt='' className='w-[150px] h-[40px]' />
        </div>
        <div className='searchbar w-full relative'>
          {/* <div className='input_wrapper relative w-full flex justify-between items-center'>
            <input className='px-4 py-2 w-full h-[30px]' placeholder='Nhập thông tin sản phẩm tìm kiếm' type='text' />
            <button className='h-[80%] bg-sky-600 px-5 py-1 ml-2 absolute right-1'>
              <FaSearch />
            </button>
          </div> */}
          <Search />
          <div className='flex tags gap-4 text-center my-1'>
            <p className='text-xs text-cyan-50'>Quần ship</p>
            <p className='text-xs text-cyan-50'>Áo lót</p>
            <p className='text-xs text-cyan-50'>Áo ba lô</p>
            <p className='text-xs text-cyan-50'>Ship</p>
            <p className='text-xs text-cyan-50'>Dép Nữ</p>
            <p className='text-xs text-cyan-50'>Bikini</p>
            <p className='text-xs text-cyan-50'>Gấu Bông</p>
            <p className='text-xs text-cyan-50'>Quạt Mini</p>
            <p className='text-xs text-cyan-50'>Áo Phông</p>
            <p className='text-xs text-cyan-50'>Son Peripera</p>
            <p className='text-xs text-cyan-50'>Dao gam</p>
          </div>
        </div>

        <div className='cart'>
          <Link to='/cart'>
            <FaShoppingCart className='text-gray-50 w-[30px] h-[30px]' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
