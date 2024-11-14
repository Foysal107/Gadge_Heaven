import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainTwo from './Components/MainTwo/MainTwo';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import HomePage from './Components/HomePage/HomePage';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';


import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';
import Banner from './Components/Banner/Banner';
import ProductDetails from './ProductDetails/ProductDetails';

// const[selectedProducts,setSelectedProducts] = useState([]);









const router = createBrowserRouter([
  {
    path: "/",
    element: <MainTwo ></MainTwo>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',

        element: <HomePage ></HomePage>
      },
      {
        path: 'Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'Dashboard',

        element: <Dashboard></Dashboard>,
      },
      {
        path: 'Cart',
        element: <Cart></Cart>,
        loader:()=>fetch('/ProductsData.json')
      },
      {
        path: 'Wishlist',
        element: <Wishlist></Wishlist>,
        loader:()=>fetch('/ProductsData.json')

      },
    


{
        path: 'Banner',

        element: <Banner></Banner>
      },

      // {
      //   path:'ViewDetails/product_id',
      //   element:<ViewDetails></ViewDetails>
      // }
{
  path:'Products/:Product_Id',
  element:<ProductDetails></ProductDetails>,
  loader:()=>fetch(`/ProductsData.json `)
}
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
