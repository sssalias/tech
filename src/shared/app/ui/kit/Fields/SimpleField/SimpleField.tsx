import React from 'react';


type InputProps = {
    label: string,
    type: string
}

const SimpleField = ({label, type}:InputProps) => {
    return (
        <label className='flex flex-col text-base'>
            <span className='font-semibold'>{label}</span>
            <input className='outline-0 border-b-2 border-black py-1' type={type}/>
        </label>
    );
};

export default SimpleField;