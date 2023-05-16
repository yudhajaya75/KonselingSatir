import React from 'react';
import Carousel from 'react-multi-carousel';

interface SocialMediaProfileProps {
    name: string;
    subtitle: string;
    bio: string;
    link1: string;
    link2: string;
}

const SocialMediaProfile: React.FC<SocialMediaProfileProps> = ({ name, subtitle, bio, link1, link2, }) => {
    return (
        <div className='bg-white my-12 pb-6 m-10 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg mx-auto drop-shadow-xl'>
            <div className='relative h-[150px]'>
                <div className='absolute h-full w-[400px] object-cover rounded-md'>
                    <img src='/images/banner.webp' alt='' />
                </div>
            </div>
            <div className='relative shadow mx-auto h-24 w-24 -my-20 border-white rounded-full overflow-hidden border-4'>
                <div className='object-cover w-full h-full'>
                    <img src='/images/avatar.webp' alt='' />
                </div>
            </div>
            <div className='mt-20 p-5'>
                <h1 className='text-lg text-center font-semibold'>{name}</h1>
                <p className='text-sm text-gray-600 text-left my-4'>{subtitle}</p>
                <p className='text-sm text-gray-600 text-left'>{bio}</p>
            </div>
            <div className='mt-6 pt-3 flex flex-wrap mx-6 border-t'>
                <div className='text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default'>
                    {link1}
                </div>
                <div className='text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default'>
                    {link2}
                </div>
            </div>
        </div>
    );
};

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const SocialMediaProfiles = () => {
    return (
        <div style={{ position: 'relative', zIndex: '0', padding: '30px' }}>
            <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlay
                autoPlaySpeed={2000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
            >
                <SocialMediaProfile
                    name='Profile 1'
                    subtitle='Subtitle 1'
                    bio='Bio 1'
                    link1='Link 1'
                    link2='Link 2'
                />
                <SocialMediaProfile
                    name='Profile 2'
                    subtitle='Subtitle 2'
                    bio='Bio 2'
                    link1='Link 1'
                    link2='Link 2'
                />
                <SocialMediaProfile
                    name='Profile 3'
                    subtitle='Subtitle 3'
                    bio='Bio 3'
                    link1='Link 1'
                    link2='Link 2'
                />
                <SocialMediaProfile
                    name='Profile 4'
                    subtitle='Subtitle 4'
                    bio='Bio 4'
                    link1='Link 1'
                    link2='Link 2'
                />
                <SocialMediaProfile
                    name='Profile 5'
                    subtitle='Subtitle 5'
                    bio='Bio 5'
                    link1='Link 1'
                    link2='Link 2'
                />
                <SocialMediaProfile
                    name='Profile 6'
                    subtitle='Subtitle 6'
                    bio='Bio 6'
                    link1='Link 1'
                    link2='Link 2'
                />
            </Carousel>
        </div>
    );
};

export default SocialMediaProfiles;
