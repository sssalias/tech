import React from 'react'
import {DefaultButton, Drag, SimpleField} from 'shared/ui'

const ImageCreateForm = () => {
    return (
        <div className='flex-col items-center justify-center space-y-5'>
            <SimpleField label='Название' type='text'/>
            <SimpleField label='Теги' type='text'/>
            <Drag label='Выберите фоторафию'/>
            <DefaultButton>Добавить</DefaultButton>
        </div>
    );
};

export default ImageCreateForm;