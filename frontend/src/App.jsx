
import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from'./components/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import About from './components/About';
import Sign from './components/sign'
import Home from './components/Home'

function App() {
  

  return (
    <>
  
    <Routes>
    <Route path='/' element={<Navbar/>}></Route>
    <Route path='/About'element={<About/>}/>
    {/* <Route path='/Sponsor' element={<Sponsor />} /> */}
    <Route path='/Register'element={<Register/>}/>
    <Route path='/login'element={<Sign/>}/>
    <Route path='/Home'element={<Home/>}/>
    </Routes>
     

    </>
  )
}

export default App

