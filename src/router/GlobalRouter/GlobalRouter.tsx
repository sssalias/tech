import React from 'react';
import {CustomRouter} from "shared/app/ui";
import {IRoute} from "shared/app/ui/router/CustomRouter";
import {IndexPage, ProfilePage} from "pages";

const routes:IRoute[] = [
    {path: '/', element: <IndexPage/>},
    {path: '/profile/*', element: <ProfilePage/>}
]

const GlobalRouter = () => {
    return (
        <CustomRouter routes={routes} />
    );
};

export default GlobalRouter;