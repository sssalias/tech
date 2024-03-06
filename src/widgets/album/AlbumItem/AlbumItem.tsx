import React from 'react';
import {Link} from "react-router-dom";

export type AlbumItemProps = {
    src: string,
    title: string,
    path?: string
}

const AlbumItem = ({src, title, path=''}:AlbumItemProps) => {
    return (
        <Link to={path}>
            <div className='bg-gray-300 rounded relative'>
                <div
                    className='flex items-end px-4 py-8 absolute bg-black-alpha     h-full w-full rounded text-white font-bold'>
                    <h3>{title}</h3>
                </div>
                <img className='rounded w-full h-full object-cover' src={src} alt=""/>
            </div>
        </Link>
    );
};

export default AlbumItem;