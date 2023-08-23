

import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import './About.css';
import image from './pic1.jpg';
import img from './pic2.jpg';


export default function About() {
  return (
    <>
      {/* <Header /> */}
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
          <center> <h1>
            About Us
          </h1>

            <p>Far far away, behind the word mountains, far from the countries Vokalia <br />and Consonantia, there live the blind texts.</p></center>
        </div>
        <br /><br /><br /><br /><br /><br /><br />
        <br /><br />
        <div className='loc'>
          <p>Vernazza, Italy — $500.00 / night</p>
        </div>
        <br />
      </div>
      <div className='about'>
        <div className='col1'>
        <h3>About
        <h1>Explore All Corners of <br />The World With Us</h1><br />
        <p>Far far away, behind the word mountains, far from the countries Vokalia and<br />
         Consonantia, there live the blind texts. Separated they live in Bookmarksgrove<br />
          right at the coast of the Semantics, a large language ocean.</p><br />
          <p>A small river named Duden flows by their place and supplies it with the<br />
           necessary regelialia. It is a paradisematic country, in which roasted parts of<br /> sentences fly into your mouth.</p>
           <br />
           <button>Read More</button></h3>
           <img src={image} id='img1' />
        </div><br />
       <br />
        <div className='col2'>
        <img src={img} id='img2' />

        </div>
      </div>
    </>

  )
}
