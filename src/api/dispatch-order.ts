import { api } from '../lib/axios'

interface DispatchOrderDetailsParams {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispatchOrderDetailsParams) {
  await api.patch(`/orders/${orderId}/dispatch`)
}
