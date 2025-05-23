import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Project from './components/pages/Project'

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path="/project/:projUrl" element={<Project />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App