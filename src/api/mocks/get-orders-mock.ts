import { http, HttpResponse } from 'msw'

import type { GetOrdersResponse } from '../get-orders'

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']
const statuses: OrderStatus[] = [
  'canceled',
  'delivered',
  'delivering',
  'pending',
  'processing',
]

export const ordersMock: Orders = Array.from({ length: 60 }).map((_, index) => {
  return {
    orderId: `order-${index + 1}`,
    customerName: `customer-${index + 1}`,
    createdAt: new Date().toISOString(),
    total: 2400,
    status: statuses[index % 5],
  }
})

export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request }) => {
    const { searchParams } = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
      ? Number(searchParams.get('pageIndex'))
      : 0

    const orderId = searchParams.get('orderId')
    const customerName = searchParams.get('customerName')
    const status = searchParams.get('status')

    let filteredOrders = ordersMock

    if (customerName) {
      filteredOrders = filteredOrders.filter((order) =>
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filteredOrders = filteredOrders.filter((order) =>
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filteredOrders = filteredOrders.filter((order) => order.status === status)
    }

    const paginatedOrders = filteredOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginatedOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filteredOrders.length,
      },
    })
  },
)
