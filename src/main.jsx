import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProvider from './provider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-1 md:mx-auto lg:mx-auto'>
    <AuthProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </AuthProvider>
  </div>
)
