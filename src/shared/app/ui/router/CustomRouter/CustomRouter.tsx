import React from 'react';
import {Route, Routes} from "react-router-dom";
import {IRoute} from "shared/app/ui/router/CustomRouter";


type CustomRouterProps = {
    routes:IRoute[]
}

const CustomRouter = ({routes}:CustomRouterProps) => {
    return (
        <Routes>
            {routes.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
    );
};

export default CustomRouter;