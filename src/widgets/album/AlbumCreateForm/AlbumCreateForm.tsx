import React from 'react'
import {DefaultButton, Drag, SimpleField} from 'shared/ui'

const AlbumCreateForm = () => {
    return (
        <div className='flex-col items-center justify-center space-y-5'>
            <SimpleField label='Название' type='text'/>
            <Drag label='Выберите обложку'/>
            <DefaultButton>Создать</DefaultButton>
        </div>
    );
};

export default AlbumCreateForm;