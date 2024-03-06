import React from 'react';
import {Link, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const AlbumItemCreate = () => {
    const location = useLocation()
    return (
        <Link to='/profile/albums/create' state={{prevLocation: location}}>
            <div className='hover:bg-light-violet hover:text-white transition-all bg-gray-100 rounded relative h-full flex justify-center items-center text-xl'>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        </Link>
    );
};

export default AlbumItemCreate;