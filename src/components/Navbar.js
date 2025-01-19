
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router';
export default function Navbar() {
  const [menuopen,setMenuopen]=useState(false);
const handlemenu=()=>{
  setMenuopen(true);
}
const handlemenuclose=()=>{
  setMenuopen(false);
}
  return (
    <>
    <div className="navbar">
     <Link to="/"><p>Care<span className="logo">Connect</span></p></Link> 
      <ul className="navli remove">
       <Link to="/"><li>Home</li></Link> 
       <a href ="#page2"> <li>About Us</li></a>
       <a href="#page2service"> <li>Services</li></a>
       <a href ="#page3"> <li>Testimonials</li></a>
      <a href="#contactus"><li>Contact Us</li></a>

      </ul>
      <button className="mainbtn">FindCare</button>
      <button className="mainbtn">Caregiver</button>
      <button className="menu"onClick={handlemenu}><MenuIcon/></button>
    </div>
    <div className={`${menuopen?'togglemenu':'menuclose'}`}>
    <ul>
    <Link to="/"><li>Home</li></Link>
    <a href ="#page2"><li>About Us</li></a>
    <a href="#page2service"><li>Services</li></a>
      <a href="#page3"><li>Testimonials</li></a> 
      <a href="#contactus"><li>Contact Us</li></a>
      </ul>
      <button className="closemenu"onClick={handlemenuclose}><CloseIcon/></button>
    </div>
    </>
  )
}
