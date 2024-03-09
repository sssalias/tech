import React from 'react'


// TODO:
//      1) - Сделать чекбоксы: (isPrivate)
//      2) - Сделать уровени доступа (owners)

const AlbumSettings = () => {
    const [isChecked, setChecked] = React.useState();
    return (
        <div className='w-1/6 ml-auto border-l-2 border-gray-200 b'>
            <div className='w-full flex flex-col justify-center items-center'>
                <h3 className='text-lg font-semibold'>Настройки альбома</h3>
                <div>
                    <label className="flex gap-2">
                        <input type="checkbox"/>
                        Сделать приватным
                    </label>
                </div>
            </div>
        </div>
    )
}

export default AlbumSettings