import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
}
