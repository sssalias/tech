import React from 'react'

type RadioButtonProps = {
    label: string,
    value:string,
    name:string,
}

const RadioButton = ({label, value, name}:RadioButtonProps) => {
    return (
        <label className='flex flex-row-reverse justify-center items-center gap-2'>
            <span className='font-semibold'>{label}</span>
            <input name={name} value={value} type="radio"/>
        </label>
    )
}

export default RadioButton