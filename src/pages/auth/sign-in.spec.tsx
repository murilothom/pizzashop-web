import { QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import { HelmetProvider } from 'react-helmet-async'
import { MemoryRouter } from 'react-router-dom'

import { queryClient } from '../../lib/react-query'
import { SignIn } from './sign-in'

describe('SignIn', () => {
  it('should set default email input if email is present on search params', () => {
    const wrapper = render(<SignIn />, {
      wrapper: ({ children }) => {
        return (
          <MemoryRouter initialEntries={['/sign-in?email=example@email.com']}>
            <HelmetProvider>
              <QueryClientProvider client={queryClient}>
                {children}
              </QueryClientProvider>
            </HelmetProvider>
          </MemoryRouter>
        )
      },
    })

    const emailInput = wrapper.getByLabelText('E-mail') as HTMLInputElement

    expect(emailInput.value).toEqual('example@email.com')
  })
})
