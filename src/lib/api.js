import axios from 'axios';
//axios.defaults.headers.common['x-access-token'] = localStorage.getItem('token');

const axiosAPI = axios.create({
    // @ts-ignore
    baseURL: 'http://localhost:5000/api/v1/'
});

const apiRequest = (method, url, request) => {
    const headers = {
        'x-access-token' : localStorage.getItem('token')
    };
    return axiosAPI({
        method,
        url,
        data: request,
        headers
    }).then(res => {
        return Promise.resolve(res.data);
    }).catch(err =>{
        return Promise.reject(err);
    });
};

const get = (url, request) => apiRequest('get',url,request);
const deleteReq = (url, request) => apiRequest('delete',url,request);
const post = (url, request) => apiRequest('post',url,request);
const put = (url, request) => apiRequest('put',url,request);

const API = {
    get,
    delete:deleteReq,
    post,
    put,
}

export default API;
