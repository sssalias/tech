import React from 'react'
import {CustomRouter} from 'shared/ui'
import {IRoute} from 'shared/ui/router/CustomRouter'
import {IndexPage, ProfilePage} from 'pages'

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