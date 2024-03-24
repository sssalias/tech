import React, {useEffect, useState} from 'react'
import {ImageList} from 'widgets/image'
import {useKeycloak} from '@react-keycloak/web'
import {useFileStore} from 'store/file/useFileStore'


const Photos = () => {

    const {initialized, keycloak} = useKeycloak()

    const [data, setData] = useState()

    //@ts-ignore
    const getFiles = useFileStore(state => state.getFiles)
    //@ts-ignore
    const files = useFileStore(state => state.files)

    useEffect(() => {
        if (keycloak.token && initialized) {
            getFiles(keycloak.token)
        }
    }, [initialized])

    return (
        <div>
            <ImageList elements={files}/>
        </div>
    );
};

export default Photos;