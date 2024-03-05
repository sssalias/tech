import React from 'react';
import {DefaultButton, BorderButton, Logo } from 'shared/app/ui';

const Header = () => {
    return (
        <header className='w-full'>
            <div className='w-full shadow'>
                <div className='container px-24 py-5 flex justify-between content-center'>
                    <Logo/>
                    <div className='flex gap-3'>
                        <BorderButton>Войти</BorderButton>
                        <DefaultButton>Зарегистрироваться</DefaultButton>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;