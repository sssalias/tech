import React from 'react';
import {ModalLayout} from 'shared/ui'
import {ImageCreateForm} from 'widgets/image'
import {useParams, useSearchParams} from 'react-router-dom'

const CreateImagePage = () => {

    // При открытии страницы (модального окна) из юрл прилетает albumI
    // Если null, то запрос на добавление в общие фото, если нет, то в конкретный альбом по albumId
    
    const [params] = useSearchParams()

    console.log(
        params.get('albumId')
    )

    return (
        <ModalLayout title='Добавить фотографию'>
            <ImageCreateForm/>
        </ModalLayout>
    );
};

export default CreateImagePage;