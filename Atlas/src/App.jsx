
import './App.css'

import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom" ;
import { Home } from './Pages/Home';
import { Country } from './Pages/Country';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Applayout } from './components/Layout/Applayout';
import { ErrorPAge } from './Pages/ERROR/ErrorPAge';
import { CountryDetails } from './components/Layout/CountryDetails';
export const App = () => {

  const router = createBrowserRouter([
    {
      path : "/",
      element : <Applayout />,
      errorElement : <ErrorPAge /> ,
      children : [

        {
          path:"/",
          element : <Home />
        },
        {
          path:"/country",
          element : <Country />
        },
        {
          path:"/country/:id",
          element : <CountryDetails />
        },
        {
          path:"/About",
          element : <About />
        },
        {
          path:"/contact",
          element : <Contact/>
        }
      ]
    },
  ])



  return (
    <div className='bg-black'>
    <RouterProvider router={router} > </RouterProvider>
    </div>
  )
}

