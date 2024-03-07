import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {ImageCard, ImageCardCreate} from "widgets/image/";

type ImagesListProps = {
    elements?:string[]
}

const ImageList = ({elements=[]}:ImagesListProps) => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter='20px'>
                <ImageCardCreate/>
                {elements.map(el => <ImageCard el={el}/>)}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ImageList;