import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Serv from './Serv';


export default function Nav() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path='/about' element={<About />}>  </Route>
   <Route path='/' element={<Home/>}>  </Route>
   <Route path='/contact' element={<Contact />}>  </Route>
   <Route path='/service' element={<Serv />}>  </Route>
   


{/* <Route path='/Contact' element={<div>Contact</div>}></Route> */}
</Routes>
   </BrowserRouter>
  )
}
