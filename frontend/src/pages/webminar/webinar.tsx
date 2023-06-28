import React from 'react'
import Navbar from '../../components/navbar/navwebinar'
import Banner from '../../components/banner/banwebminar'
import Teks from '../../components/teks/teks-webminar'
import Teks2 from '../../components/teks/teks-webminar1'
import Card from '../../components/card/cardwebminar'
import Teks3 from '../../components/teks/teks-webminar2'
import Footer from '../../components/footer/footwebminar'


const webinar = () => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar />
            <Banner />
            <Teks />
            <Teks2 />
            <Card />
            <Teks3 />
            <Footer />
        </div>
    )
}

export default webinar