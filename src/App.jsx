// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Heading from './components/Header'
import Home from './components/Homepage';
import About from './components/About';
import Academics from './components/Academics';
import AdmissionsPage from './components/Admissions';
import FacultyPage from './components/Faculty';
import LifeAtSpringdalePage from './components/Student';
import GalleryPage from './components/Gallery';
import ContactPage from './components/Contact';
function App() {
  

  return (
    <>
      <Router>
        <Heading/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/academics' element={<Academics/>}/>
          <Route path='/admissions' element={<AdmissionsPage/>}/>
          <Route path='/faculty' element={<FacultyPage/>}/>
          <Route path='/students' element={<LifeAtSpringdalePage/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
