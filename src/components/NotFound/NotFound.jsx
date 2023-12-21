import React from 'react'
import BgWrapper from '../Wrapper/BgWrapper';
import BackButton from '../BackButton/BackButton';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <BgWrapper>
            <div className='flex w-full h-full pt-10 items-center flex-col gap-6 relative overflow-y-auto pb-6'>
                <BackButton />
                <h1 className='text-base md:text-4xl'>OOPS! Page Not Found</h1>
                <p className='text-sm md:text-lg'>I thing you have landed on wrong page.</p>
                <h1 className='text-5xl md:text-9xl'>404</h1>
                <p className='text-sm md:text-lg'>Please go and back and try again.</p>
                <div className=' flex justify-center w-full'>
                    <p className='text-xs md:text-sm text-slate-500'>Created by: <Link to="https://portfolio-vbhardwaj09.netlify.app/" className='text-sm md:text-base text-white'>Vishal Bhardwaj</Link></p>
                </div>
            </div>
        </BgWrapper>
    )
}

export default NotFound;