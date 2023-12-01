import { Outlet, NavLink } from 'react-router-dom'

const Help = () => {
  return (
    <section className='help-layout'>
      <h1>Help</h1>
      <nav>
        <NavLink to='faq'>F.A.Q.</NavLink>
        <NavLink to='contact'>Contact Us</NavLink>
      </nav>

      <Outlet />
    </section>
  )
}

export default Help
