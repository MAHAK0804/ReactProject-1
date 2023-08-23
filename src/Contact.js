import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
import './Contact.css';
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
        <br /><br /><br /><br /><br /><br />
        <div className='content'>
          <center> <h1>
          Contact Us
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
        <h3>Contact
        <h1>Get In Touch</h1>
        <br /><br />
       <ul>
        <li>
          <h5>Location:</h5>
          <p>43 Raymouth Rd. Baltemoer, London 3910</p>
        </li><br />
        <li>
          <h5>Open Hours:</h5>
          <p>Sunday-Friday:<br />
           11:00 AM - 2300 PM</p>
        </li><br />
        <li>
          <h5>Email:</h5>
          <p>info@Colorlib</p>
        </li><br />
        <li>
          <h5>Call:</h5>
          <p>+1 1234 55488 55</p>
        </li><br />
        </ul></h3>
          <div className='form'>
            <form action=''>
              <div className='row'>
                <input type='text' placeholder='Your name'/>
                <input type='email' placeholder='Email'/>

              </div>
              <br />
              <textarea rows={2} cols={80} placeholder=' Subject' />
              <br /> <br />
             <textarea rows={10} cols={80} placeholder='Message' />
             <br />
             <br /> 
             <button>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}
