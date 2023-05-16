import React, { useState } from 'react';
import list from "./listabout.json"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const [isOpen, setIsOpen] = useState(false)


    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='navbar'>
            <h1 className='logo'>
                <Link to="./home">
                    <img src="http://localhost:3000/images/Logo.webp" alt="" />
                </Link>
            </h1>
            <ul className='listnav'>
                <Link to="/home"><li className='teksnav'>Home</li></Link>
                <div>
                    <Link to='/layanan' className='teksnav1'>
                        <li>layanan</li>
                    </Link>
                </div>
                <Link to="/blog"><li className='teksnav2'>Blog</li></Link>
                <div>
                    <Link to="/about" className='teksnav3'>
                        <li>About Us</li>
                    </Link>
                </div>
                <div style={{ marginTop: 20 }}>
                    <Link to='/login' className='buttonmasuk'>Masuk</Link>
                </div>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'nav' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] mt-3'>
                    <img src="/images/Logo.webp" alt="" />
                </h1>
                <ul className='uppercase p-4'>
                    <Link to="/home"><li className='p-4 border-b'>Home</li></Link>
                    <Link to="/layanan"><li className='p-4 border-b'>Layanan</li></Link>
                    <Link to="/blog"><li className='p-4 border-b'>Blog</li></Link>
                    <Link to="/about"><li className='p-4 border-b'>About</li></Link>
                    <div className='mt-10'>
                        <Link to='/login' className='bg-[#00df9a] hover:bg-[#00c78d] text-white font-bold py-2 px-20 rounded mt-10'>
                            Login
                        </Link>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
