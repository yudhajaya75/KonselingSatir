import React from 'react';
import { CgArrowTopRightO } from "react-icons/cg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const ArticelWebimar = () => {
    return (
        <section id="section5">
            <div className="mt-20 lg:mt-[10px] relative p-10" >
                <div className='w-full flex p-2 justify-center'>
                    <img src='./images/home2.webp' alt="image" className="w-1/2 " />
                    <div className=" ml-2 lg:ml-[50px] text-left xl:mt-0 xl:w-[500px] flex flex-col lg:gap-5 " >
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl  font-semibold text-[#002157] ">
                            <h2>Webminar</h2>
                        </div>
                        <div className="w-full text-sm  sm:text-base md:text-xl lg:text-xl  font-extralight text-[#5B5B5B] mt-[2px]">
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className="text-sm md:text-lg lg:text-xl font-semibold text-[#002157]  mt-[2px] flex items-center ">
                            <a href='#'>Lihat selengkapnya</a>
                            <CgArrowTopRightO className='ml-[5px]' />
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-between absolute left-0 top-[50%]  text-[#002157]  ">
                    <SlArrowLeft size={30} />
                    <SlArrowRight size={30} />
                </div>
            </div>
        </section>
    )
}

export default ArticelWebimar;