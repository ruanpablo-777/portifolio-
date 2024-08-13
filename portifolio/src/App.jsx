import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar'
import Home from  "../components/Home"
import About from '../components/about'
import Contact from '../components/contact'
import './App.css'

function App() {

  return (
   <div >
    <video autoPlay loop muted> 
      <source src={'/water.mp4'} type="video/mp4" />
      </video>
      <div className="content">
        
        <Router>
         <Navbar>

         </Navbar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
        </Router>
      </div>
   </div>
  )
}

export default App
