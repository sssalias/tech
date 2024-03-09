import React, {SetStateAction, useRef, useState} from 'react';
import classNames from "classnames";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faFile} from "@fortawesome/free-solid-svg-icons";

type DragProps = {
    label: string
}

const allowedFileTypes:string[] = ['JPG', 'JPEG', 'PNG']

const Drag = ({label}:DragProps) => {

    const [file, setFile]:[any, SetStateAction<any>] = useState(null)

    const [dragIsActive, setDragIsActive] = useState(false)

    const fileInputRef = useRef<HTMLInputElement | null>(null)

    const handleChangeFile = () => {
        setFile(fileInputRef.current?.files?.item(0))
    }

    const stopRedirect = (e:React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const dragEnterHandler = (e:React.DragEvent<HTMLDivElement>) => {
        stopRedirect(e)
        setDragIsActive(true)
    }

    const dragOverHandler = (e:React.DragEvent<HTMLDivElement>) => {
        stopRedirect(e)
        setDragIsActive(false)
    }

    const onDropHandler = (e:React.DragEvent<HTMLDivElement>) => {
        stopRedirect(e)
        setDragIsActive(false)
        setFile(e.dataTransfer.files.item(0))

    }

    return (
        <div className='cursor-pointer flex flex-col space-y-3 text-base font-semibold'>
            <label>{label}</label>
            <div onClick={() => fileInputRef.current?.click()} onDragEnter={dragEnterHandler} onDragOver={stopRedirect} onDragEnd={dragOverHandler} onDrop={onDropHandler}
                 className={classNames('text-violet py-44 px-28 h-20 border-dashed border-2 border-violet rounded',
                dragIsActive ?  'bg-light-violet' : '')}>
                {file ?
                    <div>
                        <div className='h-full flex flex-col justify-start'>
                            <h3>{file.name}</h3>
                        </div>
                    </div>
                    :
                    <div className='flex justify-center items-center ' >
                        <h3 className='w-2/3 text-2xl'>Выберите файл или перенесите его</h3>
                        <FontAwesomeIcon className='text-5xl' icon={faFile}/>
                    </div>
                }
                <input hidden={true} type="file" ref={fileInputRef} onChange={handleChangeFile}/>
            </div>
        </div>
    );
};

export default Drag;