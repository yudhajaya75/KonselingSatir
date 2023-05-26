import React from 'react'
import Navbar from '../../components/navbar/navbarblog'
import Teks from '../../components/teks/teksblog'
import Vertical from '../../components/vertical/vertical'
import Blog from '../../components/blog/blog'
import Blog2 from '../../components/blog/blog2'
import Blog3 from '../../components/blog/blog3'
import Footer from '../../components/footer/footer'

const blog = () => {
    return (
        <>
            <Navbar />
            <Teks />
            <Blog />
            <Blog2 />
            <Blog3 />
            <Footer />
        </>
    )
}

export default blog