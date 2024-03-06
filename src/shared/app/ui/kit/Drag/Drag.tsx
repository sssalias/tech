import React, {useState} from 'react';
import {FileUploader} from "react-drag-drop-files";

type DragProps = {
    label: string
}

const allowedFileTypes:string[] = ['JPG', 'JPEG', 'PNG']

const Drag = ({label}:DragProps) => {

    const [file, setFile] = useState(null)

    const handleChangeFile = (file:any) => {
        setFile(file)
    }

    return (
        <div className='flex flex-col space-y-3 text-base font-semibold'>
            <label>{label}</label>
            <FileUploader
                multiple={false}
                handleChange={handleChangeFile}
                name='file'
                types={allowedFileTypes}
                classes='bg-red'
            />
        </div>
    );
};

export default Drag;