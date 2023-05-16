import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default class PauseOnHover extends Component {
    render() {
        var settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            centerMode: true,
            centerPadding: "0px",
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "20px",
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: "20px",
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <div className='py-10'>
                <Slider {...settings}>
                    <div className='bg-cover'>
                        <img src="http://localhost:3000/images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="http://localhost:3000/images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="http://localhost:3000/images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="http://localhost:3000/images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="http://localhost:3000/images/company.webp" className='h-[250px]' alt="" />
                    </div>
                    <div className='bg-cover'>
                        <img src="http://localhost:3000/images/company.webp" className='h-[250px]' alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
};
