import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomNavbar from './component/navbar';
import Header from './component/navbar';
import Main from './component/mainpage'
import Contact from './component/contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return( 
    <BrowserRouter>
<div>
 <Header/>
 <Main/>
  <Contact/>
  {/* <Routes>
        <Route path="/" element={<Main />}>
         <Route path="contact" element={<Contact />} />
         
          </Route>
      </Routes> */}
</div>
</BrowserRouter>

);
}

export default App;
