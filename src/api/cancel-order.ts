import { api } from '../lib/axios'

interface CancelOrderDetailsParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderDetailsParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
