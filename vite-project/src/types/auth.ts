/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LoginBody {
  email: string
  password: string
}

export interface ResponseValue {
  token: string
  user: any
}
