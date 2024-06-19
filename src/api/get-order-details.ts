import { api } from '../lib/axios'

export interface GetOrderDetailsResponse {
  status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
  id: string
  createdAt: Date
  totalInCents: number
  customer: {
    email: string
    phone: string | null
    name: string
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export interface GetOrderDetailsParams {
  orderId: string
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
