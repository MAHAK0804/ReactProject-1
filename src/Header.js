import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import image from './video.jpg';
export default function Header() {
  return (
    <>
    <div className='home'>
    <br /><br />
      <ul className='xyz'>
        <li>
          <Link to="/" id='nav'> <h2>Passport</h2></Link>
        </li>
        <li>
          <Link to="/" id='nav'> Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link></li>

        <li>  <Link to="/service">Service</Link></li>
        <li>  <Link to="/contact">Contact</Link></li>

      </ul>
      <br /><br /><br /><br />
      <div className='content'>
        <h1>
        It is Better <br />to Travel Well <br />Than to Arrive
        </h1>
        </div>
       
        <div className='video'>
          
         <a href='#'><img src={image}  className='img'/></a>
         {/* <h4> Watch Video</h4> */}
        </div>
        </div>
    </>
  )
}
