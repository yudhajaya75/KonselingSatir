import React from 'react'
import Navbar from '../../components/navbar/navwebinar'
import Banner from '../../components/banner/banwebminar3'
import Teks4 from "../../components/teks/teks-webinar5"
import Teks from '../../components/teks/teks-webminar5'
import Purchase from '../../components/purchase/purchase'
import Teks2 from '../../components/teks/tesk-detail-webinar'
import Teks3 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/sosmed'
import Footer from '../../components/footer/footwebminar'


const webminar = () => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar />
            <Teks4 />
            <Banner />
            <Teks />
            <Purchase />
            <Teks2 />
            <Teks3 />
            <Sosmed />
            <Footer />
        </div>
    )
}

export default webminar