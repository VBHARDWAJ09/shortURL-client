import React, { useEffect, useState } from 'react'
import BgWrapper from '../Wrapper/BgWrapper';
import { useParams, Link } from 'react-router-dom';
import BackButton from '../BackButton/BackButton';
import { getUrlDataById, siteUrl } from '../../service/ApiService';

const PageDetails = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})

    const getUrlData = async () => {
        const res = await getUrlDataById(id)
        if (res && res.status.toString() === "200") {
            setLoading(false)
            setData(res.data.urlData)
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (id) {
            getUrlData()
        }
        // eslint-disable-next-line
    }, [])
    return (
        <BgWrapper>
            <div className='w-full h-full flex pt-10 items-center flex-col gap-10 relative overflow-y-auto pb-6'>
                <BackButton />
                <h1 className='text-4xl capitalize'>Here is the details</h1>
                {loading ? <h1 className='text-4xl'>Loading...</h1> : <div className='table-container'>
                    <table className='table'>
                        <thead>
                            <tr className='tr'>
                                <th className='th'>Full Url</th>
                                <th className='th'>Short Url</th>
                                <th className='th'>No of Clicks</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='odd:bg-gray-800'>
                                <td className='td'  style={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{data?.fullUrl}</td>
                                <td className='td'>{siteUrl + data?.shortUrlId}</td>
                                <td className='td'>{data.clicks}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>}
                <div className=' flex justify-center w-full'>
                    <p className='text-sm text-slate-500'>Created by: <Link to="https://portfolio-vbhardwaj09.netlify.app/" className='text-base text-white'>Vishal Bhardwaj</Link></p>
                </div>
            </div>
        </BgWrapper>
    )
}

export default PageDetails;