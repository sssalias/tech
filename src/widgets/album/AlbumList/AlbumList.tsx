import React from 'react';
import AlbumItem, {AlbumItemProps} from "widgets/album/AlbumItem/AlbumItem";
import {Link} from "react-router-dom";
import AlbumItemCreate from "../AlbumItemCreate/AlbumItemCreate";

const AlbumList = () => {

    const array:AlbumItemProps[] = [
        {title: 'Негры', src: 'https://www.rusamny.com/wp-content/uploads/2021/07/t05-2.jpg'},
    ]

    return (
        <div className='grid grid-cols-4 gap-6 '>
            {array.map(el => <AlbumItem title={el.title} src={el.src}/>)}
            <AlbumItemCreate/>
        </div>
    );
};

export default AlbumList;