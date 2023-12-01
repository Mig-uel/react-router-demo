import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <section>
      <h2>Oops...Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus,
        voluptates accusantium harum autem quis optio facere nisi voluptas
        neque, vero, veritatis sequi temporibus consequuntur. Tempora, atque?
        Quae repellat fuga esse?
      </p>

      <p>
        Go back to the <Link to='/'>Homepage</Link>.
      </p>
    </section>
  )
}

export default NotFound
