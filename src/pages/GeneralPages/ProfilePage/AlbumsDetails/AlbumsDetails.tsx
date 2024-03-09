import React from 'react'
import {ImageList} from 'widgets/image'
import {AlbumSettings} from 'widgets/album'

const AlbumsDetails = () => {
    return (
        <div className='flex '>
            <div className='w-5/6'>
                <ImageList/>
            </div>
            <AlbumSettings/>
        </div>
    )
}

export default AlbumsDetails