
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
import Welcome from './components/Welcome'
import Program from './components/Program'
import Resource from './components/Resource'
import Food from './components/food'
import Dress from './components/Dress'
import Medicine from './components/Medicine'
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
    <Route path='/Welcome' element={<Welcome/>}/>
    <Route path='/Program' element={<Program/>}/>
    <Route path='/Resource'element={<Resource/>}></Route>
    <Route path='/Food' element={<Food/>}/>
    <Route path='/Dress' element={<Dress/>}/>
    <Route path='/Medicine'element={<Medicine/>}/>
    </Routes>
     

    </>
  )
}

export default App

