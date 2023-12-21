import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='absolute left-[20%] text-base md:text-xl border border-white px-1 md:px-2 md:py-1 rounded-md cursor-pointer transition-all hover:bg-slate-500' onClick={() => { handleBack() }}> Back</div>
    )
}

export default BackButton;