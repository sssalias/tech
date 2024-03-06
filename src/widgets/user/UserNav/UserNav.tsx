import React from 'react';
import {Link} from "react-router-dom";
import UserNavItem from "../UserNavItem/UserNavItem";

const UserNav = () => {
    return (
        <div className='w-full text-xl text-gray-600'>
            <nav className='flex justify-center gap-5'>
                <UserNavItem path='albums'>Альбомы</UserNavItem>
                <UserNavItem path=''>Фотографии</UserNavItem>
                <UserNavItem path=''>Видео</UserNavItem>
                <UserNavItem path=''>Избранное</UserNavItem>
            </nav>
        </div>
    );
};

export default UserNav;