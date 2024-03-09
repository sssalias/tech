import React from 'react';
import {ModalLayout} from 'shared/ui'
import {AlbumCreateForm} from 'widgets/album'

const CreateAlbumPage = () => {
    return (
        <ModalLayout title='Создать альбом'>
            <AlbumCreateForm/>
        </ModalLayout>
    );
};

export default CreateAlbumPage;