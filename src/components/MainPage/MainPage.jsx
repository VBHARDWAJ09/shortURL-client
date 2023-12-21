import React, { useState } from 'react'
import BgWrapper from '../Wrapper/BgWrapper'
import { Link } from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { createUrl, siteUrl } from '../../service/ApiService';

const MainPage = () => {
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState(false)
    const [newUrl, setNewUrl] = useState({ value: "", show: false, disable: false, prevValue: "" })
    const [loading, setLoading] = useState(false)

    const handelSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        if (!inputValue) {
            return;
        }
        const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(inputValue)) {
            setLoading(false)
            setError(true)
            setNewUrl(prev => {
                return { ...prev, show: false, prevValue: "" }
            })
        } else {
            const res = await createUrl(inputValue)
            console.log(res)
            if (res && res.status.toString() === "200") {
                setNewUrl(prev => {
                    return { ...prev, value: siteUrl + res.data.shortUrl, show: true, disable: false, prevValue: inputValue }
                })
                setLoading(false)
                setError(false)
            } else {
                setLoading(false)
                setError(false)
                setNewUrl(prev => {
                    return { ...prev, show: false, disable: false }
                })
            }
        }
    }

    const CopyNewUrl = () => {
        setNewUrl(prev => {
            return { ...prev, disable: true }
        })
    }

    return (
        <BgWrapper>
            <div className='flex w-full h-full justify-center items-center flex-col gap-6 overflow-y-auto pb-6'>
                <h1 className='text-4xl font-mono'>Welcome To Url Shortner</h1>
                <form className='flex gap-2 relative' onSubmit={e => handelSubmit(e)}>
                    <input type="text" placeholder='Enter URL ...' className='w-[400px] py-3 px-4 text-2xl text-black outline-none border-collapse rounded-md' value={inputValue} onChange={e => setInputValue(e.target.value)} />
                    <button type='submit' disabled={inputValue.length === 0} className={'p-5 rounded-xl text-xl transition-all text-white' + ((inputValue.length > 0 && newUrl.prevValue !== inputValue) ? " bg-blue-500" : " bg-slate-400")}>Short Url</button>
                    {error && <p className='text-red-600 text-xl absolute left-0 top-16'>Invalid Url</p>}
                </form>
                {loading && <h1 className='text-4xl'>Loading...</h1>}
                {newUrl.show &&
                    <div className='flex gap-2 items-center'>
                        <p className='text-2xl font-bold'>New Url:</p>
                        <input type="text" value={newUrl.value} readOnly className='outline-none border-0 bg-gray-600 p-3 border-collapse rounded-md w-[300px]' />
                        <CopyToClipboard text={newUrl.value}>
                            <button className={'p-3 rounded-lg bg-blue-500'} onClick={CopyNewUrl}>{newUrl.disable ? "Copied" : "Copy Url"}</button>
                        </CopyToClipboard>
                    </div>}

                <Link to='/details' className='text-2xl text-blue-500 hover:underline flex justify-center items-center'>View History</Link>
                <div className=' flex justify-center w-full'>
                    <p className='text-sm text-slate-500'>Created by: <Link to="https://portfolio-vbhardwaj09.netlify.app/" className='text-base text-white'>Vishal Bhardwaj</Link></p>
                </div>
            </div>
        </BgWrapper>
    )
}

export default MainPage
