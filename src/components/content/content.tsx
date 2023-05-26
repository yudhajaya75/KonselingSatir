import React, { useState } from 'react';
import '../content/responsive.css'

const Content = () => {
    const [videoVisible, setVideoVisible] = useState(false);

    const handleImageClick = () => {
        setVideoVisible(true);
    };

    const handleVideoClose = () => {
        setVideoVisible(false);
    };

    return (
        <div className="mt-5 lg:mt-0">
            <div className="w-full flex flex-row-reverse justify-center">
                <div className="w-full md:w-[40%] flex flex-col gap-1 lg:gap-10 lg:ml-10">
                    <h3 className="text-lg font-semibold text-[#002157] sm:text-xl md:text-2xl lg:text-3xl">
                        Tentang Konseling Satir
                    </h3>
                    <p className="font-extralight text-xs text-[#5B5B5B] sm:text-base md:text-lg lg:text-xl">
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                    <div className="bg-[#002157] w-[100px] sm:w-[200px] flex rounded-md py-3 mx-auto mt-2 ml-10 sm:mt-1">
                        <a className="text-slate-100 text-[10px] sm:text-lg font-bold m-auto" href="/login">
                            Daftar Sekarang
                        </a>
                    </div>
                </div>
                <div className="w-full md:w-1/2 xl:w-[40%] h-full relative px-5 flex items-center justify-center mt-5 md:mt-0">
                    {!videoVisible && (
                        <div>
                            <img
                                src="./images/home9.webp"
                                alt=""
                                className="rounded-lg cursor-pointer"
                                onClick={handleImageClick}
                            />
                        </div>
                    )}
                    {videoVisible && (
                        <div className="video-wrappers">
                            <div className="video-containers">
                                <div className="videoWrappers">
                                    <iframe
                                        className="responsive-videos"
                                        src="https://www.youtube.com/embed/WM7Ng1fW_fE"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <img
                                    className="absolute top-[30px] left-[540px] transform -translate-x-1/2 -translate-y-1/2 h-7 w-7 cursor-pointer"
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
    );
};

export default Content;
