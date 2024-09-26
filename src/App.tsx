import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import LoginPage from './pages/Login'
import HomePage from './pages/Home'
import UserPage from './pages/User'

import './App.scss'

const router = createBrowserRouter([
  { path: '/', Component: LoginPage },
  { path: '/login', Component: LoginPage },
  { path: '/home', Component: HomePage },
  { path: '/user/create', Component: UserPage },
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}