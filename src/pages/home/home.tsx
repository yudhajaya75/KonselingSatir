import React from 'react'
import Navbar from '../../components/navbar/navbarhome'
import Banner from '../../components/banner/bnhome'
import Content from '../../components/content/content'
import Card from '../../components/card/cardhome'
import Icons from '../../components/iconshome/iconshome'
import Article from '../../components/articlehome/articlehome'
import Sosmed from '../../components/sosmed/sosmed'
import Intro from '../../components/intro/introhome'
import Article2 from '../../components/articlehome/article2'
import Questions from '../../components/questions/questions'
import Footer from '../../components/footer/footer'

const home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Content />
            <Card />
            <Icons />
            <Article />
            <Sosmed />
            <Intro />
            <Article2 />
            <Questions />
            <Footer />
        </>
    )
}

export default home