import React from 'react';
import ModalLayout from "shared/app/ui/layouts/ModaLayout/ModalLayout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";
import {DefaultButton} from "shared/app/ui";
import {AlbumCreateForm} from "widgets/album";

const CreateAlbumPage = () => {
    return (
        <ModalLayout title='Создать альбом'>
            <AlbumCreateForm/>
        </ModalLayout>
    );
};

export default CreateAlbumPage;