import React from 'react';
import Logo from "../../kit/Logo/Logo";
import DefaultButton from "../../kit/Buttons/DefaultButton";
import BorderButton from "../../kit/Buttons/BorderButton";

const Header = () => {
    return (
        <header className='w-full h-16 bg-light-violet p-3'>
            <div className="flex justify-start gap-3 ">
                <Logo/>
            </div>
            <div className="flex justify-end gap-3">
                <BorderButton>
                    Войти
                </BorderButton>
                <DefaultButton>
                    Регистрация
                </DefaultButton>
            </div>
        </header>
    );
};

export default Header;