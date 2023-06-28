import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import list from "./list.json"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './navbarhome.css'

const Navbar = ({ accountEmail }: { accountEmail: string }) => {
    const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        });
    }

    let menu;

    if (accountEmail === '') {
        menu = (
            <div>
                <div style={{ marginTop: 20 }}>
                    <a href='/login' className='buttonmasuk'>Masuk</a>
                </div>
            </div>
        );
    } else {
        menu = (
            // <div>
            //     {isOpen ? (
            //     <AiOutlineCaretDown />
            // ) : (
            //     <AiOutlineCaretUp />
            // )}
            // {isOpen && (
            //     <div className="bg-[#FFFFFF] absolute ml-12 top-20 flex flex-col items-start rounded-lg p-2">
            //         {list.map((item, i) => (
            //             <div className="w-[239px] justify-between text-[#074288] p-4 hover:bg-blue-300 cursor-pointer rounded-lg border-l-transparent hover:border-l-white" key={i}>
            //                 <a href='webinar'><h3 className='font-bold'>{item.webinar}</h3></a>
            //                 <a href='pelatihan'><h3 className='font-bold'>{item.pelatihan}</h3></a>
            //                 <a href='layanan'><h3 className='font-bold'>{item.layanan}</h3></a>
            //                 <a href='konsultasi'><h3 className='font-bold'>{item.konsultasi}</h3></a>
            //             </div>
            //         ))}
            //     </div>
            // )}
            // </div>
            <div className='relative inline-block text-left'>
                {accountEmail ? (
                    <div className='dropdown' style={{ marginTop: 10, marginLeft: 100 }}>
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false">
                            {accountEmail}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="/login" onClick={logout}>My Profile</Link>
                            <hr />
                            <Link className="dropdown-item" to="/login" onClick={logout}>Keluar</Link>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }




    const [isOpen, setIsOpen] = useState(false)
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='navbar'>
            <h1 className='logo'>
                <a href="/home">
                    <img src="http://localhost:3000/images/Logo.webp" alt="" />
                </a>
            </h1>
            <ul className='listnav'>
                <a href="/home">
                    <li className='teksnav' style={{ color: '#074288' }}>Home</li>
                </a>
                <div>
                    <a href='#' onClick={() => setIsOpen((prev) => !prev)}
                        className='teksnav1' style={{ color: '#4B4B4B', fontWeight: 'bold', fontSize: '20px' }}>
                        <li>layanan</li>
                        <li style={{ marginLeft: 10 }}>
                            {isOpen ? (
                                <AiOutlineCaretDown />
                            ) : (
                                <AiOutlineCaretUp />
                            )}
                        </li>
                    </a>
                    {isOpen && (
                        <div className="bg-[#FFFFFF] absolute ml-12 top-20 flex flex-col items-start rounded-lg p-2">
                            {list.map((item, i) => (
                                <div className="w-[239px] justify-between text-[#074288] p-4 hover:bg-blue-300 cursor-pointer rounded-lg border-l-transparent hover:border-l-white" key={i}>
                                    <a href='webinar'><h3 className='font-bold'>{item.webinar}</h3></a>
                                    <a href='pelatihan'><h3 className='font-bold'>{item.pelatihan}</h3></a>
                                    <a href='layanan'><h3 className='font-bold'>{item.layanan}</h3></a>
                                    <a href='konsultasi'><h3 className='font-bold'>{item.konsultasi}</h3></a>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <a href="/blog">
                    <li className='teksnav2' style={{ color: '#4B4B4B' }}>Blog</li>
                </a>
                <a href="/about">
                    <li className='teksnav3' style={{ color: '#4B4B4B' }}>About Us</li>
                </a>
                <div style={{ marginBottom: -30 }}>
                    {menu}
                </div>
            </ul>
            <div onClick={handleNav} className='block md:hidden '>
                {nav ? <AiOutlineClose size={20} /> :
                    <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'nav' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold mt-3'>
                    <img src="/images/Logo.webp" alt="" />
                </h1>
                <ul className='uppercase p-4'>
                    <a href="/home">
                        <li className='p-4 border-b'>Home</li></a>
                    <a href="#" onClick={() => setIsOpen((prev) => !prev)}>
                        <li className='p-4 border-b'>Layanan</li>
                        <li style={{ position: 'relative', left: 210, bottom: 35 }}>
                            {isOpen ? (
                                <AiOutlineCaretDown />
                            ) : (
                                <AiOutlineCaretUp />
                            )}
                        </li>
                    </a>
                    {isOpen && (
                        <div className="bg-[#FFFFFF]  absolute top-[220px] left-[-1px] flex flex-col items-start rounded-lg">
                            {list.map((item, i) => (
                                <div className="w-full justify-between 
                           p-4 hover:bg-blue-300 cursor-pointer rounded-lg text-[#074288]  
                           border-l-transparent " key={i}>
                                    <a href='webinar'><h3 className='font-bold'>{item.webinar}</h3></a>
                                    <a href='pelatihan'><h3 className='font-bold'>{item.pelatihan}</h3></a>
                                    <a href='layanan'><h3 className='font-bold'>{item.layanan}</h3></a>
                                    <a href='konsultasi'><h3 className='font-bold'>{item.konsultasi}</h3></a>
                                </div>
                            ))}
                        </div>
                    )}
                    <a href="/blog"><li className='p-4 border-b'>Blog</li></a>
                    <a href="/about"><li className='p-4 border-b'>About Us</li></a>
                    <div className='mt-10'>
                        <a href='/login' className='bg-[#00df9a] hover:bg-[#00c78d]
                         text-white font-bold py-2 px-20 rounded'>
                            Login
                        </a>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
