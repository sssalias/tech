import React, {ReactElement} from 'react';
import Header from "shared/app/ui/layouts/Header/Header";

type BaseLayoutProps = {
    children: ReactElement
}

const BaseLayout = ({children}:any) => {
    return (
        <div className='w-full h-auto'>
            <Header/>
            <div className='md:mx-auto my-10'>
                <div className='px-24'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default BaseLayout;