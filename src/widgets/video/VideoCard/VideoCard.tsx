import React from 'react';

const VideoCard = ({el}:any) => {
    return (
        <div className='rounded relative'>
            <img className='rounded' src={el} alt=""/>
        </div>
    );
};

export default VideoCard;