import {makeRequest, Methods} from 'features/api/config'

export const getFiles = async (token:string) => {
    return makeRequest(
        Methods.GET,
        '/files/my',
        token
    )
}

export const createFile = (token: string, data: any) => {
    return makeRequest(
        Methods.POST,
        '/files',
        token,
        data,
        'multipart/form-data'
        
    )
}