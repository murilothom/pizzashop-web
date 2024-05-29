import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export const App = () => {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
      <HelmetProvider>
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster richColors position="top-right" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
