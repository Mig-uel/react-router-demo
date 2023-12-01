import { useLoaderData, Link } from 'react-router-dom'

const Careers = () => {
  const careers = useLoaderData() // returns data fetched from loader function
  return (
    <div className='careers'>
      {careers.map((career) => (
        <Link to={career.id.toString()} key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

export default Careers
