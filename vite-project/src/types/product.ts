export interface ICartItem {
  id: number
  thumbnail: string
  title: string
  price?: number | null
  discount: number
  onSale: boolean
}

export interface ICartType {
  id: number
  item: ICartItem | undefined
  quantity: number
}
