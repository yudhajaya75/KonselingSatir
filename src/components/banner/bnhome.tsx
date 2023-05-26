import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        <div className='mt-20 '>
            <img className=" w-full h-[500px] lg:h-[800px] absolute -top-10 -z-30" src='./images/banhome.webp' alt="backgroundS" />
            <div className="w-full  h-[300px] p-2 lg:h-[700px] flex justify-around mt-20 lg:m-0">
                {/* text */}
                <div className=' h-[120px] mt-[50px] lg:w-[500px] lg:flex flex-col gap-8'>
                    <h1 className="text-base sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#002157]  ">Konseling Satir Indonesia</h1>
                    <p className=" font-extralight text-xs sm:text-lg md:text-xl lg:text-3xl text-[#5B5B5B]">Berproses & Bertumbuh Menjadi<br />  Manusia Utuh</p>

                    <div className="bg-[#002157] hover:bg-slate-400 hidden w-[200px] h-[50px] lg:flex rounded-xl py-3">
                        <a className=" text-slate-100 text-xl font-bold m-auto" href="#">Daftar Sekarang</a>
                    </div>
                </div>
                {/* image */}
                <div className="w-[150px] h-[150px] md:w-[250px] md:h-[250px] lg:w-[400px] xl:w-[500px] relative lg:mr-10 lg:mt-0">
                    <img className="absolute -z-10 right-0" src='./images/bgpeople.webp' alt="background-people" />
                    <img className="absolute w-[80%] top-[10%] xl:top-[20%] left-[10%]" src='./images/people.webp' alt="people" />
                </div>
            </div>
        </div>
    )
}
export default Registration;