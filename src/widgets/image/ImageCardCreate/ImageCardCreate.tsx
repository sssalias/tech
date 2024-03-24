import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import {ModalLink} from 'shared/ui'

const ImageCardCreate = ({albumId}:any) => {
    const location = useLocation()
    return (
        <ModalLink path='/profile/photos/create'>
            <div className='p-16 hover:bg-light-violet hover:text-white transition-all bg-gray-100 rounded relative h-full flex justify-center items-center text-xl'>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        </ModalLink>
    );
};

export default ImageCardCreate;