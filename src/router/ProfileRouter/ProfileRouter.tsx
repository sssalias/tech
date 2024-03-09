import React from 'react';
import {IRoute} from "shared/app/ui/router/CustomRouter";
import Albums from "pages/GeneralPages/ProfilePage/Albums/Albums";
import Photos from "pages/GeneralPages/ProfilePage/Photos/Photos";
import {CustomRouter} from "shared/app/ui";

const routes:IRoute[] = [
    {path: 'albums', element: <Albums/>},
    {path: 'photos', element: <Photos/>}
]


const ProfileRouter = () => {
    return (
        <CustomRouter routes={routes}/>
    );
};

export default ProfileRouter;