import React from 'react';
import BaseLayout from "shared/app/ui/layouts/BaseLayout/BaseLayout";


import BorderButton from "shared/app/ui/kit/Buttons/BorderButton";
import DefaultButton from "shared/app/ui/kit/Buttons/DefaultButton";
import Logo from "shared/app/ui/kit/Logo/Logo";


const IndexPage = () => {
    return (
        <BaseLayout>
            <div className='flex justify-start gap-3'>
                <BorderButton>
                    Войти
                </BorderButton>
                <DefaultButton>
                    Регистрация
                </DefaultButton>
                <Logo/>
            </div>
        </BaseLayout>
    );
};

export default IndexPage;