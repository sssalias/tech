import React from 'react'
import {useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {ModalLink} from 'shared/ui'

const AlbumItemCreate = () => {
    const location = useLocation()
    return (
        <ModalLink path='/profile/albums/create'>
            <div className='hover:bg-light-violet hover:text-white transition-all bg-gray-100 rounded relative h-full flex justify-center items-center text-xl'>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        </ModalLink>
    );
};

export default AlbumItemCreate;