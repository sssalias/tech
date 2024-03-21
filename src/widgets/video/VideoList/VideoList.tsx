import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import VideoCardCreate from "widgets/video/VideoCardCreate/VideoCardCreate";
import VideoCard from "widgets/video/VideoCard/VideoCard";


type VideoListProps = {
    elements?:string[]
}
const VideoList = ({elements=[]}:VideoListProps) => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
            <Masonry gutter='20px'>
                <VideoCardCreate/>
                {elements.map(el => <VideoCard el={el}/>)}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export default VideoList;