import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        <div className='mb-20 '>
            <img className=" w-full h-[1200px] lg:h-[800px] absolute -top-10 -z-30" src='./images/banhome.webp' alt="backgroundS" />
            <div className="w-full h-[1000px] lg:h-[700px] flex justify-center items-center flex-wrap lg:flex-nowrap lg:justify-around mt-20 lg:m-0">
                {/* text */}
                <div className='w-[500px] h-[350px] flex flex-col gap-10 text-center lg:text-left lg:w-[500px] lg:h-[350px] lg:ml-10 md:h-[250px] sm:w-full sm:px-2 '>
                    <h1 className="text-6xl lg:text-5xl font-bold text-[#002157]  ">Konseling Satir Indonesia</h1>
                    <p className=" font-extralight text-4xl lg:text-3xl text-[#5B5B5B]">Berproses & Bertumbuh Menjadi Manusia Utuh</p>

                    <div className="bg-[#002157] hover:bg-[#7b7c7d] w-[200px] h-[50px] flex rounded-xl mx-auto lg:m-0">
                        <a className=" text-slate-100 text-xl font-bold m-auto" href="#">Daftar Sekarang</a>
                    </div>
                </div>
                {/* image */}
                <div className="w-[550px] h-[550px] relative lg:mr-10 lg:mt-0">
                    <img className="absolute -z-10 right-0" src='./images/bgpeople.webp' alt="background-people" />
                    <img className="absolute right-[25px] bottom-14" src='/images/people.webp' alt="people" />
                </div>
            </div>
        </div>


    )
}
export default Registration;