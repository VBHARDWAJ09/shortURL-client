import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Public = ({ children }) => {
    const { userToken } = useSelector(state => state.authReducer)
    return (
        userToken ? <Navigate to="/" /> : children
    )
}

export default Public;