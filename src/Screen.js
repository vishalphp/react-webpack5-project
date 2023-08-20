import React, {Suspense, lazy} from 'react';
import './css/App.css';
import { Routes, Route, Link } from 'react-router-dom';

const Home = lazy(()=> import('./home/Home') );
const About = lazy(()=> import('./about/About'));
const Faq = lazy(()=>import('./faq/Faq'));
const Contact = lazy(()=> import('./faq/Faq'));

//import Home from './home/Home';
//import About from './about/About';
//import Faq from './faq/Faq';
//import Contact from './contact/Contact';

export default function Screen() {
  return (
     <div className="App">
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/faq">Faq</Link>
            <Link to="/contact">Contact</Link>
        </div>
       <Routes>
         <Route path='/' element={  <Suspense fallback="wait, Component loading ..."><Home /></Suspense>} />
         <Route path='/about' element={  <Suspense fallback="wait, Component loading ..."><About /></Suspense>} />
         <Route path='/faq' element={  <Suspense fallback="wait, Component loading ..."><Faq /></Suspense>} />
         <Route path='/contact' element={  <Suspense fallback="wait, Component loading ..."><Contact /></Suspense>} />
       </Routes>
    </div>
  )
}
