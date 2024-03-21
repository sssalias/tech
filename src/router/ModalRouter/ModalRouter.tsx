import React from 'react'
import {IRoute} from 'shared/ui/router/CustomRouter'
import {CreateAlbumPage, CreateImagePage, CreateVideoPage} from 'pages'
import {Route, Routes} from 'react-router-dom'


const routes:IRoute[] = [
    {path: '/profile/albums/create', element: <CreateAlbumPage/>},
    {path: '/profile/photos/create', element: <CreateImagePage/>},
    {path: '/profile/videos/create', element: <CreateVideoPage/>}
]

const ModalRouter = () => {
    return (
        <Routes>
            {routes.map(el => <Route path={el.path} element={el.element}/>)}
        </Routes>
    );
};

export default ModalRouter;