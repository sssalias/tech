import React from 'react';

import logo from 'app/assets/logo.png'

const Logo = () => {
    return (
        <div className='w-14 h-auto flex place-items-center  gap-1'>
            <img className='transition object-cover h-full w-full' src={logo} alt="hz"/>
            <h4 className='font-bold text-xl'>KoMedia</h4>
        </div>
    );
};

export default Logo;