import { api } from '../lib/axios'

export type GetDailyRevenueInPeriodResponse = {
  date: string
  revenue: number
}[]

export interface GetDailyRevenueInPeriodQuery {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: GetDailyRevenueInPeriodQuery) {
  const response = await api.get<GetDailyRevenueInPeriodResponse>(
    '/metrics/daily-revenue-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )

  return response.data
}
