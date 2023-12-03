import { useLocation, Link } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()

  let currentLink = ''

  const crumbs = location.pathname
    .split('/')
    .filter((c) => c !== '')
    .map((c) => {
      currentLink += `/${c}`

      return (
        <div key={c} className='crumb'>
          <Link to={currentLink}>{c}</Link>
        </div>
      )
    })

  return <div className='breadcrumbs'>{crumbs}</div>
}

export default Breadcrumbs
