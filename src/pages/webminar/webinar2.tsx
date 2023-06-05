import React from 'react'
import Navbar from '../../components/navbar/navbar'
import Banner from '../../components/banner/banwebminar2'
import Teks from '../../components/teks/teks-webminar3'
import Teks2 from '../../components/teks/teks-webminar4'
import Teks3 from '../../components/teks/teks-kata-mereka'
import Sosmed from '../../components/sosmed/sosmed'
import Footer from '../../components/footer/footwebminar'


const webminar = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Teks />
            <Teks2 />
            <Teks3 />
            <Sosmed />
            <Footer />
        </>
    )
}

export default webminar