import React from 'react';
import {DefaultButton, SimpleField} from "../../shared/ui";

const MetaData = () => {
    return (
        <div className='flex-col items-center justify-center space-y-5'>
            <SimpleField label='Место съёмки' type='text'/>
            <SimpleField label='Устройство' type='text'/>
            <DefaultButton>Добавить</DefaultButton>
        </div>
    );
};

export default MetaData;