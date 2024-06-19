import { api } from '../lib/axios'

export interface GetProfileResponse {
  email: string
  phone: string | null
  name: string
  id: string
  role: 'manager' | 'customer'
  createdAt: Date
  updatedAt: Date
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
