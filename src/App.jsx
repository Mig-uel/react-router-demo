import { Outlet } from 'react-router-dom'

import Nav from './components/nav.component'
import Breadcrumbs from './components/breadcrumbs.component'
import './App.css'

function App() {
  return (
    <>
      <Nav />
      <Breadcrumbs />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
