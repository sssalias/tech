import React from 'react'
import UserNavItem from '../UserNavItem/UserNavItem'

const UserNav = () => {
    return (
        <div className='w-full text-xl text-gray-600'>
            <nav className='flex justify-center gap-5'>
                <UserNavItem  path='albums'>Альбомы</UserNavItem>
                <UserNavItem path='photos'>Фотографии</UserNavItem>
                <UserNavItem path='videos'>Видео</UserNavItem>
                <UserNavItem path=''>Избранное</UserNavItem>
            </nav>
        </div>
    );
};

export default UserNav;