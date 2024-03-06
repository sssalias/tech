import React from 'react';
import {Link, useLocation} from "react-router-dom";
import UserNavItem from "../UserNavItem/UserNavItem";

const UserNav = () => {
    const currentPath = useLocation().pathname.split('/').filter(el => el !== '' && el !== 'profile')
    return (
        <div className='w-full text-xl text-gray-600'>
            <nav className='flex justify-center gap-5'>
                <UserNavItem  path='albums'>Альбомы</UserNavItem>
                <UserNavItem path='photos'>Фотографии</UserNavItem>
                <UserNavItem path=''>Видео</UserNavItem>
                <UserNavItem path=''>Избранное</UserNavItem>
            </nav>
        </div>
    );
};

export default UserNav;