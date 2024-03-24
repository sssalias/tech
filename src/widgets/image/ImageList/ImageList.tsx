import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import {ImageCard, ImageCardCreate} from 'widgets/image/'

type ImagesListProps = {
    elements?:string[]
    albumId?:string
}

const ImageList = ({elements=[]}:ImagesListProps) => {

    console.log(elements)

    // @ts-ignore
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter='20px'>
                <ImageCardCreate/>
                {elements?.map(el => (
                    // @ts-ignore
                    <ImageCard el={`${process.env.REACT_APP_API_URI}files/${el.id}`}/>
                ) )}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default ImageList;