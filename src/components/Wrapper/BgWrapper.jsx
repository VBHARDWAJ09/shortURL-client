import React from 'react'

const BgWrapper = ({ children }) => {
    return (
        <div className='md:h-screen w-full bg-gradient-to-l font-sans to-blue-700 from-gray-800 via-black text-white relative'>
            {children}
        </div>
    )
}

export default BgWrapper
