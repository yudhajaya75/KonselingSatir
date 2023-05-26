import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaShare } from 'react-icons/fa';
import { FaBookmark } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../blog/slider.css'

const Blog = () => {
    return (
        <>
            <div className='relative'>
                <div className='grid grid-cols-1 content-start absolute left-[1000px] top-[-2290px] '>
                    <div className=' relative left-[-10px] top-[70px]'>
                        <img className='h-[250px] w-[400px]' src='./images/blog4.webp' alt='' />
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-60px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='flex gap-5 relative top-8 left-[330px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className='relative bottom-[129px] left-[-12px] text-[#8B8B8B]'>
                                <p>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[-30px] left-[-12px]'>
                                <p className='font-bold text-[25px]'>100k</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[-10px] top-[120px]'>
                        <img className='h-[250px] w-[400px]' src='./images/blog5.webp' alt='' />
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-60px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='flex gap-5 relative top-8 left-[330px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className='relative bottom-[129px] left-[-12px] text-[#8B8B8B]'>
                                <p>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[-30px] left-[-12px]'>
                                <p className='font-bold text-[25px]'>100k</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[-10px] top-[170px]'>
                        <img className='h-[250px] w-[400px]' src='./images/blog6.webp' alt='' />
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-60px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='flex gap-5 relative top-8 left-[330px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className='relative bottom-[129px] left-[-12px] text-[#8B8B8B]'>
                                <p>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[-30px] left-[-12px]'>
                                <p className='font-bold text-[25px]'>100k</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                    <div className=' relative left-[-10px] top-[220px]'>
                        <img className='h-[250px] w-[400px]' src='./images/blog7.webp' alt='' />
                        <div className='w-[400px] z-10 relative left-[13px] bottom-[-60px]'>
                            <p className='font-bold text-[25px] relative left-[-12px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                            <div className='flex gap-5 relative top-8 left-[330px]'>
                                <FaBookmark />
                                <FaShare />
                            </div>
                            <div className='relative bottom-[129px] left-[-12px] text-[#8B8B8B]'>
                                <p>06 Maret 2023</p>
                            </div>
                            <div className='relative top-[-30px] left-[-12px]'>
                                <p className='font-bold text-[25px]'>100k</p>
                                <p className='text-[#8B8B8B]'>People Saw</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
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

    return windowWidth <= 440 ? <Mobile /> : <Blog />;
};

const Mobile = () => {
    return (
        <>
            <div className='grid grid-cols-1 content-start absolute left-[170px] top-[110px] '>
                <div className=' relative left-[150px] top-[70px]'>
                    <img className='h-[80px] w-[110px]' src='./images/blog4.webp' alt='' />
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-60px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-[25px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='flex gap-2 relative bottom-5 left-[70px] w-[25px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative bottom-[95px] left-[-12px] text-[#8B8B8B] text-[10px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-[50px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B text-[7px]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[90px]'>
                    <img className='h-[80px] w-[110px]' src='./images/blog5.webp' alt='' />
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-60px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-[25px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='flex gap-2 relative bottom-5 left-[70px] w-[25px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative bottom-[95px] left-[-12px] text-[#8B8B8B] text-[10px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-[50px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B text-[7px]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[110px]'>
                    <img className='h-[80px] w-[110px]' src='./images/blog6.webp' alt='' />
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-60px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-[25px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='flex gap-2 relative bottom-5 left-[70px] w-[25px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative bottom-[95px] left-[-12px] text-[#8B8B8B] text-[10px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-[50px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B text-[7px]'>People Saw</p>
                        </div>
                    </div>
                </div>
                <div className=' relative left-[150px] top-[130px]'>
                    <img className='h-[80px] w-[110px]' src='./images/blog7.webp' alt='' />
                    <div className='w-[100px] z-10 relative left-[13px] bottom-[-60px]'>
                        <p className='font-bold text-[7px] relative left-[-12px] bottom-[25px]'>Lorem Ipsum has been the industry's standard dummy text.</p>
                        <div className='flex gap-2 relative bottom-5 left-[70px] w-[25px]'>
                            <FaBookmark />
                            <FaShare />
                        </div>
                        <div className='relative bottom-[95px] left-[-12px] text-[#8B8B8B] text-[10px]'>
                            <p>06 Maret 2023</p>
                        </div>
                        <div className='relative bottom-[50px] left-[-12px]'>
                            <p className='font-bold text-[7px]'>100k</p>
                            <p className='text-[#8B8B8B text-[7px]'>People Saw</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Founding;  
