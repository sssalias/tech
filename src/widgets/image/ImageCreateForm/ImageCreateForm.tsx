import React, {SetStateAction, useState} from 'react'
import {DefaultButton, Drag, SimpleField} from 'shared/ui'
import {createFile} from 'features/api/files'
import {useKeycloak} from '@react-keycloak/web'
import {useFileStore} from 'store/file/useFileStore'
import {useNavigate} from 'react-router-dom'

const ImageCreateForm = () => {

    const [file, setFile]:[any, SetStateAction<any>] = useState(null)

    const {keycloak, initialized} = useKeycloak()
    const navigate = useNavigate()

    //@ts-ignore
    const getFiles = useFileStore(state => state.getFiles)

    return (
        <div className='flex-col items-center justify-center space-y-5'>
            <Drag label='Выберите фоторафию' file={file} setFile={setFile}/>
            <DefaultButton onClick={
                () => {
                    if (keycloak.token) {
                        createFile(keycloak.token, {file: file})
                            .then(
                                (res) => {
                                    getFiles(keycloak.token)
                                    navigate(-1)
                                }
                            )
                }
            }}>Добавить</DefaultButton>
        </div>
    );
};

export default ImageCreateForm;