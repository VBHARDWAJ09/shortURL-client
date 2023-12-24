import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/reducer/authReducer';

const Header = () => {
    const { userToken } = useSelector(state => state.authReducer)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div className='flex justify-end py-2 pr-4'>
            {userToken && <button onClick={handleLogout} className='border-[2px] p-2 rounded-lg border-red-600 text-red-600 cursor-pointer text-xs md:text-base'>Logout</button>}
        </div>
    )
}

export default Header;