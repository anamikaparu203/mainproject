
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
import Stationary from './components/Stationary'
function App() {
 return (
  
<>   
<Navbar/>


<div className="App">
  
  
    <Routes>
    {/* <Route path='/' element={<Navbar/>}></Route> */}
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
    <Route path='/Stationary'element={<Stationary/>}/>
    <Route path='/Sign'element={<Sign/>}/>
    </Routes>
     </div>

    </>
  )
}

export default App

// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import Navbar from './components/Navbar';
// import { Route, Routes, useLocation } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Register from './components/Register';
// import About from './components/About';
// import Sign from './components/Sign';
// import Home from './components/Home';
// import Welcome from './components/Welcome';
// import Program from './components/Program';
// import Resource from './components/Resource';
// import Food from './components/Food';
// import Dress from './components/Dress';
// import Medicine from './components/Medicine';
// import Stationary from './components/Stationary';

// function App() {
//   return (
//     <>
//       <Navbar /> {/* Fixed navbar at the top */}
      
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<Home />} /> {/* Set Home as the default route */}
//           <Route path="/about" element={<About />} />
//           <Route path="/register" element={<Register />} />
//           {/* <Route path="/login" element={<Sign />} /> */}
//           <Route path="/welcome" element={<Welcome />} />
//           <Route path="/program" element={<Program />} />
//           <Route path="/resource" element={<Resource />} />
//           <Route path="/food" element={<Food />} />
//           <Route path="/dress" element={<Dress />} />
//           <Route path="/medicine" element={<Medicine />} />
//           <Route path="/stationary" element={<Stationary />} />
//           <Route path="/Sign" element={<Sign/>}/>
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;
