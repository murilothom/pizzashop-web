import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'
import { ordersMock } from './get-orders-mock'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  const order = ordersMock.find((order) => order.orderId === params.orderId)!

  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: order.customerName,
      email: 'example@email.com',
      phone: null,
    },
    createdAt: new Date(order.createdAt),
    status: order.status,
    totalInCents: order.total,
    orderItems: [
      {
        id: 'order-item-1',
        priceInCents: order.total / 3,
        product: { name: 'Pizza 1' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInCents: order.total / 3,
        product: { name: 'Pizza 2' },
        quantity: 2,
      },
    ],
  })
})
