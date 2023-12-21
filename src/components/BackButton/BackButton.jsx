import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate(-1)
    }

    return (
        <div className='absolute left-[20%] text-xl border border-white px-2 py-1 rounded-md cursor-pointer' onClick={() => { handleBack() }}> Back</div>
    )
}

export default BackButton;