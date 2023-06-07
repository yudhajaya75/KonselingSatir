import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Layanan from './pages/layanan/layanan';
import Webinar from './pages/webminar/webinar'
import Webinar2 from './pages/webminar/webinar2'
import Webinar3 from './pages/webminar/webinar3'
import Pelatihan from './pages/pelatihan/pelatihan'
import Konsultasi from './pages/konsultasi/konsultasi'
import Blog from './pages/blog/blog'
import Blog2 from './pages/blog/blog2'
import About from './pages/about/about';
import Payment from './pages/payment/payment';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        <Route path='/layanan' element={<Layanan />} />
        <Route path='/webinar' element={<Webinar />} />
        <Route path='/webinar2' element={<Webinar2 />} />
        <Route path='/webinar3' element={<Webinar3 />} />
        <Route path='/pelatihan' element={<Pelatihan />} />
        <Route path='/konsultasi' element={<Konsultasi />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog2' element={<Blog2 />} />
        <Route path='/about' element={<About />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;