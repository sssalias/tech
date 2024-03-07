import React from 'react';
import {IRoute} from "shared/app/ui/router/CustomRouter";
import {CreateAlbumPage, CreateImagePage} from 'pages'
import {Route, Routes} from "react-router-dom";


const routes:IRoute[] = [
    {path: '/profile/albums/create', element: <CreateAlbumPage/>},
    {path: '/profile/photos/create', element: <CreateImagePage/>}
]

const ModalRouter = () => {
    return (
        <Routes>
            {routes.map(el => <Route path={el.path} element={el.element}/>)}
        </Routes>
    );
};

export default ModalRouter;