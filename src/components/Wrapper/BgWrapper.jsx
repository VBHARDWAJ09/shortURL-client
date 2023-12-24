import React from 'react'
import Header from './Header'

const BgWrapper = ({ children }) => {
    return (
        <div className='h-screen w-full bg-gradient-to-l font-sans to-blue-700 from-gray-800 via-black text-white relative overflow-hidden'>
            <Header />
            {children}
        </div>
    )
}

export default BgWrapper
