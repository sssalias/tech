import {useMutation} from 'react-query'
import axios from 'axios'
import {IAxiosRequestConfig, IAxiosInstanceConfig} from './index'


export const useMutationRequest = (config:IAxiosRequestConfig) => {
    const axiosInstanceConfig:IAxiosInstanceConfig = {
        baseURL: 'https://jsonplaceholder.typicode.com',
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const axiosInstance = axios.create(axiosInstanceConfig)

    const mutation = useMutation(
        () => axiosInstance.request(config)
    )
    return mutation
}