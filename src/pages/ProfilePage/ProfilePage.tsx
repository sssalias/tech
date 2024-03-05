import React from 'react';
import {BaseLayout} from "shared/app/ui";
import Avatar from "../../widgets/image/User/Avatar/Avatar";
import UserNav from "../../widgets/image/User/UserNav/UserNav";

const ProfilePage = () => {
    return (
        <BaseLayout>
            <div>
                <Avatar/>
                <h1 className='text-center font-bold text-2xl'>Alexn Efm</h1>
            </div><br/>
            <UserNav/>
        </BaseLayout>
    );
};

export default ProfilePage;