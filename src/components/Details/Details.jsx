import React, { useEffect, useState } from 'react'
import BgWrapper from '../Wrapper/BgWrapper';
import { Link, useParams } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import BackButton from '../BackButton/BackButton';
import { getAllData } from '../../service/ApiService';
import NotFound from '../NotFound/NotFound';
import { useSelector } from 'react-redux';

const Details = () => {
    let { page } = useParams()
    const { userToken } = useSelector(state => state.authReducer)
    page = page || 1;
    const [loading, setLoading] = useState(true)
    const [pageData, setPageData] = useState({ data: [] })

    const getPageData = async (p) => {
        setLoading(true)
        const res = await getAllData(p, userToken)
        if (res && res.status.toString() === "200") {
            setLoading(false)
            setPageData(res.data)
        } else {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPageData(page)
        // eslint-disable-next-line
    }, [page])

    return (
        <>{pageData.data.length === 0 && !loading ? <NotFound /> :
            <BgWrapper>
                <div className='flex w-full h-full pt-10 items-center flex-col gap-6 relative overflow-y-auto pb-6 '>
                    <BackButton />
                    <h1 className='text-base md:text-4xl'>History</h1>
                    {loading ? <h1 className='text-xl md:text-4xl mt-10'>Loading...</h1> :
                        <>
                            <div className='table-container'>
                                <table className='table'>
                                    <thead>
                                        <tr className='tr'>
                                            <th className='th'>Url</th>
                                            <th className='th'>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pageData.data.map((item, ind) => {
                                            return <tr key={ind} className='odd:bg-gray-800'>
                                                <td className='td'>{item.fullUrl}</td>
                                                <td className='td'><Link to={`/page-details/${item._id}`} className='p-1 md:px-2 md:py-1 bg-indigo-600 rounded-md transition-all hover:bg-indigo-900'>View Details</Link></td>
                                            </tr>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination perPage={pageData.perPage} count={pageData.count} path='/details' page={parseInt(page)} />
                        </>}
                    <div className=' flex justify-center w-full'>
                        <p className='text-xs md:text-sm text-slate-500'>Created by: <Link to="https://portfolio-vbhardwaj09.netlify.app/" className='text-sm md:text-base text-white'>Vishal Bhardwaj</Link></p>
                    </div>
                </div>
            </BgWrapper >}
        </>
    )
}

export default Details;