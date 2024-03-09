import React from 'react'
import {Checkbox, RadioButton} from 'shared/ui'


// TODO:
//      1) - Сделать чекбоксы: (isPrivate)
//      2) - Сделать уровени доступа (owners)

const AlbumSettings = () => {
    const [isChecked, setChecked] = React.useState();
    return (
        <div className='w-1/6 ml-auto border-l-2 border-gray-200 b'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h3 className='text-lg font-semibold'>Настройки альбома</h3>
                <div className='w-full'>
                    <form className='flex flex-col items-start px-5 py-2'>
                        <fieldset className='flex flex-col items-start'>
                            <h3 className='font-bold text-lg '>Приватность</h3>
                            <div className='flex flex-col'>
                                <RadioButton name='private' value='private' label='Приватный' />
                                <RadioButton name='private' value='public' label='Публичный' />
                            </div>
                        </fieldset>
                        <fieldset className='flex flex-col items-center'>
                            <h3 className='font-bold text-lg'>Список участников</h3>
                            
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AlbumSettings