import { http, HttpResponse } from 'msw'

import { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenueResponse
>('/metrics/month-revenue', () => {
  return HttpResponse.json({
    revenue: 21000,
    diffFromLastMonthInPercentage: 8,
  })
})
