import React, { useState } from 'react';
import { Routes, Route, } from 'react-router-dom'
import Home from './pages/home/home'
import Login from './pages/login/login';
import SignUp from './pages/signup/signup';
import Layanan from './pages/layanan/layanan';
import Layanann from './pages/layanan/layanann';
import Webminar from './pages/webminar/webminar'
import Pelatihan from './pages/pelatihan/pelatihan'
import Konsultasi from './pages/konsultasi/konsultasi'
import Sejarah from './pages/sejarah/sejarah'
import Tentangkami from './pages/tentangkami/tentangkami'
import Linimasa from './pages/linimasa/linimasa'
import Pendiri from './pages/pendiri/pendiri'
import Carajoin from './pages/carajoin/carajoin'
import Blog from './pages/blog/blog'
import About from './pages/about/about';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/layanan' element={<Layanan />} />
        <Route path='layanan/layanan' element={<Layanann />} />
        <Route path='/layanan/webminar' element={<Webminar />} />
        <Route path='/layanan/pelatihan' element={<Pelatihan />} />
        <Route path='/layanan/konsultasi' element={<Konsultasi />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/sejarah' element={<Sejarah />} />
        <Route path='/about/tentang' element={<Tentangkami />} />
        <Route path='/about/linimasa' element={<Linimasa />} />
        <Route path='/about/pendiri' element={<Pendiri />} />
        <Route path='/about/join' element={<Carajoin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;