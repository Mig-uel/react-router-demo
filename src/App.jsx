import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// pages
import Home from './pages/Home.component'
import About from './pages/about.component'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
