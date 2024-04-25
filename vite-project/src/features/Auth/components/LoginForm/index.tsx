import { unwrapResult } from '@reduxjs/toolkit'
import { useSnackbar } from 'notistack'
import { SubmitHandler, useForm } from 'react-hook-form'
import { fetchLogin } from '../../../../redux/userSlice'
import { LoginBody } from '../../../../types/auth'
import { useAppDispatch } from 'src/hooks/useDispatch'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginBody>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const dispatch = useAppDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const onSubmit: SubmitHandler<LoginBody> = async (data, e) => {
    e?.preventDefault()
    try {
      const payload: LoginBody = {
        email: data.email,
        password: data.password
      }
      const resultAction = await dispatch(fetchLogin(payload))
      const user = unwrapResult(resultAction)
      if (user) {
        enqueueSnackbar('Đăng nhập thành công', {
          autoHideDuration: 1000,
          variant: 'success',
          anchorOrigin: { vertical: 'top', horizontal: 'right' }
        })
        navigate('/')
      }
    } catch (error) {
      enqueueSnackbar('Đăng nhập thất bại', {
        variant: 'error',
        autoHideDuration: 1000,
        anchorOrigin: { vertical: 'top', horizontal: 'right' }
      })
      console.error('Login failed:', error)
    }
  }

  return (
    <div className='bg-sky-600'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-5 lg:py-32 '>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='bg-white shadow-lg p-10 m-8' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng nhập</div>
              <div className='username mt-8'>
                <input
                  {...register('email', { required: true })}
                  className='p-3 w-full outline-none border border-gray-300'
                  type='text'
                  name='email'
                  placeholder='Email/Số điện thoại/Tên đăng nhập'
                />
                {/* {errors.username && <div className='mt-1 text-red-600 min-h-1 text-sm'>Email không hợp lệ</div>} */}
              </div>
              <div className='passwords mt-4'>
                <input
                  {...register('password', { required: true })}
                  className='p-3 w-full outline-none border border-gray-300'
                  type='password'
                  name='password'
                  placeholder='Mật khẩu...'
                />
                {errors.password && <div className='mt-1 text-red-600 min-h-1 text-sm'>Mật khẩu không hợp lệ</div>}
              </div>
              <div className='mt-3'>
                <button type='submit' className='bg-sky-600 w-full py-4 px-2 hover:bg-sky-400 text-white'>
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
