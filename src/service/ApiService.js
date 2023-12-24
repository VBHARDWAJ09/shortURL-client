import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL + "api/"
const siteUrl = process.env.REACT_APP_SITE_URL

const createHeader = (token) => {
    return { headers: { authorization: `auth ${token}` } }
}

const createUrl = async (url, tkn) => {
    return await axios.post(`${baseUrl}url`, { url }, createHeader(tkn))
}

const getUrlData = async (shortUrl) => {
    return await axios.get(`${baseUrl}${shortUrl}`)
}

const getAllData = async (page, tkn) => {
    return await axios.get(`${baseUrl}details/${page}`, createHeader(tkn))
}

const getUrlDataById = async (urlId, tkn) => {
    return await axios.get(`${baseUrl}url-details/${urlId}`, createHeader(tkn))
}

const loginApi = async (data, tkn) => {
    return await axios.post(`${baseUrl}login`, data, createHeader(tkn))
}

const registerApi = async (data, tkn) => {
    return await axios.post(`${baseUrl}register`, data, createHeader(tkn))
}

export { createUrl, siteUrl, getUrlData, getAllData, getUrlDataById, loginApi, registerApi }