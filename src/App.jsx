import { Outlet, NavLink, Link } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <header>
        <nav>
          <Link to='/'>
            <h1>Jobarouter</h1>
          </Link>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='help'>Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
