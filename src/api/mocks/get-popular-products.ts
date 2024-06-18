import { http, HttpResponse } from 'msw'

import { GetPopularProductsResponse } from '../get-popular-products'

export const GetPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { amount: 5, product: 'Pizza 01' },
    { amount: 3, product: 'Pizza 02' },
    { amount: 10, product: 'Pizza 03' },
    { amount: 11, product: 'Pizza 04' },
    { amount: 6, product: 'Pizza 05' },
  ])
})
