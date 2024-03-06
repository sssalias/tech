import React from 'react';

import logo from 'app/assets/logo.png'
import {Link, useLocation} from "react-router-dom";

const Logo = () => {
    const location = useLocation()
    return (
        <div className='w-14 h-auto flex place-items-center gap-1'>
            <img className='transition object-cover h-full w-full' src={logo} alt="hz"/>
            {/*<Link to='/profile/albums/create' state={{prevLocation: location}}>asfasfsafas</Link>*/}
            <h4 className='font-bold text-xl bg-gradient-to-r from-dark-violet to-violet text-transparent bg-clip-text'>KoMedia</h4>
        </div>
    );
};

export default Logo;