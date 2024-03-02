import React from 'react';
import BaseLayout from "shared/app/ui/layouts/BaseLayout/BaseLayout";

const IndexPage = () => {
    return (
        <BaseLayout>
            <h1 className=''>Hello!</h1>
            <button
                className="bg-transparent hover:bg-dark-violet text-dark-violet font-semibold hover:text-white py-2 px-4 border border-dark-violet hover:border-transparent rounded">
                Войти
            </button>
            <button
                className="bg-dark-violet hover:bg-dark-violet text-white font-bold py-2 px-4 border border-dark-violet rounded">
                Регистрация
            </button>

        </BaseLayout>
    );
};

export default IndexPage;