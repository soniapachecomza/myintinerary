import React from 'react';
import HeaderHome from '../components/Header/headerHome';
import Footer from '../components/Footer/footer'
import './homeLayout.css'

export default function homeLayout({ children }) {
    return (
        <>
            <div className='w-100 bg-home'>
                <HeaderHome />
                {children}
                <Footer />
            </div>
        </>
    )
}