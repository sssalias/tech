import {makeRequest, Methods} from 'features/api/config'

export const createAlbum = async (token: string, data: any) => {
    return makeRequest(Methods.POST, '/albums', token, data)
}


export const getAlbums = async (token: string) => {
    return makeRequest(Methods.GET, '/albums/my', token)
}