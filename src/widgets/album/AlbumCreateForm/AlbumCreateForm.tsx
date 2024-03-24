import React, {useState} from 'react'
import {DefaultButton, Drag, SimpleField} from 'shared/ui'
import {useKeycloak} from '@react-keycloak/web'
import {createAlbum} from 'features/api/album'
import {useNavigate} from 'react-router-dom'
import {useAlbumStore} from 'store/album'

const AlbumCreateForm = () => {

    const [data, setData] = useState({
        title: '',
        previewId: null
    })

    const {keycloak, initialized} = useKeycloak()

    const navigate = useNavigate()

    //@ts-ignore
    const getAlbums = useAlbumStore(state => state.getData)

    return (
        <div className='flex-col items-center justify-center space-y-5'>
            <SimpleField setData={(value:string) => {setData({...data, title: value})}} label='Название' type='text'/>
            <Drag label='Выберите обложку'/>
            <DefaultButton onClick={() => {
                if (keycloak.token && initialized) {
                    createAlbum(keycloak.token, data)
                        .then(() => {
                            getAlbums(keycloak.token)
                            navigate(-1)
                        })
                }
            }}>Создать</DefaultButton>
        </div>
    );
};

export default AlbumCreateForm;