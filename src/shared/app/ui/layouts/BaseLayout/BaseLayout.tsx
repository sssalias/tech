import React, {ReactElement} from 'react';
import Header from "shared/app/ui/layouts/Header/Header";

type BaseLayoutProps = {
    children: ReactElement
}

const BaseLayout = ({children}:BaseLayoutProps) => {
    return (
        <div className='w-full h-auto'>
            <Header/>
            <div className='md:container md:mx-auto mt-5'>
                {children}
            </div>
        </div>
    );
};

export default BaseLayout;