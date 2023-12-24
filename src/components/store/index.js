import { configureStore } from '@reduxjs/toolkit'
import authReducer from './reducer/authReducer'

const Store = configureStore({
    reducer: {
        "authReducer": authReducer,
    }
})

export default Store;