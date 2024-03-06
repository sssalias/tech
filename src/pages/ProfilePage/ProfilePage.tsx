import React from 'react';
import {BaseLayout} from "shared/app/ui";
import {UserData, UserAvatar, UserNav} from 'widgets/user'
import ProfileRouter from "router/ProfileRouter/ProfileRouter";

const ProfilePage = () => {
    return (
        <BaseLayout>
            <div className='w-full flex-col space-y-6'>
                <div className='flex-col space-y-2.5'>
                    <UserAvatar/>
                    <UserData/>
                </div>
                <UserNav/>
                <div>
                    <ProfileRouter/>
                </div>
            </div>
        </BaseLayout>
    );
};

export default ProfilePage;