import { Form, useActionData } from 'react-router-dom'

const Contact = () => {
  const data = useActionData()

  return (
    <section className='contact'>
      <h3>Contact Us</h3>

      <Form method='post' action='/help/contact'>
        <label htmlFor='email'>
          <span>Your email: </span>
          <input type='email' name='email' id='email' />
        </label>
        <label htmlFor='message'>
          <span>Your message: </span>
          <textarea name='message' id='message' required></textarea>
        </label>
        <button>Submit</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </section>
  )
}

export default Contact
