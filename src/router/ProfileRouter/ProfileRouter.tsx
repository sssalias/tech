import React from 'react';
import {IRoute} from "shared/app/ui/router/CustomRouter";
import Albums from "pages/ProfilePage/Albums/Albums";
import {CustomRouter} from "shared/app/ui";

const routes:IRoute[] = [
    {path: 'albums', element: <Albums/>}
]


const ProfileRouter = () => {
    return (
        <CustomRouter routes={routes}/>
    );
};

export default ProfileRouter;