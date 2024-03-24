import {create} from 'zustand'
import {immer} from 'zustand/middleware/immer'
import {getFiles} from 'features/api/files'


export interface FileState {
    files: any[],
    getFiles: (token: string) => any
}


export const useFileStore = create()(immer(setState => ({
    files: [],
    getFiles: async (token: string) => {
        const {data} = await getFiles(token)
        setState({files: data})
    }
})))