import React from 'react';
import {useSearchParams} from "react-router-dom";
import {ModalLayout} from "shared/ui";
import VideoCreateForm from "widgets/video/VideoCreateForm/VideoCreateForm";

const CreateVideoPage = () => {
    const [params] = useSearchParams()

    console.log(
        params.get('albumId')
    )

    return (
        <ModalLayout title='Добавить видео'>
            <VideoCreateForm/>
        </ModalLayout>
    );
};

export default CreateVideoPage;