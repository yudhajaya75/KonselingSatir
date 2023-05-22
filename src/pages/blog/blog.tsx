import React from 'react'
import Navbar from '../../components/navbar/navbarblog'
import Teks from '../../components/teks/teksblog'
import Blog from '../../components/blog/blog'
import Footer from '../../components/footer/footer'

const blog = () => {
    return (
        <>
            <Navbar />
            <Teks />
            <Blog />
            <Footer />
        </>
    )
}

export default blog