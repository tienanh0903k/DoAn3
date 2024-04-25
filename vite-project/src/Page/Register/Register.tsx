import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from 'src/utils/rules'

interface FormData {
  email: string
  password: string
  confirmPassword: string
}

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<FormData>()

  const rules = getRules(getValues)
  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  //console.log(errors)

  return (
    <div className='bg-orange my-2'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 '>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white  shadow-lg p-10' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng ký</div>
              <div className='username mt-8'>
                <input
                  className='p-3 w-full outline-none border border-gray-300'
                  type='text'
                  placeholder='Email/Số điện thoại/Tên đăng nhập'
                  {...register('email', rules.email)}
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.email?.message}</div>
              <div className='passwords mt-2'>
                <input
                  className='p-3 w-full outline-none border border-gray-300'
                  type='password'
                  placeholder='Mật khẩu...'
                  {...register('password', rules.password)}
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.password?.message}</div>
              <div className='passwords mt-2'>
                <input
                  className='p-3 w-full outline-none border border-gray-300'
                  type='password'
                  placeholder='Xác nhân mật khẩu...'
                  {...register('confirmPassword', {
                    ...rules.confirmPassword
                  })}
                />
              </div>
              <div className='mt-1 text-red-600 min-h-[1.25rem] text-sm'>{errors.confirmPassword?.message}</div>
              <div className='mt-3'>
                <button className='bg-orange w-full py-4 px-2 hover:bg-red-600 text-white'>Register</button>
              </div>

              <div className='mt-8'>
                <div className='flex justify-center gap-2'>
                  <span className='text-gray-400'>Ban da co tai khoan?</span>
                  <Link className='text-red-400' to='/login'>
                    Dang nhap
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
