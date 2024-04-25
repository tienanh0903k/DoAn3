import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
type Rules = {
  [key in 'email' | 'password' | 'confirmPassword']?: RegisterOptions
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Vui lòng nhập email'
    },
    pattern: {
      value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: 'Email không đúng định dạng'
    },
    maxLength: {
      value: 160,
      message: 'Email quá dài'
    },
    minLength: {
      value: 6,
      message: 'Email quá ngắn'
    }
  },

  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Mật khẩu quá ngắn'
    }
  },

  confirmPassword: {
    required: {
      value: true,
      message: 'Vui lòng nhập xác nhận mật khẩu'
    },
    minLength: {
      value: 6,
      message: 'Xác nhận mật khẩu quá ngắn'
    },
    validate:
      typeof getValues === 'function' ? (value) => value === getValues('password') || 'Nhap sai mat khau' : undefined
  }
})
