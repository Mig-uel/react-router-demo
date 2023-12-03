import { NavLink, Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to='/'>
          <h1>Jobarouter</h1>
        </Link>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <NavLink to='careers'>Careers</NavLink>
        <NavLink to='help'>Help</NavLink>
      </nav>
    </header>
  )
}

export default Nav
