import React from 'react';
import {DefaultButton, BorderButton, Logo } from 'shared/app/ui/index';
import useUserStore from "../../../../../store/user/useUserStore";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {faUser} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Header = () => {

    const userIsAuth = useUserStore(state => state.isAuth)

    console.log(userIsAuth)

    return (
        <header className='w-full'>
            <div className='w-full shadow'>
                <div className='w-3/4 mx-auto py-5 flex justify-between items-center'>
                    <Logo/>

                    {userIsAuth ?
                        <Link to='profile/albums'>
                            <div className='flex justify-center items-center text-xl'>
                                <FontAwesomeIcon icon={faUser}/>
                            </div>
                        </Link>
                        :
                        <div className='flex gap-3'>
                            <BorderButton>Войти</BorderButton>
                            <DefaultButton>Зарегистрироваться</DefaultButton>
                        </div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;