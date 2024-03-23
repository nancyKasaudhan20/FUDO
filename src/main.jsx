import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About.jsx'
import Body from './components/Body.jsx'
import Contact from './components/Contact.jsx'
import Cart from './components/Cart.jsx'
import Grocery from './components/Grocery.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Grocery/>,
      },
      {
        path:"/cart",
        element:<Cart/>,
      },
     
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={router}/>
  </React.StrictMode>,
)
