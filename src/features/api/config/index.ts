import axios from 'axios'


export const instance = axios.create(
    {
        baseURL: process.env.REACT_APP_API_URI
    }
)

export enum Methods {
    GET='GET',
    POST='POST',
    DELETE='DELETE',
}


export const makeRequest = (method: string, path: string, token: string, data?: any, type?: string) => {
    return instance.request({
        method,
        url: path,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': type
        },
        data
    })
}