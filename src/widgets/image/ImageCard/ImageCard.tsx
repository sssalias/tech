import React from 'react'

const ImageCard = ({el}:any) => {
    return (
        <div className='rounded'>
            <img className='rounded' src={el} alt=""/>
        </div>
    );
};

export default ImageCard;