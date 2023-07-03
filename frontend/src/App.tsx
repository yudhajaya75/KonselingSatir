import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import axios from "axios";

import Home from './pages/home/home';
import Home2 from './pages/home/home2';
import Login from './pages/login/login';
import Daftar from './pages/signup/signup';
import Layanan from './pages/layanan/layanan';
import Webinar from './pages/webminar/webinar';
import Webinar2 from './pages/webminar/webinar2';
import Webinar3 from './pages/webminar/webinar3';
import Pelatihan from './pages/pelatihan/pelatihan';
import Pelatihan2 from './pages/pelatihan/pelatihan2';
import Konsultasi from './pages/konsultasi/konsultasi';
import Blog from './pages/blog/blog';
import Blog2 from './pages/blog/blog2';
import Blog3 from './pages/blog/blog3';
import About from './pages/about/about';
import Payment from './pages/payment/payment';

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/user', {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });

        setEmail(response.data.email);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Home email={email} />} /> */}
        <Route path='/' element={<Home email={email} />} />
        <Route path='/login' Component={() => <Login setEmail={setEmail} />} />
        <Route path='/signup' element={<Daftar />} />
        <Route path='/home' element={<Home email={email} />} />
        <Route path='/home2' element={<Home2 email={email} />} />
        <Route path='/layanan' element={<Layanan email={email} />} />
        <Route path='/webinar' element={<Webinar email={email} />} />
        <Route path='/webinar2' element={<Webinar2 email={email} />} />
        <Route path='/webinar3' element={<Webinar3 email={email} />} />
        <Route path='/pelatihan' element={<Pelatihan email={email} />} />
        <Route path='/pelatihan2' element={<Pelatihan2 email={email} />} />
        <Route path='/konsultasi' element={<Konsultasi email={email} />} />
        <Route path='/blog' element={<Blog email={email} />} />
        <Route path='/blog2' element={<Blog2 email={email} />} />
        <Route path='/blog3' element={<Blog3 email={email} />} />
        <Route path='/about' element={<About email={email} />} />
        <Route path='/payment' element={<Payment email={email} />} />
      </Routes>
    </>
  );
}

export default App;
