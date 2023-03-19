import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@fontsource/public-sans';
import { CssBaseline, CssVarsProvider } from '@mui/joy';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Index from './pages/Index';
import Student from './pages/Student';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: 'students',
        element: <Student />,
        loader: async () => (await axios.get('/students')).data,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <CssVarsProvider>
    <CssBaseline />
    <RouterProvider router={router} />
  </CssVarsProvider>
)
