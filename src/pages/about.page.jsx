import { useState } from 'react'
import { Navigate } from 'react-router-dom'

const About = () => {
  // Navigate component (react-router-dom)
  // const [user, setUser] = useState('mario')
  // if (!user) return <Navigate to='/' replace={true} />

  return (
    <section className='about'>
      <h2>About Us</h2>
      <p>
        Lorem ipsum dolor sit amet, incididunt nostrud esse occaecat nostrud
        minim mollit laboris anim esse elit do dolore esse nostrud est non
        occaecat enim. Aute proident exercitation exercitation ullamco
        consectetur cupidatat nulla cupidatat nostrud amet et. Nostrud mollit
        sit consectetur adipisicing fugiat anim elit tempor adipisicing duis
        nulla nostrud laboris eiusmod voluptate. Lorem labore tempor duis elit.
        Enim duis cupidatat adipisicing officia et eiusmod. Dolor mollit ipsum
        incididunt labore magna nisi laboris minim dolore culpa do quis quis
        consectetur esse. Duis eiusmod consequat excepteur mollit ex sunt duis
        eiusmod consequat minim incididunt in ad amet pariatur dolore non
        commodo sit. Amet ea voluptate commodo do occaecat laboris voluptate
        elit fugiat nisi fugiat nulla sit aliqua amet. Dolore nostrud dolor ad
        qui proident pariatur nostrud reprehenderit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, incididunt nostrud esse occaecat nostrud
        minim mollit laboris anim esse elit do dolore esse nostrud est non
        occaecat enim. Aute proident exercitation exercitation ullamco
        consectetur cupidatat nulla cupidatat nostrud amet et. Nostrud mollit
        sit consectetur adipisicing fugiat anim elit tempor adipisicing duis
        nulla nostrud laboris eiusmod voluptate. Lorem labore tempor duis elit.
        Enim duis cupidatat adipisicing officia et eiusmod. Dolor mollit ipsum
        incididunt labore magna nisi laboris minim dolore culpa do quis quis
        consectetur esse. Duis eiusmod consequat excepteur mollit ex sunt duis
        eiusmod consequat minim incididunt in ad amet pariatur dolore non
        commodo sit. Amet ea voluptate commodo do occaecat laboris voluptate
        elit fugiat nisi fugiat nulla sit aliqua amet. Dolore nostrud dolor ad
        qui proident pariatur nostrud reprehenderit.
      </p>

      {/* <button onClick={() => setUser(null)}>Logout</button> */}
    </section>
  )
}

export default About
