import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Start from './Start'
import CreateUser from './CreateUser'
import Balance from './Balance'
import UserHome from './UserHome'

const router = createBrowserRouter([
  {
    element: <App />,
    path: '/',
    children: [
      {
        element: <Start />,
        path: '/'
      },
      {
        element: <CreateUser />,
        path: '/register'
      },
      {
        element: <Balance />,
        path: '/balance'
      },
      {
        element: <UserHome />,
        path: '/home'
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
