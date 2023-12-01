const Contact = () => {
  return (
    <section className='contact'>
      <h3>Contact Us</h3>

      <form>
        <label htmlFor='email'>
          <span>Your email: </span>
          <input type='email' name='email' id='email' />
        </label>
        <label htmlFor='message'>
          <span>Your message: </span>
          <textarea name='message' id='message' required></textarea>
        </label>
        <button>Submit</button>
      </form>
    </section>
  )
}

export default Contact
