import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {getAlbums} from 'features/api/album'


export const useAlbumStore = create()(immer(setState => ({
    data: [],
    getData: async (token:string) => {
        const {data} = await getAlbums(token)
        setState({data})

    }
})))