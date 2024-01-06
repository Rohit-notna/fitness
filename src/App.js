import React from 'react'
import Navbar from './MainBody/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './MainBody/Home'
import Facilities from '../src/Components1/Facilities'
import Slider from './MainBody/Slider'
import Footer from './MainBody/Footer'
import Aboutus from './Components1/Aboutus'
import Gallery from './Components1/Gallery'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Facilities" element={<Facilities/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
        <Route path="/Gallery" element={<Gallery/>}/>
      </Routes>
      <Footer/>
      
      </BrowserRouter>
     
    </div>
  )
}
