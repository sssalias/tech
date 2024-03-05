import React from 'react';

const UserNav = () => {
    return (
        <nav className="bg-white mx-96">
            <ul className="flex justify-between">
                <li className="mr-3">
                    <a className="inline-block border border-violet rounded py-2 px-4 bg-violet hover:bg-violet text-white"
                       href="#">Альбомы</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block border border-white rounded hover:border-gray-200 text-violet hover:bg-gray-200 py-2 px-4"
                       href="#">Фотографии</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block border border-white rounded hover:border-gray-200 text-violet hover:bg-gray-200 py-2 px-4" href="#">Видео</a>
                </li>
                <li className="mr-3">
                    <a className="inline-block border border-white rounded hover:border-gray-200 text-violet hover:bg-gray-200 py-2 px-4" href="#">Избранное</a>
                </li>
            </ul>
        </nav>
    );
};

export default UserNav;