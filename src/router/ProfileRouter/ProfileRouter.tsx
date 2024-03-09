import React from 'react';
import {IRoute} from 'shared/ui/router/CustomRouter'
import {CustomRouter} from 'shared/ui'
import {AlbumsDetails, Photos, Albums} from 'pages'

const routes:IRoute[] = [
    {path: 'albums', element: <Albums/>},
    {path: 'albums/:albumId', element: <AlbumsDetails/>},
    {path: 'photos', element: <Photos/>}
]


const ProfileRouter = () => {
    return (
        <CustomRouter routes={routes}/>
    );
};

export default ProfileRouter;