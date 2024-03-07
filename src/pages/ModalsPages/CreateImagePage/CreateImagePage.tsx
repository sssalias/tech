import React from 'react';
import ModalLayout from "shared/app/ui/layouts/ModaLayout/ModalLayout";
import {ImageCreateForm} from "widgets/image";

const CreateImagePage = () => {
    return (
        <ModalLayout title='Добавить фотографию'>
            <ImageCreateForm/>
        </ModalLayout>
    );
};

export default CreateImagePage;