import axios from "axios";

export interface IAxiosInstanceConfig {
    baseURL:string,
    headers?:object
}

export interface IAxiosRequestConfig {
    method:string,
    url:string,
    data?:object,
    headers?:object
}


export const HOST = ''

const axiosInstanceConfig:IAxiosInstanceConfig = {
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json'
    }
}
export const axiosInstance = axios.create(axiosInstanceConfig)

