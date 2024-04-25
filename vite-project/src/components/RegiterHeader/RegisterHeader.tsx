import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo/header_logo.png'

const RegisterHeader = () => {
  return (
    <header className='py-5'>
      <div className='max-w-5xl mx-auto px-4 h-full flex items-center'>
        <Link to='/'>
          <img className='h-8 lg:h-11 w-[200px]' src={Logo} alt='' />
        </Link>
        <div className='ml-5 lg:text-2xl'>Đăng ký</div>
      </div>
    </header>
  )
}

export default RegisterHeader
