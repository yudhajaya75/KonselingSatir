import React from 'react'
import Navbar from '../../components/navbar/navbarblog'
import Teks from '../../components/teks/teksblog'
import Vertical from '../../components/vertical/vertical'
import Blog1 from '../../components/blog/blog'
import Blog2 from '../../components/blog/blog2'
import Blog3 from '../../components/blog/blog3'
import Footer from '../../components/footer/footer'

const Blog = (props: { email: string }) => {
    return (
        <div className='mx-auto max-w-[1910px] relative'>
            <Navbar accountEmail={props.email} />
            <Teks />
            <Blog1 />
            <Blog2 />
            <Blog3 />
            <Footer />
        </div>
    );
};

export default Blog