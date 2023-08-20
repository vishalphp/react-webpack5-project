import React from 'react'
import logo from '../images/logo.svg';
import './faq.css';

export default function Faq() {
  return (
     <>
       <div className='faqimagelogo'><img src={logo} alt="logo"/></div>
       <h1 className='faqheadingcolor'>webpack + Faq Page</h1>
       <h2 className='faqsubheadingcolor'>This is a Faq page with seprate css webpack sub heading box</h2>
     </>
  )
}
