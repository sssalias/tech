import React from 'react'


type InputProps = {
    label: string,
    type: string
    setData?: any
}

const SimpleField = ({label, type, setData}:InputProps) => {
    return (
        <label className='flex flex-col text-base'>
            <span className='font-semibold'>{label}</span>
            <input onChange={e => setData(e.target.value)} className='outline-0 border-b-2 border-black py-1' type={type}/>
        </label>
    );
};

export default SimpleField;