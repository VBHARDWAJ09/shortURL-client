import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    const { userToken } = useSelector(state => state.authReducer)
    return (
        userToken ? children : <Navigate to="/login" />
    )
}

export default Private;