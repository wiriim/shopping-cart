import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import HomePage from './components/HomePage.jsx'
import CartPage from './components/CartPage.jsx'
import ShopPage from './components/ShopPage.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'Shop', element: <ShopPage />},
      {path: 'Cart', element: <CartPage />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
