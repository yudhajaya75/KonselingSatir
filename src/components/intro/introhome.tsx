import React, { useState } from 'react';
import '../intro/responsive.css'

const Content = () => {
    const [videoVisible, setVideoVisible] = useState(false);

    const handleImageClick = () => {
        setVideoVisible(true);
    };

    const handleVideoClose = () => {
        setVideoVisible(false);
    };



    return (
        <div className="mt-20 lg:mt-[50px] h-[500px] lg:h-[700px] sm:h-[780px] ">
            <h2 className="text-2xl lg:text-3xl text-center font-semibold text-[#002157]">Berkenalan dengan Konseling Satir</h2>
            <div className="relative mt-10 lg:mt-[100px]">
                <div className=''>
                    <img src='/images/home3.webp' alt="garis-setengah-lingkaran" className=" absolute w-[80%] top-[15%]  lg:w-[750px] xl:top-[15%] 2xl:top-[15%]" />
                </div>
                <div className="absolute w-[75%] md:w-[80%] h-[200px] top-[20%] left-[10%] md:left-[10%] sm:h-[300px] lg:h-[450px] lg:top-[15%] md:h-[350px] " >
                    {!videoVisible && (
                        <div>
                            <img
                                src="./images/home4.webp"
                                alt=""
                                className="rounded-lg cursor-pointer relative top-[10px]"
                                onClick={handleImageClick}
                            />
                        </div>
                    )}

                    {videoVisible && (
                        <div className="video-wrapper">
                            <div className="video-container">
                                <div className="videoWrapper">
                                    <iframe
                                        className="responsive-video"
                                        src="https://www.youtube.com/embed/WM7Ng1fW_fE"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <img
                                    className="absolute top-[25px] left-[1195px] h-10 transform -translate-x-1/2 -translate-y-1/2 w-10 cursor-pointer"
                                    src="./images/close.png"
                                    alt="Close"
                                    onClick={handleVideoClose}
                                />
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </div>
    )
}

export default Content;