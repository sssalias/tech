import React from 'react';
import Header from 'shared/ui/kit/Header/Header'
import {Outlet} from 'react-router-dom'

const BaseLayout = ({children}:any) => {
    return (
        <div className=' w-full mt-32'>
            <Header/>
            <div className='w-full'>
                <div className='w-3/4 mx-auto my-3'>
                    {children}
                </div>
            </div>
            <Outlet/>
        </div>
    );
};

export default BaseLayout;