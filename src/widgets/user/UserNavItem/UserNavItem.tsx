import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import classNames from "classnames";



type NavItemProps = {
    path: string,
    children: string
}

const UserNavItem = ({path, children}:NavItemProps) => {

    const currentPath = useLocation().pathname.split('/').filter(el => el !== '' && el !== 'profile')
    console.log(currentPath, path)
    const [active, setActive] = useState(currentPath.includes(path))

    // underline underline-offset-4 decoration-2 decoration-black
    return (
        <Link to={path}>
            <div className={classNames('hover:text-black', active ? 'text-black underline underline-offset-4 decoration-2 decoration-black' : null)}>
                {children}
            </div>
        </Link>
    );
};

export default UserNavItem;