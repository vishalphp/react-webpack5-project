import React from 'react'
import logo from '../images/logo.svg';
import './home.css';

export default function Home() {
  return (
     <>
       <div className='homeimagelogo'><img src={logo} alt="logo"/></div>
       <h1 className='homeheadingcolor'>webpack + Home Page</h1>
       <h2 className='homesubheadingcolor'>This is a home page with seprate css webpack sub heading box</h2>
     </>
  )
}
