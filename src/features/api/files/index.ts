import {makeRequest, Methods} from 'features/api/config'

export const getFiles = (token:string) => {
    return makeRequest(
        Methods.GET,
        '/file/my',
        token
    )
}

export const createFile = (token: string, data: any) => {
    return makeRequest(
        Methods.POST,
        '/file/my',
        token,
        data,
        'multipart/form-data'
        
    )
}