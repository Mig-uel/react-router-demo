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
import Home from './pages/home.page.jsx'
import About from './pages/about.page.jsx'
import Help from './pages/help.page.jsx'
import FAQ from './pages/help/faq.page.jsx'
import Contact from './pages/help/contact.page.jsx'
import NotFound from './pages/not-found.page.jsx'
import CareersLayout from './layouts/careers-layout.page.jsx'
import Careers from './pages/careers/careers.page.jsx'

// first parent route is the layout route, the use outlet in whatever component you used
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<Help />}>
        <Route path='faq' element={<FAQ />} />
        <Route path='contact' element={<Contact />} />
      </Route>

      <Route path='careers' element={<CareersLayout />}>
        <Route
          index
          element={<Careers />}
          loader={async () => {
            const res = await fetch('http://localhost:3001/careers')
            return await res.json()
          }}
        />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)
// nested routes => will render help layout and the index/default element which is the FAQ component => /help/faq or /help/contact

// added inline loader function but can be an exported function as well

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
