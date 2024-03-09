import React from 'react';
import {Route, Routes, useLocation} from 'react-router-dom'
import {IRoute} from 'shared/ui/router/CustomRouter/index'
import ModalRouter from 'router/ModalRouter/ModalRouter'


type CustomRouterProps = {
    routes:IRoute[]
}


const CustomRouter = ({routes}:CustomRouterProps) => {

    const location = useLocation()

    const prevLocation = location.state?.prevLocation

    return (
        <>
            <Routes location={prevLocation || location}>
                {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
            </Routes>
            {prevLocation && (
                <ModalRouter/>
            )}
        </>
    );
};

export default CustomRouter;