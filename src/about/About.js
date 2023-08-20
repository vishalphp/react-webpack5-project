import React from 'react'
import logo from '../images/logo.svg';
import './about.css';

export default function About() {
  return (
     <>
       <div className='aboutimagelogo'><img src={logo} alt="logo"/></div>
       <h1 className='aboutheadingcolor'>webpack + About Page</h1>
       <h2 className='aboutsubheadingcolor'>This is a about page with seprate css webpack sub heading box</h2>
     </>
  )
}
