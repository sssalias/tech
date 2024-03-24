import React from 'react'
import {ImageList} from 'widgets/image'
import {AlbumSettings} from 'widgets/album'
import {Loader} from 'shared/ui'
import {useFileStore} from 'store/file/useFileStore'

const AlbumsDetails = () => {



    //@ts-ignore
    const files = useFileStore(state => state.files)

    return (
        <div className='flex '>
            <div className='w-5/6'>
                <ImageList elements={files}/>
            </div>
            <AlbumSettings/>
        </div>
    )
}

export default AlbumsDetails