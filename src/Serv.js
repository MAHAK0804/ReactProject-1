import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'
import image from './pic3.png'

import './Serv.css';
export default function Serv() {
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
        Services
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
    <div className='card'>
        <center><h1>Our Services Includes...</h1></center>
        <br /><br /><br />
        <div className='colum1'>
        <center> <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div> </center>
            <center>   <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div> </center>
            <center>  <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div> </center>
            <center> <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div> </center>
        </div>
        <br /><br /><br /><br />
        <div className='colum1'>
       <center> <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div> </center>
            <center>  <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div>  </center>
            <center>     <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div> </center>
            <center>      <div className='cot'>
            <img src={image} id='img' />
            <br />
            <h2>Reduce costs to a minimum</h2> <br /> 
            <p>Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large  <br />language ocean.</p>
            </div> </center>
        </div>
    </div>
    </>
  )
}
