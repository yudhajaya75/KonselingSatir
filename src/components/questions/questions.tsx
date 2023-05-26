import React from 'react';
import { FiChevronDown } from "react-icons/fi";

const Question = () => {
    return (
        <section>
            <div className="flex justify-center p-4 2xl:p-0 mt-[100px]">
                <h2 className="text-3xl mb-10  font-semibold text-[#002157] mt-[15px] lg:mr-[100px] lg:ml-[150px]">FAG</h2>
                <div className=" w-[1381px] ml-2 rounded-[10px] bg-[#F8FCFF]">
                    <div className="flex text-xl justify-between pt-[5px] mt-[10px] ">
                        <p className="ml-[60px]">Pertanyaan 1</p>
                        <FiChevronDown className="mr-[50px] text-3xl " />
                    </div>
                    <div className=' border-b-2 border-zinc-200 mt-[10px]'></div>
                    <div className="flex text-xl justify-between pt-[5px] mt-[10px] ">
                        <p className="ml-[60px]">Pertanyaan 2</p>
                        <FiChevronDown className="mr-[50px] text-3xl" />
                    </div>
                    <div className=' border-b-2 border-zinc-200 mt-[10px]'></div>
                    <div className="flex text-xl justify-between pt-[5px] mt-[10px] ">
                        <p className="ml-[60px]">Pertanyaan 3</p>
                        <FiChevronDown className="mr-[50px] text-3xl " />
                    </div>
                    <div className=' border-b-2 border-zinc-200 mt-[10px]'></div>
                    <div className="flex text-xl justify-between pt-[5px] mt-[10px] ">
                        <p className="ml-[60px]">Pertanyaan 4</p>
                        <FiChevronDown className="mr-[50px] text-3xl" />
                    </div>
                    <div className=' border-b-2 border-zinc-200 mt-[10px] '></div>
                    <div className="flex text-xl justify-between pt-[5px] mt-[10px] pb-[10px]">
                        <p className="ml-[60px]">Pertanyaan 5</p>
                        <FiChevronDown className="mr-[50px] text-3xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Question;