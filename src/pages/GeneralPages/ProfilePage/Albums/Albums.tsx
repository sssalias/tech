import React, {useEffect} from 'react'
import {AlbumList} from 'widgets/album'
import {useAlbumStore} from 'store/album'
import {useKeycloak} from '@react-keycloak/web'

const Albums = () => {

    //@ts-ignore
    const getAlbums = useAlbumStore(state => state.getData)
    const {keycloak, initialized} = useKeycloak()

    useEffect(() => {
        if (keycloak.token && initialized) {
            getAlbums(keycloak.token)
        }
    }, [initialized])

    return (
        <div>
           <AlbumList/>
        </div>
    );
};

export default Albums;