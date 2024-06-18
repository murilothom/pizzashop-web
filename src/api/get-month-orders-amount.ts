import { api } from '../lib/axios'

export interface GetMonthOrdersAmountResponse {
  amount: number
  diffFromLastMonthInPercentage: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<GetMonthOrdersAmountResponse>(
    '/metrics/month-orders-amount',
  )

  return response.data
}
