import axios from 'axios';

const BASE_URL = 'https://googledrive-server.herokuapp.com';


export const login = (email,password)=>{
    return axios
    .post(`${BASE_URL}/login`,{email,password})
    .then((res)=>res.data).catch((error)=>(error.response.data))
}

export const signup=(email,firstname,lastname,password)=>{
    return axios
    .post(`${BASE_URL}/register`,{email,firstname,lastname,password})
    .then((res)=>res.data).catch((error)=>(error.response.data));
}

export const forgetpassword=(email)=>{
    return axios
    .post(`${BASE_URL}/forgetpassword`,{email})
    .then((res)=>res.data).catch((error)=>(error.response.data));
}

export const updatepassword=(token,password)=>{
    return axios
    .post(`${BASE_URL}/updatepassword`,
    {password},
    {
        headers:{
            authorization:token
        }
    }
    )
    .then((res)=>res.data).catch((error)=>(error.response.data));
}