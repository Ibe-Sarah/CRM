import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomNavbar from './component/navbar';
import Header from './component/navbar';
import Main from './component/mainpage'
import Contact from './component/contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from './component/skills';
import Footer from './component/footer';


function App() {
  return( 
    <BrowserRouter>
<div>
 <Header/>
 <Main/>
  {/* <Contact/> */}
  {/* <Skills/> */}
  <Routes>
        <Route >
         <Route path="/contact" element={<Contact />} />
         
          </Route>
      </Routes>
</div>
<Footer/>
</BrowserRouter>

);
}

export default App;
