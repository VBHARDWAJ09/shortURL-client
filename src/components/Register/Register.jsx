import React, { useEffect, useState } from 'react'
import BgWrapper from '../Wrapper/BgWrapper';
import { Link, useNavigate } from 'react-router-dom';
import { registerApi } from '../../service/ApiService';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const Register = () => {
    const [state, setState] = useState({ email: "", password: "", name: "" })
    const [error, setError] = useState({ email: false, password: false, name: false })
    const [loading, setLoading] = useState(false)
    const [viewPassword, setViewPassword] = useState(false)
    const { userToken } = useSelector(state => state.authReducer)
    const [APIErrors, setAPIErrors] = useState([])
    const navigate = useNavigate()

    const validateFields = () => {
        let hasError = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(state.email)) {
            setError(err => {
                return { ...err, email: true }
            })
            hasError = true;
        } else {
            setError(err => {
                return { ...err, email: false }
            })
        }
        if (state.password.length < 5) {
            setError(err => {
                return { ...err, password: true }
            })
            hasError = true;
        } else {
            setError(err => {
                return { ...err, password: false }
            })
        }
        if (state.name.length < 3) {
            setError(err => {
                return { ...err, name: true }
            })
            hasError = true;
        } else {
            setError(err => {
                return { ...err, name: false }
            })
        }
        return hasError;
    }

    const handleSubmit = async (e) => {
        if (!loading) {
            setLoading(true)
            e.preventDefault();
            if (validateFields()) {
                setLoading(false)
                return;
            }
            const res = await registerApi(state, userToken)
            if (res.status.toString() === "200") {
                setLoading(false)
                toast.success(res.data.msg, { duration: 5000 })
                navigate('/login')
            } else {
                setLoading(false)
                setAPIErrors(res?.data?.errors)
            }
        }
    }

    useEffect(() => {
        if (APIErrors?.length) {
            APIErrors.forEach(item => {
                toast.error(item.msg, { duration: 5000 })
            })
        }
    }, [APIErrors])

    const handleTextChange = e => {
        setState(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <BgWrapper>
            <div className='w-full h-full flex pt-10 items-center flex-col gap-10 relative overflow-y-auto pb-6'>

                <div className="w-full md:max-w-[340px]">
                    <h3 className='text-2xl text-center'>User Register Form</h3>
                    <form className='flex flex-col gap-6 mt-6 bg-gray-800 py-8 px-6 rounded-lg' onSubmit={e => handleSubmit(e)}>
                        <div className="form-box">
                            <input type="text" name="name" value={state.name} onChange={handleTextChange} className='form-input' placeholder='Enter Name...' />
                            {error.name && <p className='err-text'>Name must have 3 characters</p>}
                        </div>
                        <div className="form-box">
                            <input type="text" name="email" value={state.email} onChange={handleTextChange} className='form-input' placeholder='Enter Email...' />
                            {error.email && <p className='err-text'>Invalid Email</p>}
                        </div>
                        <div className="form-box relative">
                            <input type={viewPassword ? "text" : "password"} name="password" value={state.password} onChange={handleTextChange} className='form-input' placeholder='Enter Password...' />
                            {state.password && <p className='absolute right-4 top-2 text-xl cursor-pointer' onClick={() => setViewPassword(!viewPassword)}>{!viewPassword ? "👁" : "🙈"}</p>}
                            {error.password && <p className='err-text'>Password must have 5 characters</p>}
                        </div>
                        <input disabled={loading} className='bg-indigo-700 rounded-lg p-3 cursor-pointer hover:bg-indigo-500 transition-all 0.2s' type="submit" value={loading ? "Loading..." : "Register"} />
                        <Link to="/login" className='text-center underline text-base text-blue-300 hover:text-white mt-[-10px]'>Login</Link>
                    </form>
                </div>
            </div>
        </BgWrapper>
    )
}

export default Register;