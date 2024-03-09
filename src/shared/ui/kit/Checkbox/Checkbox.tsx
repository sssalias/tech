import React from 'react'

type CheckboxProps = {
    label: string
}

const Checkbox = ({label}:CheckboxProps) => {
    return (
        <label className='flex flex-row justify-center items-center gap-2'>
            <span className='font-semibold'>{label}</span>
            <input type='checkbox' />
        </label>
    )
}

export default Checkbox
