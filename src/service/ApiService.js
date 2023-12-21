import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL + "api/"
const siteUrl = process.env.REACT_APP_SITE_URL

const createUrl = async (url) => {
    return await axios.post(`${baseUrl}url`, { url })
}

const getUrlData = async (shortUrl) => {
    return await axios.get(`${baseUrl}${shortUrl}`)
}

const getAllData = async (page) => {
    return await axios.get(`${baseUrl}details/${page}`)
}

const getUrlDataById = async (urlId) => {
    return await axios.get(`${baseUrl}url-details/${urlId}`)
}

export { createUrl, siteUrl, getUrlData, getAllData, getUrlDataById }