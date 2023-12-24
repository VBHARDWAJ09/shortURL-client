import { createSlice } from '@reduxjs/toolkit'
import { SessionKeys } from '../../SessionKeys/SessionKeys'

const getKeyFromSession = (key) => {
    return sessionStorage.getItem(key) || ""
}

const removeKeyFromSession = (key) => {
    sessionStorage.removeItem(key)
}

const authReducer = createSlice({
    name: "authReducer",
    initialState: {
        userToken: getKeyFromSession(SessionKeys.token)
    },
    reducers: {
        setUserToken: (state, action) => {
            state.userToken = action.payload
        },
        logout: (state, action) => {
            state.userToken = null;
            state.user = null;
            removeKeyFromSession(SessionKeys.token)
        }
    }
})

export const { logout, setUserToken } = authReducer.actions
export default authReducer.reducer;