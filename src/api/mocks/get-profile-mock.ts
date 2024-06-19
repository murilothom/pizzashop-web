import { http, HttpResponse } from 'msw'

import { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'custom-user-id',
      name: 'John doe',
      email: 'example@email.com',
      phone: null,
      role: 'manager',
      createdAt: new Date('2024-01-01'),
      updatedAt: new Date('2024-01-05'),
    })
  },
)
