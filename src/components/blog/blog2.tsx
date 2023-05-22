import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../blog/slider.css'

const Blog2 = () => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-14 content-start w-[1300px]'>
                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <a href=""><FaShare /></a>
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>

                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>

                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>

                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>

                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>

                <div className=' relative left-[150px] top-[100px] '>
                    <img className='h-[380px]' src='./images/blog.webp' alt='' />
                    <div className='w-[370px] h-[400px] border-2 bg-white p-5 rounded-lg z-10 relative left-[13px] bottom-[200px]'>
                        <p className='font-bold text-[25px]'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                        <p className='relative top-4 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                            and scrambled it to make a type specimen book.
                        </p>
                        <div className='flex gap-5 relative top-10 left-[280px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative top-5 left-[150px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative top-[10px] left-0'>
                            <p className='font-bold text-[25px]'>100k</p>
                            <p className='text-[#8B8B8B]'>People Saw</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const Founding = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowWidth <= 440 ? <Mobile /> : <Blog2 />;
};

const Mobile = () => {
    return (
        <>
            <div className='grid grid-cols-2 gap-4 w-[620px]'>
                <div className='relative bottom-6 left-[30px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-6 left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[30px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative bottom-[70px] left-[-80px]'>
                    <div className='relative top-[100px]'>
                        <Link to="">
                            <img className='h-[150px]' src='./images/blog.webp' alt='' />
                        </Link>
                        <div className='w-[155px] h-[180px] border-2 bg-white p-5 rounded-lg z-10 relative left-[6px] bottom-[70px]'>
                            <Link to="">
                                <p className='font-bold text-[7px] relative bottom-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptate.</p>
                                <p className='relative text-justify text-[7px] bottom-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                                    and scrambled it to make a type specimen book.
                                </p>
                            </Link>
                            <div className='flex gap-2 relative top-[5px] left-[85px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className=''>
                                <p className='text-[8px] relative bottom-2 left-[30px]'>06 Maret 2023</p>
                            </div>
                            <div className='relative bottom-[20px] left-0'>
                                <p className='font-bold text-[10px]'>100k</p>
                                <p className='text-[#8B8B8B] text-[10px]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Founding;  
