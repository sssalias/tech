import React from 'react'
import AlbumItem, {AlbumItemProps} from 'widgets/album/AlbumItem/AlbumItem'
import {Link} from 'react-router-dom'
import AlbumItemCreate from 'widgets/album/AlbumItemCreate/AlbumItemCreate'
import {useAlbumStore} from 'store/album'

const AlbumList = () => {

    // @ts-ignore
    const albums = useAlbumStore(state => state.data)

    console.log(albums)

    const array:AlbumItemProps[] = [
        {title: 'Негры', src: 'https://urgi-stv.ru/wp-content/uploads/2/c/a/2ca07ff0390ccfd7fc4392f6c5416bbc.jpeg'},
    ]

    return (
        <div className='grid grid-cols-4 gap-6 '>
            {/*{array.map(el => <AlbumItem title={el.title} src={el.src}/>)}*/}
            {albums ? albums.map((el:any) => <AlbumItem path={el.id} src='https://urgi-stv.ru/wp-content/uploads/2/c/a/2ca07ff0390ccfd7fc4392f6c5416bbc.jpeg' title={el.title}/>) : null}
            <AlbumItemCreate/>
        </div>
    );
};

export default AlbumList;