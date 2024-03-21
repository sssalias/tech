import React from 'react';
import {useLocation} from "react-router-dom";
import {ModalLink} from "../../../shared/ui";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

const VideoCardCreate = () => {
    const location = useLocation()
    return (
        <ModalLink path='/profile/videos/create'>
            <div className='p-16 hover:bg-light-violet hover:text-white transition-all bg-gray-100 rounded relative h-full flex justify-center items-center text-xl'>
                <FontAwesomeIcon icon={faPlus}/>
            </div>
        </ModalLink>
    );
};

export default VideoCardCreate;