import { useLoaderData, useParams } from 'react-router-dom'

const CareerDetails = () => {
  const career = useLoaderData()

  return (
    <div className='career-details'>
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>

      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          libero magni consectetur voluptatum sed! Ipsa excepturi sint
          laudantium veritatis a, explicabo cumque blanditiis, totam iure
          molestias ut error. Atque, voluptas.
        </p>
      </div>
    </div>
  )
}

export default CareerDetails
