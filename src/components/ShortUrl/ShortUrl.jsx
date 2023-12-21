import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import BgWrapper from '../Wrapper/BgWrapper';
import { getUrlData } from '../../service/ApiService';
import NotFound from '../NotFound/NotFound';

const ShortUrl = () => {
    const { shortUrl } = useParams()
    const [error, setError] = useState(false)

    const fetchUrlData = async () => {
        const res = await getUrlData(shortUrl)
        if (res && res.status.toString() === "200") {
            window.location.replace(res.data.redirect_url)
        } else {
            setError(true)
        }

    }

    useEffect(() => {
        if (shortUrl) {
            fetchUrlData()
        } else {
            setError(true)
        }
        // eslint-disable-next-line
    }, [])
    return (
        <>
            {error ? <NotFound /> : <BgWrapper>
                <div className='flex w-full h-full justify-center items-center flex-col overflow-y-auto pb-6'>
                    <h1 className='text-6xl'>Loading...</h1>
                </div>
                <div className=' flex justify-center w-full'>
                    <p className='text-sm text-slate-500'>Created by: <Link to="https://portfolio-vbhardwaj09.netlify.app/" className='text-base text-white'>Vishal Bhardwaj</Link></p>
                </div>
            </BgWrapper>}</>

    )
}

export default ShortUrl;