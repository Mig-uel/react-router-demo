import React from 'react'
import ReactDOM from 'react-dom/client'

// React Router
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// Components
import App from './App.jsx'
import Home from './pages/Home.component.jsx'
import About from './pages/about.component.jsx'

// first parent route is the layout route, the use outlet in whatever component you used
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
