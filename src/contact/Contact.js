import React from 'react';
import logo from '../images/logo.svg';
import './contact.css';

export default function Contact() {
  return (
     <>
       <div className='contactimagelogo'><img src={logo} alt="logo"/></div>
       <h1 className='contactheadingcolor'>webpack + Contact Page</h1>
       <h2 className='contactsubheadingcolor'>This is a Contact page with seprate css webpack sub heading box</h2>
     </>
  )
}
